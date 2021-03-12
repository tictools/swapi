import React, { useState, useEffect } from 'react'
import { SelectBarCategory } from '../../common/components'
import { CategorySection, CategorySectionEmpty, ErrorModal } from '../../common/components'
import { INITIAL_VALUE, BASE_URL } from '../../common/constants'
import { fetchData, formatDataFromArray } from '../../common/helpers'

/**
 * Functional component that renders the full view for category section
 *
 * @returns {JSX.Element}
 */
export const Categories = () => {
    const [items, setItems] = useState(INITIAL_VALUE.LIST)
    const [category, setCategory] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        !!category && fetchData(BASE_URL, category, undefined)
            .then(data => {
                const formattedData = formatDataFromArray(data)
                setItems(formattedData)
                setHasError(false)
                setIsLoading(false)
            })
            .catch(errorResponse => {
                setHasError(true)
            })
    }, [category])

    const handleCategory = category => setCategory(category)

    const onCloseErrorModal = () => setHasError(false)

    return(
        <div>
            <SelectBarCategory handleCategorySearch={handleCategory}/>
            {!!items.length
                ? <CategorySection category={category} data={items} isLoading={isLoading}/>
                : <CategorySectionEmpty/>
            }
            { hasError && <ErrorModal closeErrorModal={onCloseErrorModal}/> }
        </div>
    )
}
