const path = require('path')
const { templateImage } = require("./src/utils/templateImage")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('src/templates/imageTemplates.js')

  templateImage.forEach(image => {
    createPage({
      path: `/${image.id}`,
      component: pageTemplate,
      context: {
        page: image.id
      }
    })
  })
}