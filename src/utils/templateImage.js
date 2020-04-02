
const mongoObjectId = () => {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
}
const extraCommands = (key = '', value = '', extra = '') => ({
  id: mongoObjectId(),
  key,
  value,
  extra
})

const templateImage = [
  {
    id: "node",
    name: "node",
    version: '10',
    size: 'default',
    dirSource: './',
    dirDestination: '/app',
    packageFile: 'package.json',
    libInstall: 'npm install',
    ports: '3333',
    runScript: 'npm start',
    extraCommands: [
      extraCommands('USER', 'node'),
      extraCommands('RUN', 'chown -R node:node /app && chmod -R 755 /app'),
    ]
  },
  {
    id: "php",
    name: "php",
    version: '10',
    size: 'default',
    dirSource: './',
    dirDestination: '/app',
    packageFile: 'package.json',
    libInstall: 'npm install',
    ports: '3333',
    runScript: 'npm start',
    extraCommands: [
      extraCommands('USER', 'node'),
      extraCommands('RUN', 'chown -R node:node /app && chmod -R 755 /app'),
    ]
  },
  {
    id: "python",
    name: "PYTHON",
    libs: "pa",
    version: '',
    size: '',
    dirSource: '',
    dirDestination: '',
    packageFile: '',
    libInstall: '',
    ports: '',
    runScript: '',
    extraCommands: [extraCommands()]
  },
  {
    id: "java",
    name: "JAVA",
    libs: "pa",
    version: '',
    size: '',
    dirSource: '',
    dirDestination: '',
    packageFile: '',
    libInstall: '',
    ports: '',
    runScript: '',
    extraCommands: [extraCommands()]
  },
  {
    id: ".net",
    name: ".NET",
    libs: "pa",
    version: '',
    size: '',
    dirSource: '',
    dirDestination: '',
    packageFile: '',
    libInstall: '',
    ports: '',
    runScript: '',
    extraCommands: [extraCommands()]
  },
  {
    id: "go",
    name: "GO",
    libs: "pa",
    version: '',
    size: '',
    dirSource: '',
    dirDestination: '',
    packageFile: '',
    libInstall: '',
    ports: '',
    runScript: '',
    extraCommands: [extraCommands()]
  },
  {
    id: "ruby",
    name: "RUBY",
    libs: "pa",
    version: '',
    size: '',
    dirSource: '',
    dirDestination: '',
    packageFile: '',
    libInstall: '',
    ports: '',
    runScript: '',
    extraCommands: [extraCommands()]
  },
  {
    id: "ngix",
    name: "NGIX",
    libs: "pa",
    version: '',
    size: '',
    dirSource: '',
    dirDestination: '',
    packageFile: '',
    libInstall: '',
    ports: '',
    runScript: '',
    extraCommands: [extraCommands()]
  },
]

module.exports = {
  extraCommands,
  templateImage
}