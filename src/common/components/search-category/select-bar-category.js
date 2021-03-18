import React from 'react'
import PropTypes from 'prop-types'
import { CATEGORIES } from '../../constants'
import styles from './select-bar-category.css'

const propTypes = {
  handleCategorySearch: PropTypes.func.isRequired
}

/**
 * Functional component that renders a category search bar
 *
 * @param {function} handleCategorySearch - callback to update category state of <Categories/> component
 * @returns {React.Element}
 */
export const SelectBarCategory = ({ handleCategorySearch }) => {
  const updateCategory = (category) => {
    handleCategorySearch(category)
  }

  return (
    <div className={styles['search-category__container']}>
      <ul className={styles['search-category__list']}>
        {Object.values(CATEGORIES).map(item => {
          return (
            <li key={item} className={styles['search-category__item']}>
              <button
                className={styles['search-category__button']}
                onClick={() => updateCategory(item)}
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

SelectBarCategory.propTypes = propTypes
