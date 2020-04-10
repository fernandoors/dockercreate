import React from "react"
import { Link } from "gatsby"
import { ButtonComponent, Container } from "./styles"
import { Button, Card } from "antd"

export default function Buttons({ handleTemplate, templateImage }) {
  return (
    <>
      <Container>
        <Card htmlFor="Images templates references" title="IMAGE TEMPLATE">
          <ButtonComponent>
            {templateImage.map(image => (
              <Link
                aria-label={`Template image to ${image.display}`}
                key={image.id}
                to={`/${image.id}`}
              >
                <Button shape="round" type="primary">
                  {image.display}
                </Button>
              </Link>
            ))}
            <a
              href="https://github.com/fernandoors/dockercreate/issues/new"
              target="_blank"
            >
              <Button shape="round" type="danger">
                Suggest Template Image
              </Button>
            </a>
          </ButtonComponent>
        </Card>
      </Container>
    </>
  )
}
