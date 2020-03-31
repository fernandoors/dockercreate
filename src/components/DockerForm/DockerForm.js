import React, { useState } from "react"
import { Button, Card, Input, Radio, Select, Collapse } from "antd"
import { Container, Flex, Extras } from "./styles"
import { PlusCircleOutlined } from "@ant-design/icons"

export default function DockerForm(props) {
  // const [version, setVersion] = useState([])
  const {
    data,
    handleInput,
    handleSelect,
    handleDownload,
    handleNewCommand,
    handleDeleteCommand,
    handleExtraSelect,
    handleExtraInput,
  } = props
  // useEffect(() => {
  //   async function getImageVersions() {
  //     const response = await Axios.get(`https://registry.hub.docker.com/v1/repositories/${data.name}/tags`)
  //     return response.data
  //   }
  //   console.log(getImageVersions())
  //   setVersion([])
  // }, [data.name])

  return (
    <>
      <Container>
        <Card title="Docker File Form">
          <Flex>
            <div>
              <label htmlFor="Image Name">FROM</label>
              <Input name="name" value={data.name} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="Image Version Reference">VERSION</label>
              <Select
                value={data.version}
                onChange={value => handleSelect("version", value)}
              >
                <Select.Option value="1"> 1 </Select.Option>
                <Select.Option value="2"> 2 </Select.Option>
                <Select.Option value="3"> 3 </Select.Option>
              </Select>
            </div>
          </Flex>
          <Flex>
            <div>
              <label htmlFor="Size of Image">IMAGE SIZE</label>
              <Radio.Group
                size="small"
                name="size"
                value={data.size}
                onChange={handleInput}
              >
                <Radio.Button value="default">DEFAULT</Radio.Button>
                <Radio.Button value="slim">SLIM</Radio.Button>
                <Radio.Button value="alpine">ALPINE</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <label htmlFor="Ports Usage in your Project">PORTS</label>
              <Input name="ports" value={data.ports} onChange={handleInput} />
            </div>
          </Flex>
          <Flex>
            <div>
              <label htmlFor="Code Source in your Machine">CODE SOURCE</label>
              <Input
                name="dirSource"
                value={data.dirSource}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="Code Destination in Container">CODE DEST</label>
              <Input
                name="dirDestination"
                value={data.dirDestination}
                onChange={handleInput}
              />
            </div>
          </Flex>
          <label htmlFor="CLI script to run project">START SCRIPT</label>
          <Input.TextArea value={data.runScript} onChange={handleInput} />
          <Collapse bordered={false}>
            <Collapse.Panel
              extra={<PlusCircleOutlined onClick={handleNewCommand} />}
              header="Extra Commands"
              key="extra-commands"
            >
              {data.extraCommands.map(extras => (
                <Extras key={extras.id}>
                  <Select
                    value={extras.key}
                    onChange={data => handleExtraSelect(extras.id, "key", data)}
                  >
                    <Select.Option value="ENV">ENV</Select.Option>
                    <Select.Option value="COPY">COPY</Select.Option>
                    <Select.Option value="RUN">RUN</Select.Option>
                    <Select.Option value="USER">USER</Select.Option>
                    <Select.Option value="VOLUME">VOLUME</Select.Option>
                    <Select.Option value="LABEL">LABEL</Select.Option>
                  </Select>
                  {extras.key === "COPY" || extras.key === "ENV" ? (
                    <>
                      <Input
                        placeholder="Data Source"
                        value={extras.value}
                        onChange={e =>
                          handleExtraInput(extras.id, "value", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Data Destination"
                        value={extras.extra}
                        onChange={e =>
                          handleExtraInput(extras.id, "extra", e.target.value)
                        }
                      />
                    </>
                  ) : (
                    <Input
                      value={extras.value}
                      onChange={e =>
                        handleExtraInput(extras.id, "value", e.target.value)
                      }
                    />
                  )}
                  <Button
                    type="danger"
                    onClick={() => handleDeleteCommand(extras.id)}
                  >
                    Delete
                  </Button>
                </Extras>
              ))}
            </Collapse.Panel>
          </Collapse>
        </Card>
        <div>
          {/* <Button type="primary">Gerar download</Button>
          <Button type="primary" onClick={handleDownload}>
            Download
          </Button> */}
        </div>
      </Container>
    </>
  )
}
