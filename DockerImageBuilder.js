const axios = require('axios')
const fs = require('fs');

const removeDuplicate = (acc, current) => {
  const value = acc.find(item => item.id === current.id);
  if (!value) {
    return acc.concat([current])
  } else return acc
}

const requestDockerImages = async isFull => {
  const url = page => `https://store.docker.com/api/content/v1/products/search/?image_filter=official&type=image&page=${page}&page_size=200`
  const dockerHubPage1 = await axios.get(url(1))
  const dockerHubPage2 = await axios.get(url(2))
  const dockerHubPage3 = await axios.get(url(3))
  const data = [
    ...dockerHubPage1.data.summaries,
    ...dockerHubPage2.data.summaries,
    ...dockerHubPage3.data.summaries,
  ]
  if (isFull) {
    return data
  }

  return data
    .reduce(removeDuplicate, [])
    .map((item, index) => ({
      key: item.id,
      id: item.slug,
      name: item.name,
      index
    }))
}

const getImageDetail = async image => {
  const url = page => `https://hub.docker.com/v2/repositories/library/${image}/tags/?page_size=100&page=${page}`
  const imagePage1 = await axios.get(url(1))
  const imagePage2 = await axios.get(url(2))
  const imagePage3 = await axios.get(url(3))
  const data = [
    ...imagePage1.data.results,
    ...imagePage2.data.results,
    ...imagePage3.data.results,
  ]
  return data.map(item => item.name)
}
async function builderImagesFile() {
  console.log(`Update Images References`)
  const result = await requestDockerImages()
  const imageResult = []
  console.log('Images collected')
  console.log('Get Images versions')
  for (const image of result) {
    try {
      console.log(`Colleting images ${image.index + 1}/${result.length}`)
      const getImage = await getImageDetail(image.id)
      imageResult.push({
        ...image,
        version: getImage
      })
    } catch (e) {
      imageResult.push(image)
    }
  }
  console.log('Versions collected')
  console.log('Build File')
  fs.writeFile(`${__dirname}/src/utils/images.json`, JSON.stringify(imageResult), function (err) {
    if (err) throw err;
    console.log('File Built');
  });
  return imageResult
}
module.exports = {
  builderImagesFile,
  requestDockerImages,
  getImageDetail,
}