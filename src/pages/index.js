import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BaseView from '../base/BaseView'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Docker Create Image" description="Create your DOCKERFILE using best practices from official documentation and communities suggestions" />
      <BaseView />
    </Layout>
  )
}

export default IndexPage
