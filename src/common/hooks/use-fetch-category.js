import { useState, useEffect } from 'react'
import {fetchData, formatDataFromArray} from '../helpers'
import {BASE_URL, INITIAL_VALUE} from '../constants'

export const useFetchCategory = (category) => {
    const [items, setItems] = useState(INITIAL_VALUE.LIST)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
    setIsLoading(true)
    !!category && fetchData(BASE_URL, category, undefined)
        .then(data => {
            const formattedData = formatDataFromArray(data)
            setItems(formattedData)
            setError(false)
            setIsLoading(false)
        })
        .catch(errorResponse => {
            setIsLoading(false)
            setError(true)
        })
    }, [category])
    return { items, isLoading, error}
}
