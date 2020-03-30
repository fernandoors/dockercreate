import React from "react"

import { ButtonComponent, Container } from "./styles"
import { templateImage } from "../../utils/templateImage"
import { Button, Card } from "antd"

export default function Buttons() {
  return (
    <Container>
      <Card
        title="IMAGE TEMPLATE"
        extra={<a href="#"></a>}
      >
        <ButtonComponent>
          {templateImage.map(image => (
            <Button key={image.id} type="primary">
              {image.name}
            </Button>
          ))}
        </ButtonComponent>
      </Card>
    </Container>
  )
}
