const urlBase = 'https://kitsu.io/api/'

module.exports.getAnime = async function(limit=11) {
    let animeArray = await fetch(urlBase+'edge/trending/anime?limit='+limit).then((res) => res.json()).catch((err) => console.log(err))
    let animeObjetct = []

    animeArray['data'].forEach(anime => {
        animeObjetct.push({
            id: anime['id'],
            //title: anime.attributes.titles.en,
            title: anime.attributes.canonicalTitle,
            description: anime['attributes']["description"],
            image: anime['attributes']["posterImage"]['medium'],
        })
    })

    return animeObjetct
}