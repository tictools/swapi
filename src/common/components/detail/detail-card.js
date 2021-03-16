import React from 'react'
import {CATEGORIES, MAPPED_ITEMS_RESOURCE} from "../../constants";
import PropTypes from 'prop-types'
import styles from './detail-card.css'

const propTypes = {
    category: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    resources: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

/**
 * Functional component that returns a detail card
 *
 * @param {object} item - data item
 * @param {array} category - item category
 * @param {array} resources - item resources (films or characters)
 * @returns {JSX.Element}
 */
export const DetailCard = ({item, category, resources}) => {
    const getItemContent = (currentItem) => {
        const itemEntries = Object.entries(currentItem)
        return(
            itemEntries.map( ([label, content], index) => {
                return (
                    <li className={styles['detail__list-item']} key={index}>{label}: {content}</li>)
            })
        )
    }

    const getResourcesContent = (currentResources) => {
        return (
            currentResources.map((currentResource, index) => (
                <li key={index}>
                    <ul className={styles['detail__list--embedded']}>
                        {getItemContent(currentResource)}
                    </ul>
                </li>
            ))
        )
    }

    const getResourcesLabel = (category) => {
        return (
            category === CATEGORIES.FILMS
                ? MAPPED_ITEMS_RESOURCE.TITLE_AND_CHARACTERS[1]
                : MAPPED_ITEMS_RESOURCE.NAME_AND_FILM[1]
        )
    }

    const getTitleFromHeaderData = (headerData) => headerData &&  headerData.props.children[2]
    const [headerData, ...restData] = getItemContent(item)
    const header = getTitleFromHeaderData(headerData)

    return(
        <div className={styles['detail__container']}>
            <h2 className={styles['detail__header']}>{header}</h2>
            <div className={styles['detail__content']}>
                <div className={styles['detail__container-list']}>
                    <p className={styles['detail__label']}>
                        general details
                    </p>
                    <ul className={styles['detail__list']}>
                        {restData}
                    </ul>
                </div>
                <div className={styles['detail__container-list']}>
                    <p className={styles['detail__label']}>
                        {getResourcesLabel(category)}
                    </p>
                    <ul className={styles['detail__list']}>
                        { getResourcesContent(resources) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

DetailCard.propTypes = propTypes
