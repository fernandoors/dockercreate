import React from "react"

import { ButtonComponent, Container } from "./styles"
import { templateImage } from "../../utils/templateImage"
import { Button, Card } from "antd"

export default function Buttons({ handleTemplate }) {
  return (
    <Container>
      <Card
        title="IMAGE TEMPLATE"
        extra={<a href="#"></a>}
      >
        <ButtonComponent>
          {templateImage.map(image => (
            <Button key={image.name} type="primary" onClick={() => handleTemplate(image)}>
              {image.id}
            </Button>
          ))}
        </ButtonComponent>
      </Card>
    </Container>
  )
}
