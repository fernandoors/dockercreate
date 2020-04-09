const mongoObjectId = () => {
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16)
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
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
    dirSource: "./",
    dirDestination: "/app",
    ports: "3333",
    runScript: "npm start",
    extraCommands: [
      extraCommands("USER", "node"),
      extraCommands("RUN", "chown -R node:node /app && chmod -R 755 /app"),
      extraCommands("COPY", "package.json", './'),
      extraCommands("RUN", "npm install"),
    ],
  },
  {
    id: "php",
    display: 'PHP',
    name: "php",
    version: "7.4-cli",
    dirSource: "./",
    dirDestination: "/usr/src/myapp",
    ports: "9000",
    runScript: `composer install --prefer-source --no-interaction`,
    extraCommands: [
      extraCommands('RUN', 'apk update && apk add build-base'),
      extraCommands('RUN', "apk add postgresql postgresql-dev && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql && docker-php-ext-install pdo pdo_pgsql pgsql"),
      extraCommands('RUN', "apk add zlib-dev git zip && docker-php-ext-install zip"),
      extraCommands('RUN', "curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/  && ln -s /usr/local/bin/composer.phar /usr/local/bin/composer"),
    ],
  },
  {
    id: "python",
    name: "python",
    display: 'Python',
    version: "3",
    dirSource: "./",
    dirDestination: "/usr/src/app",
    ports: "3333",
    runScript: `python ./app.py`,
    extraCommands: [
      extraCommands('COPY', 'requirements.txt', './'),
      extraCommands('RUN', 'pip install --no-cache-dir -r requirements.txt'),
    ],
  },
  {
    id: "java",
    name: "openjdk",
    display: 'Java',
    version: "7",
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
    version: "2.2",
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
    version: "1.13",
    dirSource: "./",
    dirDestination: "/go/src/app",
    packageFile: ".",
    libInstall: "go get -d -v ./...",
    ports: "3333",
    runScript: 'app',
    extraCommands: [extraCommands("RUN", "go install -v ./...")],
  },
  {
    id: "ruby",
    name: "ruby",
    display: 'Ruby',
    version: "2.5",
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
    version: "1.17",
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
