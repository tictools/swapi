import { INITIAL_VALUE } from '../../constants'

export const formatDataFromArray = (arrayData) => {
    const data  = arrayData && arrayData.results || INITIAL_VALUE.LIST
    return data.map(item => {
        return item && item.name
            ? {
                name: item.name,
                films: item.films.length
            }:
            {
                title: item.title,
                characters: item.characters.length
            }
    })
}
