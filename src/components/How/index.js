import React from "react"
import { Collapse, Tabs, message } from "antd"

import { Container, CliStyle } from "./styles"
const { TabPane } = Tabs

export default function How() {
  function handleCopy(e) {
    navigator.clipboard.writeText(e)
    message.success('Copy to clipboard')
  }

  const checkInstall = () => {
    return (
      <>
        <CliStyle
          onClick={() => handleCopy('docker version')}
          htmlFor='Command to check correct install'
        >docker version</CliStyle> then using the standard image
        <CliStyle
          onClick={() => handleCopy('docker run hello-world')}
          htmlFor='Command to Start standard image to check docker services on machine'
        >docker run hello-world</CliStyle>
      </>
    )
  }

  return (
    <Container>
      <h2>Use Docker</h2>
      <div>
        <h3>How to install docker?</h3>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Windows" key="1">
            <p>
              To install docker on Windows, download and install Docker Desktop
              Hub&nbsp;
              <a href="https://hub.docker.com/editions/community/docker-ce-desktop-windows">
                here
              </a>
            </p>
              After install RUN command on CLI:
              {checkInstall()}
            <br /><br />
            <small
              htmlFor='PS. Docker for Windows require Windows 10 Professional or Enterprise 64bit.'
            >
              PS. Docker for Windows require Windows 10 Professional or Enterprise 64bit.
              </small>
          </TabPane>
          <TabPane tab="Mac" key="2">
            To install docker on Mac, download and install Docker Desktop
            Hub&nbsp;
              <a href="https://hub.docker.com/editions/community/docker-ce-desktop-mac">
              here
              </a>
            <br /><br />
              After install, the Docker menu in the top status bar indicates that Docker Desktop is running, and accessible from a terminal.
              <br /><br />
              RUN command on CLI: {checkInstall()}

          </TabPane>
          <TabPane tab="Ubuntu" key="3">
            Update your apt-get repository
              <CliStyle
              onClick={() => handleCopy('sudo apt-get update')}
              htmlFor='Command to Update your APT-GET repository'
            >
              sudo apt-get update
              </CliStyle>
            <br /><br />
              Then in your Terminal run command:
              <CliStyle
              onClick={() => handleCopy('sudo apt-get install docker-ee docker-ee-cli containerd.io')}
              htmlFor='Command to install on Ubuntu OS'
            >
              sudo apt-get install docker-ee docker-ee-cli containerd.io
              </CliStyle>
            <br /><br />
              RUN command on CLI: {checkInstall()}
          </TabPane>
        </Tabs>
      </div>
      <br /><br />
      <div>
        <h3>How to build?</h3>
        <p>
          Builder image is used to create or update your container with last data into your project.
            <br /><br />
            Save Dockerfile into main project directory and run this command:
            <CliStyle
            onClick={() => handleCopy('docker build -t <my_image_name> .')}
            htmlFor='Copy Command to build your Dockerfile '
          >docker build -t {`<my_image_name>`} .</CliStyle>
        </p>
        <small>
          To learn more read the official documentation: {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://docs.docker.com/engine/reference/commandline/build/">Docker Docs</a>
        </small>
      </div>
      <br /><br />
      <div>
        <h3>How to run docker container?</h3>
        <p>
          After build your image run this command:
          <CliStyle
            onClick={() => handleCopy("docker run --name <my_image_name> ")}
            htmlFor='Copy Command to build your Dockerfile '
          > docker run -it --rm {'<my_image_name>'} </CliStyle>
          <br /><br />
          <small>
            To learn more read the official documentation: {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://docs.docker.com/engine/reference/run/">Docker Docs</a>
          </small>
        </p>
      </div>
      <div>
        <h3>How to see docker containers is running?</h3>
        <p>
          To list your containers running in your machine run this command:
          <CliStyle
            onClick={() => handleCopy("docker ps ")}
            htmlFor='Copy Command to get docker container running '
          > docker ps </CliStyle>
        </p>
      </div>
      <div>
        <h3>How to access container Bash?</h3>
        <p>
          To access your container bash:
          <CliStyle
            onClick={() => handleCopy("docker exec -i -t <my_container_id> /bin/bash")}
            htmlFor='Copy Command to access container bash '
          > docker exec -i -t {`<my_container_id>`} /bin/bash</CliStyle>
        </p>
      </div>
      <div>
        <h3>How to exec shell commands?</h3>
        <p>
          To run a command into your container run this command:
          <CliStyle
            onClick={() => handleCopy("docker exec -i -t <my_container_id> <command>")}
            htmlFor='Copy Command run shell command into the container'
          > docker exec -i -t {`<my_container_id>`} {`<command>`}</CliStyle>
        </p>
      </div>
      <div>
        <h3>How to see logs?</h3>
        <p>
          To check logs informations into your container run this command:
          <CliStyle
            onClick={() => handleCopy("docker logs <my_container_id>")}
            htmlFor='Copy Command run shell command into the container'
          > docker logs  {`<my_container_id>`}</CliStyle>
        </p>
      </div>
    </Container>
  )
}
