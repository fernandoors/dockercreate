import React from "react"
import { Link } from "gatsby"
import { ButtonComponent, Container } from "./styles"
import { Button, Card } from "antd"

export default function Buttons({ handleTemplate, templateImage }) {
  return (
    <>
      <Container>
        <Card htmlFor="Images templates references" title="IMAGE TEMPLATE"
          extra={<a
            href="https://github.com/fernandoors/dockercreate/issues/2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button shape="round" type="dashed">
              Suggest Template Image
            </Button>
          </a>}
        >
          <ButtonComponent>
            {templateImage.map(image => (
              <Link rel='canonical' title={`Docker ${image.display} image`} aria-label={`Template image to ${image.display}`} key={image.id} to={`/${image.id}`}>
                <Button shape="round" type="primary">
                  {image.display}
                </Button>
              </Link>
            ))}
          </ButtonComponent>
        </Card>
      </Container>
    </>
  )
}
