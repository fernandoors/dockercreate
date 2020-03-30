import { Button, Card, Input, Radio, Select, Collapse, message } from "antd"
import React, { useState, useEffect } from "react"
import { Container, Flex, Extras } from "./styles"
import { download } from "../../utils/downloadFile"
import generateDockerFile from "../../utils/generateDockerFile"
import { mongoObjectId } from "../../utils/idGenerate"
import { PlusCircleOutlined } from '@ant-design/icons'
const extraCommands = () => ({
  id: mongoObjectId(),
  key: '',
  value: '',
  extra: ''
})
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
    runScript: '',
    extraCommands: [extraCommands()]
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
    if (typeof generateDocker === 'string') {
      return download("Dockerfile", generateDocker)
    } else {
      message.error('Error in fields')
    }
  }

  function handleNewCommand(event) {
    event.stopPropagation();
    setData({ ...data, extraCommands: [...data.extraCommands, extraCommands()] })
  }
  function handleDeleteCommand(id) {
    const extraCommands = data.extraCommands.filter(item => item.id !== id)
    setData({ ...data, extraCommands })
  }
  function handleExtraSelect(id, key, value) {
    const extraData = data.extraCommands.map(item => {
      if (item.id === id) {
        item[key] = value
      }
      return item
    })
    setData({ ...data, extraCommands: extraData })
  }
  function handleExtraInput(id, key, value) {
    const extraData = data.extraCommands.map(item => {
      if (item.id === id) {
        item[key] = value
      }
      return item
    })
    setData({ ...data, extraCommands: extraData })
  }
  return (
    <>
      <Container>
        <Card title="Docker File Form">
          <Flex>
            <div>
              <label htmlFor="Image Name">FROM</label>
              <Input name='name' value={data.name} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="Image Version Reference">VERSION</label>
              <Select value={data.version} onChange={value => handleSelect('version', value)}>
                <Select.Option value='1'> 1 </Select.Option>
                <Select.Option value='2'> 2 </Select.Option>
                <Select.Option value='3'> 3 </Select.Option>
              </Select>
            </div>
          </Flex>
          <Flex>
            <div>
              <label htmlFor="Size of Image">IMAGE SIZE</label>
              <Radio.Group size="small" name='size' value={data.size} onChange={handleInput} >
                <Radio.Button value="common">COMMON</Radio.Button>
                <Radio.Button value="slim">SLIM</Radio.Button>
                <Radio.Button value="alpine">ALPINE</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <label htmlFor="Ports Usage in your Project">PORTS</label>
              <Input name='ports' value={data.ports} onChange={handleInput} />
            </div>
          </Flex>
          <Flex>
            <div>
              <label htmlFor="Code Source in your Machine">CODE SOURCE</label>
              <Input name='dirSource' value={data.dirSource} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="Code Destination in Container">CODE DEST</label>
              <Input name='dirDestination' value={data.dirDestination} onChange={handleInput} />
            </div>
          </Flex>
          <label htmlFor='CLI script to run project'>START SCRIPT</label>
          <Input.TextArea value={data.runScript} onChange={handleInput} />
          <Collapse bordered={false}>
            <Collapse.Panel
              extra={<PlusCircleOutlined onClick={handleNewCommand} />}
              header="Extra Commands" key="extra-commands"
            >
              {data.extraCommands.map(item =>
                <Extras key={item.id}>
                  <Select valeu={item.key} onChange={data => handleExtraSelect(item.id, 'key', data)}>
                    <Select.Option value='ENV'>ENV</Select.Option>
                    <Select.Option value='COPY'>COPY</Select.Option>
                    <Select.Option value='RUN'>RUN</Select.Option>
                    <Select.Option value='USER'>USER</Select.Option>
                  </Select>
                  {item.key === 'COPY' ?
                    <>
                      <Input placeholder='Data Source'
                        value={item.value}
                        onChange={e => handleExtraInput(item.id, 'value', e.target.value)}
                      />
                      <Input placeholder='Data Destination'
                        value={item.extra}
                        onChange={e => handleExtraInput(item.id, 'extra', e.target.value)}
                      />
                    </>
                    :
                    <Input value={item.value} onChange={e => handleExtraInput(item.id, 'value', e.target.value)} />
                  }
                  <Button onClick={() => handleDeleteCommand(item.id)}>
                    Delete
                  </Button>
                </Extras>
              )}
            </Collapse.Panel>
          </Collapse>
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
