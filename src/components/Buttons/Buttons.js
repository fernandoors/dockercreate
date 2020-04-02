import React from "react"

import { ButtonComponent, Container } from "./styles"
import { templateImage } from "../../utils/templateImage"
import { Button, Card } from "antd"
import SEO from "../seo"

export default function Buttons({ handleTemplate }) {
  return (
    <>
      <SEO title="DOCKER IMAGES" description="Get docker images templates to run your projects" />
      <Container>
        <Card
          title="IMAGE TEMPLATE"
          extra={<a href="#"></a>}
        >
          <ButtonComponent>
            {templateImage.map(image => (
              <Button key={image.name} shape="round" type="primary" onClick={() => handleTemplate(image)}>
                {image.id}
                <SEO title={`docker ${image.id}`} description={`Get a docker template to ${image.id} environment`} />
              </Button>
            ))}
          </ButtonComponent>
        </Card>
      </Container>
    </>
  )
}
