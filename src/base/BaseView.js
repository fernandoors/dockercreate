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
    <>
      <SEO title={`docker ${id || 'Create Image'}`} description={`Get a docker template to ${id || 'your project'} environment`} />
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
    </>
  )
}

export default BaseView
