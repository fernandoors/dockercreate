import { Button, Card, Input, Radio, Select } from "antd"
import React, { useState, useEffect } from "react"
import { Container, Flex } from "./styles"
import { download } from "../../utils/downloadFile"

export default function DockerForm() {
  const [data, setData] = useState(`FROM node:10-slim
          WORKDIR /app

          COPY package.json /app

          RUN  yarn && yarn cache clean

          COPY .  .

          COPY --chown=node:node . .

          USER node

          EXPOSE 3333

          VOLUME [ "/app" ]

          CMD [ "yarn", "start" ]`)

  function handleDownload() {
    download("Dockerfile", data)
  }

  return (
    <>
      <Container>
        <Card title="Docker File Form">
          <Flex>
            <div>
              <label>FROM</label>
              <Input></Input>
            </div>
            <div>
              <label>VERSION</label>
              <Select>
                <Select.Option> 1 </Select.Option>
              </Select>
            </div>
          </Flex>
          <Flex>
            <div>
              <label>IMAGE SIZE</label>
              <Radio.Group size="small">
                <Radio.Button value="common">COMMON</Radio.Button>
                <Radio.Button value="slim">SLIM</Radio.Button>
                <Radio.Button value="alpine">ALPINE</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <label>PORTS</label>
              <Input></Input>
            </div>
          </Flex>
          <Flex>
            <div>
              <label>CODE SOURCE</label>
              <Input></Input>
            </div>
            <div>
              <label>CODE DEST</label>
              <Input></Input>
            </div>
          </Flex>
          <label>START SCRIPT</label>
          <Input.TextArea></Input.TextArea>
          <label>EXTRA COMMANDS</label>
          <Input></Input>
        </Card>
        <div>
          <Button type="primary">Gerar download</Button>
          <Button type="primary" onClick={handleDownload}>
            Download
          </Button>
        </div>
      </Container>
    </>
  )
}
