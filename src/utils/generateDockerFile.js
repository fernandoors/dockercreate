export default function generateDockerFile(image) {
  const cmd = image.runScript
    .split(" ")
    .map(item => item.length ? `'${item}'` : '')
    .filter(item => item !== '')
  const extrasCommands = image.extraCommands.reduce(
    (prev, current) =>
      prev + `${current.key} ${current.value} ${current.extra} \n`,
    ""
  )
  return `
FROM ${image.name}${image.version ? ':' + image.version : ''}

WORKDIR ${image.dirDestination}

${extrasCommands}

COPY ${image.dirSource} ${image.dirDestination}

EXPOSE ${image.ports.replace(",", " ")}

${cmd.length ? `CMD [${cmd}]` : ''}

`
}
