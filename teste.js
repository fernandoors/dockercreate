const data = `{
  id: "NODE JS",
  name: "node",
  version: "10",
  size: "default",
  dirSource: "./",
  dirDestination: "/app",
  packageFile: "package.json",
  libInstall: "npm install",
  ports: "3333",
  runScript: "npm start",
  extraCommands: [
    { id: "5e82a8a0bfa9062f3c746b28", key: "USER", value: "node", extra: "" },
    {
      id: "5e82a8a032511daf6a1120da",
      key: "RUN",
      value: "chown -R node:node /app && chmod -R 755 /app",
      extra: "",
    },
  ],
}`

console.log(data)
