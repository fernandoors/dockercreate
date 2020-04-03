import React from "react"
import { Link } from 'gatsby'
import { ButtonComponent, Container } from "./styles"
import { Button, Card } from "antd"

export default function Buttons({ handleTemplate, templateImage }) {
  return (
    <>
      <Container>
        <Card
          htmlFor='Images templates references'
          title="IMAGE TEMPLATE"
        >
          <ButtonComponent>
            {templateImage.map(image => (
              <Link key={image.id} to={`/${image.id}`}>
                <Button shape="round" type="primary">
                  {image.id}
                </Button>
              </Link>
            ))}
          </ButtonComponent>
        </Card>
      </Container>
    </>
  )
}
