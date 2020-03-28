import React from "react"

import { ButtonComponent } from "./styles"
import { templateImage } from "../../utils/templateImage"
import { Button, Card } from "antd"

export default function Buttons() {
  return (
    <>
      <Card
        title="IMAGE TEMPLATE"
        extra={<a href="#"></a>}
        // style={{ width: 300 }}
      >
        <ButtonComponent>
          {templateImage.map(image => (
            <Button key={image.id} type="primary">
              {image.name}
            </Button>
          ))}
        </ButtonComponent>
      </Card>
    </>
  )
}
