const mongoObjectId = () => {
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16)
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function() {
        return ((Math.random() * 16) | 0).toString(16)
      })
      .toLowerCase()
  )
}
const extraCommands = (key = "", value = "", extra = "") => ({
  id: mongoObjectId(),
  key,
  value,
  extra,
})

const templateImage = [
  {
    id: "node",
    display: 'Node JS',
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
      extraCommands("USER", "node"),
      extraCommands("RUN", "chown -R node:node /app && chmod -R 755 /app"),
    ],
  },
  {
    id: "php",
    display: 'PHP',
    name: "php",
    version: "7.4-cli",
    size: "default",
    dirSource: "./",
    dirDestination: "/usr/src/myapp",
    packageFile: ". /usr/src/myapp",
    libInstall: "docker-php-source extract  && docker-php-source delete",

    ports: "3333",
    runScript: `php ./your-script.php`,
    extraCommands: [extraCommands()],
  },
  {
    id: "python",
    name: "python",
    display: 'Python',
    libs: "",
    version: "3",
    size: "default",
    dirSource: "./",
    dirDestination: "/usr/src/app",
    packageFile: "requirements.txt",
    libInstall: "pip install --no-cache-dir -r requirements.txt",
    ports: "3333",
    runScript: `python ./your-daemon-or-script.py`,
    extraCommands: [],
  },
  {
    id: "java",
    name: "openjdk",
    display: 'Java',
    libs: "",
    version: "7",
    size: "default",
    dirSource: "./",
    dirDestination: "/usr/src/myapp",
    packageFile: ". /usr/src/myapp",
    libInstall: "javac Main.java",
    ports: "3333",
    runScript: `java Main`,
    extraCommands: [extraCommands()],
  },
  {
    id: "dotnet",
    name: "microsoft-dotnet-core",
    display: '.Net Core',
    libs: "",
    version: "2.2",
    size: "default",
    dirSource: "*.csproj",
    dirDestination: "/app",
    packageFile: "",
    libInstall: "dotnet restore",
    ports: "80",
    runScript: "",
    extraCommands: [extraCommands("RUN", "dotnet publish -c Release -o out")],
  },
  {
    id: "golang",
    name: "golang",
    display: 'Go Lang',
    libs: "",
    version: "1.13",
    size: "default",
    dirSource: "./",
    dirDestination: "/go/src/app",
    packageFile: ".",
    libInstall: "go get -d -v ./...",
    ports: "3333",
    runScript: '"app"',
    extraCommands: [extraCommands("RUN", "go install -v ./...")],
  },
  {
    id: "ruby",
    name: "ruby",
    display: 'Ruby',
    libs: "",
    version: "2.5",
    size: "default",
    dirSource: ".",
    dirDestination: "/usr/src/app",
    packageFile: "Gemfile Gemfile.lock",
    libInstall: "bundle install",
    ports: "3333",
    runScript: './your-daemon-or-script.rb',
    extraCommands: [extraCommands("RUN", "bundle config --global frozen 1")],
  },
  {
    id: "ngix",
    name: "nginx",
    display: 'Nginx',
    libs: "",
    version: "1.17",
    size: "default",
    dirSource: "./",
    dirDestination: "nginx.conf /etc/nginx/nginx.conf",
    packageFile: "",
    libInstall: "",
    ports: "80",
    runScript: "",
    extraCommands: [extraCommands()],
  },
]

module.exports = {
  extraCommands,
  templateImage,
}
