const express = require('express')
const axios = require('axios')
const app = express()

const requestDockerImages = async isFull => {
  const { data } = await axios.get('https://store.docker.com/api/content/v1/products/search/?image_filter=official&type=image&page=2&page_size=200')
  if (isFull) {
    return data.summaries
  }
  return (data.summaries.map(item => ({
    key: item.id,
    id: item.slug,
    name: item.name,
  })))
}

const getImageDetail = async image => {
  const { data } = await axios.get('https://hub.docker.com/api/content/v1/products/images/' + image)
  return data
}
app.get('/', async (req, res) => {
  const result = await requestDockerImages()
  return res.send(result)
})
app.get('/full', async (req, res) => {
  const result = await requestDockerImages(true)
  return res.send(result)
})
app.get('/image/:image', async (req, res) => {
  try {
    const result = await getImageDetail(req.params.image)
    return res.send(result)
  } catch (e) {
    return res.send(e)
  }
})
module.exports = {
  requestDockerImages,
  getImageDetail
}

app.listen(3333)