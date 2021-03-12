import React from 'react'
import { DarthVaderIcon } from '../../icons'
import { DEFAULT_STRING } from '../../constants/strings'

/**
 * Functional component that render a message when no category is selected
 *
 * @returns {JSX.Element}
 */
export const CategorySectionEmpty = () => {
    return (
        <div>
            <DarthVaderIcon size={150} />
            <p>{DEFAULT_STRING.EMPTY_CATEGORY}</p>
        </div>
    )
}
