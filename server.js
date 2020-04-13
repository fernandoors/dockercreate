const express = require('express')
const { requestDockerImages, getImageDetail, builderImagesFile } = require('./DockerImageBuilder')

const app = express()

// get images certificates
app.get('/', async (req, res) => {
  const result = await requestDockerImages()
  return res.send(result)
})

// Create JSON File
app.get('/mount', async (req, res) => {
  return res.send(builderImagesFile())
})

// Get image versions
app.get('/image/:image', async (req, res) => {
  try {
    const result = await getImageDetail(req.params.image)
    return res.send(result)
  } catch (e) {
    return res.send(e)
  }
})

app.listen(3333)