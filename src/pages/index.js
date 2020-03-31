import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Buttons from "../components/Buttons/Buttons"
import DockerForm from "../components/DockerForm/DockerForm"
import How from "../components/How/index"
// import Clipbox from "../components/Clipbox/index"
import { Modal, Button, message } from "antd"

import { download } from "../utils/downloadFile"
import generateDockerFile from "../utils/generateDockerFile"

import { extraCommands } from "../utils/templateImage"

const IndexPage = () => {
  const [data, setData] = useState({
    name: "",
    version: "",
    size: "",
    dirSource: "",
    dirDestination: "",
    packageFile: "",
    libInstall: "",
    ports: "",
    runScript: "",
    extraCommands: [extraCommands()],
  })
  const [preview, setPreview] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function handleModal() {
    setPreview(generateDockerFile(data))
    setModalVisible(!modalVisible)
  }

  function handleInput({ target }) {
    const { value, name } = target
    setData({ ...data, [name]: value })
  }

  function handleSelect(key, value) {
    setData({ ...data, [key]: value })
  }

  function handleCopy() {
    const generateDocker = generateDockerFile(data)
    navigator.clipboard.writeText(generateDocker)
    message.success('Copy to clipboard')
  }

  function handleDownload() {
    const generateDocker = generateDockerFile(data)
    if (typeof generateDocker === "string") {
      return download("Dockerfile", generateDocker)
    } else {
      message.error("Error in fields")
    }
  }

  function handleNewCommand(event) {
    event.stopPropagation()
    setData({
      ...data,
      extraCommands: [...data.extraCommands, extraCommands()],
    })
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

  function handleTemplate(template) {
    setData(template)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Buttons handleTemplate={handleTemplate} />
      <DockerForm
        data={data}
        handleInput={handleInput}
        handleSelect={handleSelect}
        handleNewCommand={handleNewCommand}
        handleDeleteCommand={handleDeleteCommand}
        handleExtraSelect={handleExtraSelect}
        handleExtraInput={handleExtraInput}
      />
      <div>
        <Button type="primary" shape='round' onClick={handleModal}>
          Gerar download
        </Button>
        <Modal
          title="Gerar download"
          visible={modalVisible}
          onOk={handleDownload}
          onCancel={handleModal}
          footer={[
            <Button onClick={handleModal}>Cancel</Button>,
            <Button type="dashed" onClick={handleCopy}>
              Copy
            </Button>,

            <Button type="primary" onClick={handleDownload}>
              Download
            </Button>,
          ]}
        >
          {preview.split("\n")
            .map((item, i) =>
              <p key={item + i}>{item}</p>
            )}
        </Modal>
      </div>
      <br />
      <How />
    </Layout>
  )
}

export default IndexPage
