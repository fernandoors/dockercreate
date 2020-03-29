export default function generateDockerFile(image) {
  const size = `-${image.size}` && ''
  const cmd = image.runScript.split(' ').map(item => `'${item}'`)
  
  return `
FROM ${image.name}:${image.version}${size}

WORKDIR ${image.dir}

COPY ${image.packageFile} ./

RUN ${image.libInstall}

COPY . ./

EXPOSE ${image.ports.replace(',', ' ')}

CMD [${cmd}]

`}