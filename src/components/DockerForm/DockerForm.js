import { Button, Card, Input, Radio, Select } from "antd"
import React, { useState, useEffect } from "react"
import { Container, Flex } from "./styles"
import { download } from "../../utils/downloadFile"
import generateDockerFile from "../../utils/generateDockerFile"

export default function DockerForm() {
  const [data, setData] = useState({
    name: '',
    version: '',
    size: '',
    dirSource: '',
    dirDestination: '',
    packageFile: '',
    libInstall: '',
    ports: '',
    runScript: ''
  })

  function handleInput({ target }) {
    const { value, name } = target
    setData({ ...data, [name]: value })
  }

  function handleSelect(key, value) {
    setData({ ...data, [key]: value })
  }

  function handleDownload() {
    const generateDocker = generateDockerFile(data)
    download("Dockerfile", generateDocker)
  }

  return (
    <>
      <Container>
        <Card title="Docker File Form">
          <Flex>
            <div>
              <label>FROM</label>
              <Input name='name' value={data.name} onChange={handleInput} />
            </div>
            <div>
              <label>VERSION</label>
              <Select value={data.version} onChange={value => handleSelect('version', value)}>
                <Select.Option value='1'> 1 </Select.Option>
                <Select.Option value='2'> 2 </Select.Option>
                <Select.Option value='3'> 3 </Select.Option>
              </Select>
            </div>
          </Flex>
          <Flex>
            <div>
              <label>IMAGE SIZE</label>
              <Radio.Group size="small" name='size' value={data.size} onChange={handleInput} >
                <Radio.Button value="common">COMMON</Radio.Button>
                <Radio.Button value="slim">SLIM</Radio.Button>
                <Radio.Button value="alpine">ALPINE</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <label>PORTS</label>
              <Input name='ports' value={data.ports} onChange={handleInput} />
            </div>
          </Flex>
          <Flex>
            <div>
              <label>CODE SOURCE</label>
              <Input name='dirSource' value={data.dirSource} onChange={handleInput} />
            </div>
            <div>
              <label>CODE DEST</label>
              <Input name='dirDestination' value={data.dirDestination} onChange={handleInput} />
            </div>
          </Flex>
          <label>START SCRIPT</label>
          <Input.TextArea name='runScript' value={data.runScript} onChange={handleInput} />
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
