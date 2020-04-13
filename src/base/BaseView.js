import React, { useState, useEffect } from "react"

import SEO from "../components/seo"
import Buttons from "../components/Buttons/Buttons"
import DockerForm from "../components/DockerForm/DockerForm"
import How from "../components/How/index"
import { message } from "antd"

import { download } from "../utils/downloadFile"
import generateDockerFile from "../utils/generateDockerFile"

import { extraCommands, templateImage } from "../utils/templateImage"
import ModalPreview from "../components/ModalPreview/ModalPreview"
import { Container } from "./styles"

const initialStateData = {
  name: "",
  version: "",
  dirSource: "",
  dirDestination: "",
  ports: "",
  runScript: "",
  extraCommands: [extraCommands()],
}
function BaseView({ id = '' }) {
  const [data, setData] = useState(initialStateData)
  const [preview, setPreview] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    if (id) {
      const template = templateImage.filter(item => item.id === id)
      setData(...template)
    }
  }, [id])
  function handleCleanState() {
    setData(initialStateData)
  }

  function handleModal() {
    setPreview(generateDockerFile(data))
    setModalVisible(prev => !prev)
  }

  function handleInput({ target }) {
    const { value, name } = target
    setData(prev => ({ ...prev, [name]: value }))
  }

  function handleSelect(key, value) {
    if (key === 'name')
      return setData(prev => ({ ...prev, [key]: value, version: '' }))
    setData(prev => ({ ...prev, [key]: value }))
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
    setData(prev => ({
      ...prev,
      extraCommands: [...data.extraCommands, extraCommands()],
    }))
  }
  function handleDeleteCommand(id) {
    const extraCommands = data.extraCommands.filter(item => item.id !== id)
    setData(prev => ({ ...prev, extraCommands }))
  }
  function handleExtraSelect(id, key, value) {
    const extraData = data.extraCommands.map(item => {
      if (item.id === id) {
        item[key] = value
      }
      return item
    })
    setData(prev => ({ ...prev, extraCommands: extraData }))
  }
  function handleExtraInput(id, key, value) {
    const extraData = data.extraCommands.map(item => {
      if (item.id === id) {
        item[key] = value
      }
      return item
    })
    setData(prev => ({ ...prev, extraCommands: extraData }))
  }

  function handleTemplate(template) {
    setData(template)
  }
  return (
    <Container>
      <SEO title={`Docker ${id || 'Create Image'}`} description={`Get a docker template to ${id || 'your project'} environment with the best practices by official documentation`} />
      <h2>Create or Customize a new DockerFile using this form and getting templates suggestions by official documentation and community.</h2>
      <Buttons handleTemplate={handleTemplate} templateImage={templateImage} />
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
      <ModalPreview
        modalVisible={modalVisible}
        handleDownload={handleDownload}
        handleModal={handleModal}
        handleCopy={handleCopy}
        preview={preview}
      />
      <br />
      <How />
    </Container>
  )
}

export default BaseView
