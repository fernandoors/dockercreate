import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Buttons from "../components/Buttons/Buttons"
import DockerForm from "../components/DockerForm/DockerForm"
import { download } from "../utils/downloadFile"
import generateDockerFile from "../utils/generateDockerFile"
import { message } from "antd"
import { extraCommands } from "../utils/templateImage"

const IndexPage = () => {
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

  function handleTemplate(template) {
    setData(template)
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Buttons
        handleTemplate={handleTemplate}
      />
      <DockerForm
        data={data}
        handleInput={handleInput}
        handleSelect={handleSelect}
        handleDownload={handleDownload}
        handleNewCommand={handleNewCommand}
        handleDeleteCommand={handleDeleteCommand}
        handleExtraSelect={handleExtraSelect}
        handleExtraInput={handleExtraInput}
      />
    </Layout>
  )
}

export default IndexPage
