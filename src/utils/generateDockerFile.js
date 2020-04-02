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

COPY ${image.packageFile} ./

${extrasCommands}
RUN ${image.libInstall}

COPY . ./

EXPOSE ${image.ports.replace(",", " ")}

CMD [${cmd}]

`
}
