import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Buttons from "../components/Buttons/Buttons"
import DockerForm from "../components/DockerForm/DockerForm"
import How from "../components/How/index"
import { message } from "antd"

import { download } from "../utils/downloadFile"
import generateDockerFile from "../utils/generateDockerFile"

import { extraCommands } from "../utils/templateImage"
import ModalPreview from "../components/ModalPreview/ModalPreview"

const initialStateData = {
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
}

const IndexPage = () => {
  const [data, setData] = useState(initialStateData)
  const [preview, setPreview] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function handleCleanState() {
    setData(initialStateData)
  }

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
        handleModal={handleModal}
        handleCleanState={handleCleanState}
      />
      <div>

        <ModalPreview
          modalVisible={modalVisible}
          handleDownload={handleDownload}
          handleModal={handleModal}
          handleCopy={handleCopy}
          preview={preview}
        />
      </div>
      <br />
      <How />
    </Layout>
  )
}

export default IndexPage
