import React from "react"
import { Collapse, Tabs, message } from "antd"

import { Container, CliStyle } from "./styles"
const { Panel } = Collapse
const { TabPane } = Tabs

export default function How() {
  function handleCopy(e) {
    navigator.clipboard.writeText(e)
    message.success('Copy to clipboard')
  }
  const howInstallDockerUbuntu = `
  run: sudo apt install docker-ce
`

  

  const text = "Sequelize"
  return (
    <Container>
      <h2>FAQ</h2>
      <Collapse accordion>
        <Panel header="How to install docker?" key="1">
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
              <CliStyle
                onClick={() => handleCopy('docker version')}
                htmlFor='Command to check correct install on Windows'
              >docker version</CliStyle> then using the standard image
              <CliStyle
                onClick={() => handleCopy('docker run hello-world')}
                htmlFor='Command to Start standard image to check docker services on machine'
              >docker run hello-world</CliStyle>
              <br />
              <br />
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
            </TabPane>
            <TabPane tab="Ubuntu" key="3">
              {howInstallDockerUbuntu}
            </TabPane>
          </Tabs>
        </Panel>
        <Panel header="How to build?" key="2">
        <p>
            Build image is used to create or update your container with last data into your project
          <CliStyle
              onClick={() => handleCopy('docker up -u')}
              htmlFor='Copy Command to build your Dockerfile '
            >
              docker build .
          </CliStyle>
          </p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Container>
  )
}
