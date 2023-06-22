export const getGifts = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=pbWYVeQofn1jCwhrZOm3s2nX68uNtd2J&q=${category}&limit=15`

    const response = await fetch(url)
    const {data} = await response.json()

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
}