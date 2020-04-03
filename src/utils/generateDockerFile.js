export default function generateDockerFile(image) {
  const size = `-${image.size}` && ""
  const cmd = image.runScript.split(" ").map(item => `'${item}'`)
  const extrasCommands = image.extraCommands.reduce(
    (prev, current) =>
      prev + `${current.key} ${current.value} ${current.extra} \n`,
    ""
  )
  return `
FROM ${image.name}:${image.version}${size}

WORKDIR ${image.dirDestination}

${image.packageFile && `COPY ${image.packageFile} ./`}

${extrasCommands}
${image.libInstall && `RUN ${image.libInstall}`}

COPY ${image.dirSource} ${image.dirDestination}

EXPOSE ${image.ports.replace(",", " ")}

${cmd.length > 1 ? `CMD [${cmd}]` : ''}

`
}
