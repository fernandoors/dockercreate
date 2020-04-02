import React from 'react'
import BaseView from '../base/BaseView'
import Layout from "../components/layout"

function imageTemplates(props) {
  const id = props.uri.replace('/', '')
  return (
    <Layout>
      <BaseView id={id} />
    </Layout>
  )
}

export default imageTemplates