import React from "react"
import { Collapse, Tabs } from "antd"

import { Container } from "./styles"
const { Panel } = Collapse
const { TabPane } = Tabs

export default function How() {
  const howInstallDockerUbuntu = `
  run: sudo apt install docker-ce
`

  const howToBuild = `
    After download Dockerfile run "$ docker up -u"
  `
  function callback(key) {
    console.log(key)
  }

  const text = "Sequelize"
  return (
    <Container>
      <h2>FAQ</h2>
      <Collapse accordion>
        <Panel header="How to install docker?" key="1">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Windows" key="1">
              To install docker on Windows, download and install Docker Desktop
              Hub&nbsp;
              <a href="https://hub.docker.com/editions/community/docker-ce-desktop-windows">
                here
              </a>
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
          ,<p></p>
        </Panel>
        <Panel header="How to build?" key="2">
          <p>{howToBuild}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Container>
  )
}
