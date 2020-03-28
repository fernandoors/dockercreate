import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Buttons from "../components/Buttons/Buttons"
import DockerForm from "../components/DockerForm/DockerForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Buttons />
    <DockerForm />
  </Layout>
)

export default IndexPage
