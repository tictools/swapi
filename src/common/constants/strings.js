export const DEFAULT_STRING = {
    EMPTY: '',
    APP: 'RAPPSWAPI',
    EMPTY_CATEGORY: 'May the search be with you',
    LOADING: 'Loading...',
    OPTION: '---'
}
export const CATEGORIES = {
    PLANETS: 'planets',
    PEOPLE: 'people',
    FILMS: 'films',
    STARSHIPS: 'starships',
    VEHICLES: 'vehicles',
    SPECIES: 'species'
}

export const MAPPED_ITEMS_RESOURCE = {
    NAME_AND_FILM: ['name', 'films'],
    TITLE_AND_CHARACTERS: ['title', 'characters']
}

export const ITEM_RESOURCE = {
    [CATEGORIES.PLANETS]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
    [CATEGORIES.PEOPLE]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
    [CATEGORIES.FILMS]: MAPPED_ITEMS_RESOURCE.TITLE_AND_CHARACTERS,
    [CATEGORIES.STARSHIPS]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
    [CATEGORIES.VEHICLES]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
    [CATEGORIES.SPECIES]: MAPPED_ITEMS_RESOURCE.NAME_AND_FILM,
}



export const BASE_URL = 'https://swapi.dev/api'
