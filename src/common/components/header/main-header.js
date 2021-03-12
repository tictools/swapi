import React from 'react'
import PropTypes from 'prop-types'
import { DEFAULT_STRING } from '../../constants'


const propTypes = {
    title: PropTypes.string
}

/**
 * Functional component that renders the main header of application
 *
 * @param {string} title - title
 * @returns {React.Element}
 */
export const MainHeader = ({title = DEFAULT_STRING.HEADER}) => {
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}

MainHeader.propTypes = propTypes

