import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}
/**
 * Functional component that gets a title and other react elements as children
 * and returns a sectio with the list of provided items
 *
 * @param {string} title - section title
 * @param {React.Element} children - react element
 * @returns {JSX.Element}
 */
export const CategoryList = ({ title, children }) => {
    return(
        <section>
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
        </section>
    )
}

CategoryList.propTypes = propTypes
