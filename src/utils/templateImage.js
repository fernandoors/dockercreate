
import { mongoObjectId } from "./idGenerate"

export const extraCommands = (key = '', value = '', extra = '') => ({
  id: mongoObjectId(),
  key,
  value,
  extra
})

export const templateImage = [
  {
    id: "NODE JS",
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
    name: "PHP",
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
