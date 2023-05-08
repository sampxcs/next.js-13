export const getGifs = async () => {
  const res = await fetch('https://api.giphy.com/v1/gifs/search?api_key=qR9QiNV1IGAb1rUaTpVWYwXjoUf8lIDj&q=tecnology')
  const giftsData = await res.json()
  const gifts = giftsData.data.map((gif: any) => {
    return {
      id: gif.id,
      title: gif.title,
      href: gif.images.original.url
    }
  })

  return gifts
}
