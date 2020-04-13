import React from 'react'
import { Button, Modal, Tooltip } from 'antd'
import { CopyOutlined } from "@ant-design/icons"
import { FilePreview } from "./styles"
import { QuestionCircleOutlined } from "@ant-design/icons"

export default function ModalPreview(props) {
  const { modalVisible, handleDownload, handleModal, handleCopy, preview } = props
  return (
    <>
      <Modal
        title={
          <label htmlFor='Preview your DockerFile image, copy or download then and insert into your project main directory' >Preview
        <Tooltip title={<div>
              <ol>
                <li>Save this Dockerfile into yout project directory</li>
                <li>Then build docker using this command:
          <br />
                  <strong>docker build .</strong>
                </li>
              </ol>
            </div>
            }>
              <QuestionCircleOutlined style={{ marginLeft: 10 }} />
            </Tooltip>
          </label>
        }
        visible={modalVisible}
        onOk={handleDownload}
        onCancel={handleModal}
        footer={[
          <Button key='1' onClick={handleModal}>Cancel</Button>,
          <Button key='2' type="primary" onClick={handleDownload}>Download</Button>,
        ]}
      >
        <FilePreview>
          <Button type="dashed" onClick={handleCopy}><CopyOutlined /></Button>
          {preview.split("\n")
            .map((item, i) =>
              <p key={item + i}>{item}</p>
            )}
        </FilePreview>
      </Modal>
    </>
  )
}