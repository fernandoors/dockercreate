import React, { useEffect, useState } from "react"
import { Button, Card, Input, Select, Collapse, Tooltip } from "antd"
import { Container, Flex, Extras } from "./styles"
import imagesReferences from '../../utils/images.json'
import { PlusCircleOutlined, QuestionCircleOutlined, InfoCircleOutlined } from "@ant-design/icons"
const { Option, OptGroup } = Select

export default function DockerForm(props) {
  const [hasVersions, setHasVersions] = useState(false)
  const [versions, setVersions] = useState([])
  const {
    data,
    handleInput,
    handleSelect,
    handleModal,
    handleNewCommand,
    handleDeleteCommand,
    handleExtraSelect,
    handleExtraInput,
    handleCleanState
  } = props
  const handleFilter = (input, option) => {
    if (!option.title) return
    return option.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
  }
  useEffect(() => {
    handleSelect('version', '')
    const [getVersion] = imagesReferences
      .filter(item => item.id === data.name)
      .map(image => image.version)
    setVersions(getVersion)
    if (!!getVersion)
      setHasVersions(!!getVersion.length || false)
  }, [data.name])
  function handleSelectName(item) {
    handleSelect('name', item)
  }
  function handleSelectVersion(item) {
    handleSelect('version', item)
  }
  return (
    <>
      <Container>
        <Card title="Docker File Form" extra={
          <>
            <Button type="danger" onClick={handleCleanState}>
              Clean
            </Button>
            <Button type="primary" onClick={handleModal}>
              Generate
            </Button>
          </>
        }
          actions={[
            <Button type="danger" onClick={handleCleanState}>Clean</Button>,
            <Button type="primary" onClick={handleModal}>Generate DockerFile</Button>
          ]}
        >
          <Flex>
            <div>
              <label htmlFor="Image Name">FROM
                <Tooltip title={'Input a image reference: Ex. node, ubuntu, centos, python, php, etc.'}>
                  <QuestionCircleOutlined />
                </Tooltip>
              </label>

              <Select
                value={data.name ? [data.name] : []}
                showSearch
                mode="tags"
                filterOption={handleFilter}
                onSelect={handleSelectName}
              >
                <OptGroup label="Certificate Images">
                  {imagesReferences
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(image => (
                      <Option key={image.id} title={image.name}>
                        <Tooltip title={image.name}>
                          {image.name}
                        </Tooltip>
                      </Option>
                    ))}
                </OptGroup>
              </Select>
              {imagesReferences
                .filter(item => item.id === data.name).length ?
                <a
                  className='helper'
                  target="_blank" rel="external nofollow noopener noreferrer"
                  title='Get official image information'
                  href={`https://hub.docker.com/_/${data.name}`}>
                  <Tooltip title='Image Documentation'>
                    <InfoCircleOutlined />
                  </Tooltip>
                </a>
                : ''
              }
            </div>
            <div>
              <label htmlFor="Image Version Reference. PS. Get correct image from docker hub page">VERSION
              <Tooltip title={'Input the image version. Get correct image from docker hub page'}>
                  <QuestionCircleOutlined />
                </Tooltip>
              </label>
              {hasVersions ?
                <Select
                  value={data.version ? [data.version] : []}
                  mode="tags"
                  showSearch
                  onSelect={handleSelectVersion}
                >
                  {versions.map(version =>
                    <Option key={version} title={version}>
                      <Tooltip title={version}>
                        {version}
                      </Tooltip>
                    </Option>
                  )}
                </Select>
                :
                <Input aria-label="Input Image Version"
                  name="version"
                  value={data.version}
                  onChange={handleInput}
                />
              }
            </div>
          </Flex>
          <Flex>
            <div>
              <label htmlFor="Ports Usage in your Project">PORTS
              <Tooltip title={'Ports to access from Host to Container. Ex. 3333 8080'}>
                  <QuestionCircleOutlined />
                </Tooltip>
              </label>
              <Input aria-label="Search" name="ports" value={data.ports} onChange={handleInput} />
            </div>
          </Flex>
          <Flex>
            <div>
              <label htmlFor="Code Source in your Machine">CODE SOURCE
              <Tooltip title={'Directory where your project is saved into your machine (Host) Ex: ./ or ./app '}>
                  <QuestionCircleOutlined />
                </Tooltip>
              </label>
              <Input aria-label="Input Source Dir (on Host)"
                name="dirSource"
                value={data.dirSource}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="Code Destination in Container">CODE DEST
              <Tooltip title={'Directory where your project is saved into your container (Image) Ex: /usr/src/myapp or /usr/share/nginx/html or /app '}>
                  <QuestionCircleOutlined />
                </Tooltip>
              </label>
              <Input aria-label="Input Destination dir (on Container)"
                name="dirDestination"
                value={data.dirDestination}
                onChange={handleInput}
              />
            </div>
          </Flex>
          <label htmlFor="CLI script to run project">START SCRIPT
          <Tooltip title={'Input command to start your project. Ex. php ./index.php or npm start, etc.'}>
              <QuestionCircleOutlined />
            </Tooltip>
          </label>
          <Input.TextArea aria-label="Input Run command" name='runScript' value={data.runScript} onChange={handleInput} />
          <Collapse bordered={false}>
            <Collapse.Panel
              extra={<>
                <PlusCircleOutlined onClick={handleNewCommand} />
                <Tooltip title={'Set Commands, Volumes, Users, Environments and Path files into your DockerFile.'}>
                  <QuestionCircleOutlined />
                </Tooltip>
              </>}
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
                      <Input aria-label="Input data source (on Host)"
                        placeholder={extras.key === 'COPY' ? "Data Source" : 'KEY'}
                        value={extras.value}
                        onChange={e =>
                          handleExtraInput(extras.id, "value", e.target.value)
                        }
                      />
                      <Input aria-label="Input data destination (on Container)"
                        placeholder={extras.key === 'COPY' ? "Data Destination" : 'VALUE'}
                        value={extras.extra}
                        onChange={e =>
                          handleExtraInput(extras.id, "extra", e.target.value)
                        }
                      />
                    </>
                  ) : (
                      <Input aria-label={`Input value ${extras.key && 'of ' + extras.key}`}
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
      </Container>
    </>
  )
}
