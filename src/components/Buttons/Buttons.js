import React from "react"

import { ButtonComponent, Container } from "./styles"
import { templateImage } from "../../utils/templateImage"
import { Button, Card } from "antd"
import SEO from "../seo"

export default function Buttons({ handleTemplate }) {
  return (
    <>
      <SEO title="DOCKER IMAGES TEMPLATES" description="Get docker templates to create images" />
      <Container>
        <Card
          title="IMAGE TEMPLATE"
          extra={<a href="#"></a>}
        >
          <ButtonComponent>
            {templateImage.map(image => (
              <Button key={image.name} shape="round" type="primary" onClick={() => handleTemplate(image)}>
                {image.id}
              </Button>
            ))}
          </ButtonComponent>
        </Card>
      </Container>
    </>
  )
}
