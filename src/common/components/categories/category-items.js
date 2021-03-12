import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    data: PropTypes.array.isRequired,
    labels: PropTypes.shape({
        name:PropTypes.string,
        quantity: PropTypes.string
    }).isRequired
}

/**
 * Functional component that gets an array of items and a category
 * and returns an array of mapped items to <li> HTML elements
 *
 * @param {array} data - array with items to render
 * @param {object} labels - object with label strings
 * @returns {array<HTMLLIElement>}
 */
export const CategoryItems = ({data, labels, }) => {
    const labelName = labels.name || labels.title
    const labelQuantity = labels.quantity

    return data.map((item, index) => {
        return (
            <li key={index}>
                <p>{labelName}: {item[labelName]}</p>
                <p>{labelQuantity}: {item[labelQuantity]}</p>
            </li>)
    })
}

CategoryItems.propTypes = propTypes
