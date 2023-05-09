export const getGifById = async (id:string) => {
  console.log(id)
  const res = await fetch(`https://api.giphy.com/v1/gifs?api_key=qR9QiNV1IGAb1rUaTpVWYwXjoUf8lIDj&ids=${id}`)
  const gifJson = await res.json()
  const gifData = gifJson.data[0]
  const gif = {
    id: gifData.id,
    title: gifData.title,
    href: gifData.images.original.url
  }
  return gif
}
