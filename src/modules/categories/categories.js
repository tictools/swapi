import React, { useState, useEffect } from 'react'
import { SelectBarCategory } from '../../common/components'
import { CategorySection, CategorySectionEmpty, ErrorModal } from '../../common/components'
import { useFetchCategory } from '../../common/hooks/use-fetch-category'
import styles from './categories.css'

/**
 * Functional component that renders the full view for category section
 *
 * @returns {JSX.Element}
 */
export const Categories = () => {
    const [category, setCategory] = useState(null)
    const { items, isLoading, error } = useFetchCategory(category)
    const handleCategory = category => setCategory(category)

    return(
        <div className={styles['categories__container']}>
            <SelectBarCategory handleCategorySearch={handleCategory}
            />
            {!!items.length
                ? <CategorySection
                    category={category}
                    data={items}
                    isLoading={isLoading}
                />
                : error
                    ? <ErrorModal />
                    : <CategorySectionEmpty />
            }
        </div>
    )
}
