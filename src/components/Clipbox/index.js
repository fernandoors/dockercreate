import React, { useState } from "react"

// import { Container } from './styles';
import { Modal, Button, message } from "antd"

// import IndexPage from "../../pages/index"
import DockerForm from "../DockerForm/DockerForm"
import { download } from "../../utils/downloadFile"
import generateDockerFile from "../../utils/generateDockerFile"

export default function Clipbox() {
  const [state, setState] = useState({ visible: false })
  const [data, setData] = useState()

  function showModal(e) {
    setState({ visible: true })
  }

  function handleOk(e) {
    setState({ visible: false })
  }

  function handleCancel(e) {
    setState({ visible: false })
  }
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DockerForm handleDownload={handleDownload} />
      </Modal>
    </div>
  )
}
