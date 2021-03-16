import { DEFAULT_STRING, INITIAL_VALUE } from '../../constants'

export const formatDataFromArray = (arrayData) => {
    const data  = arrayData && arrayData.results || INITIAL_VALUE.LIST
    return data.map(item => {
        let itemURL = item.url
        const [resourcePath, index] = itemURL
            .replace("http://swapi.dev/api/", DEFAULT_STRING.EMPTY)
            .split('/')
            .filter(item => !!item)
        return item && item.name
            ? {
                name: item.name,
                films: item.films.length,
                resourcePath,
                index
            }:
            {
                title: item.title,
                characters: item.characters.length,
                resourcePath,
                index
            }
    })
}
