import {useEffect, useState} from 'react'
import { BASE_URL, CATEGORIES } from '../constants'
import {
    fetchData,
    formatCharacterModel,
    formatFilmModel
} from '../helpers'
import { getItemModel } from '../models'

export const useFetchItem = (pathname) => {
    const [ item, setItem ] = useState({})
    const [ resources, setResources ] = useState([])
    const [ isLoading, setIsLoading] = useState(false)
    const [ error, setError ] = useState(false)

    const [ RESOURCE_PATH, INDEX ] = pathname.split('/').filter(value => !!value)

    useEffect(() => {
        setIsLoading(true)
        fetchData(BASE_URL, RESOURCE_PATH, INDEX)
            .then(currentItem => {
                const { resourceToFetch, ...restItem } = getItemModel(RESOURCE_PATH, currentItem)
                let promisedResources = resourceToFetch.map(filmURL => fetchData(filmURL, undefined, undefined))
                setItem(restItem)
                return Promise.all(promisedResources)
            })
            .then(populatedResources => {
                let formattedResources = (
                    RESOURCE_PATH === CATEGORIES.FILMS
                        ? populatedResources.map(formatCharacterModel)
                        : populatedResources.map(formatFilmModel)
                )
                setResources(formattedResources)
                setIsLoading(false)
            })
            .catch(() => {
                setError(true)
                setIsLoading(false)
            })
    }, [pathname])

    return {
        item,
        resources,
        error,
        isLoading,
        category: RESOURCE_PATH
    }
}
