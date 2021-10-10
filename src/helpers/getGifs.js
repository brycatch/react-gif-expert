export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3iPHkj7Mz4dkCi5V84ISODumznI1X73G&q=${encodeURI(category)}&limit=25&offset=0&rating=g&lang=en`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => ({ id: gif.id, title: gif.title, url: gif.images.downsized_medium.url }))
    return gifs;
};