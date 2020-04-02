import React from "react"
import { Collapse } from "antd"

import { Container } from "./styles"
const { Panel } = Collapse

export default function How() {
  const howInstallDocker = `
  https://docs.docker.com/install/
`
  const howToBuild = `
    After download Dockerfile run "$ docker-compose up"
  `

  const text = "Sequelize"
  return (
    <Container>
      <h2>FAQ</h2>
      <Collapse accordion>
        <Panel header="How to install docker?" key="1">
          <p>{howInstallDocker}</p>
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
