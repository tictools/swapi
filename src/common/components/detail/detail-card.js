import React from 'react'
import {
  CATEGORIES,
  MAPPED_ITEMS_RESOURCE,
  MAPPED_ITEM_KEYS
} from '../../constants'
import PropTypes from 'prop-types'
import styles from './detail-card.css'

const propTypes = {
  category: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  resources: PropTypes.array.isRequired
}

/**
 * Functional component that returns a detail card
 *
 * @param {object} item - data item
 * @param {array} category - item category
 * @param {array} resources - item resources (films or characters)
 * @returns {JSX.Element}
 */
export const DetailCard = ({ item, category, resources }) => {
  const getItemContent = (currentItem, isLabelRendered = true) => {
    const itemEntries = Object.entries(currentItem)
    return (
      itemEntries.map(([label, content], index) => {
        const isHeader = label === 'header'
        return !isHeader && (
          <li
            key={index}
            className={styles['detail__list-item']}
          >
            <p className={styles['detail__list-item--header']}>
              {isLabelRendered && `${MAPPED_ITEM_KEYS[label]}`}
            </p>
            <p className={styles['detail__list-item--content']}>
              {content}
            </p>
          </li>
        )
      }).filter(Boolean)
    )
  }

  const getResourcesContent = (currentResources) => {
    const isLabelRendered = false
    return (
      currentResources.map((currentResource, index) => (
        <li key={index}>
          <ul className={styles['detail__list--embedded']}>
            {getItemContent(currentResource, isLabelRendered)}
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

  const getTitleFromHeaderData = (item) => item.header

  const data = getItemContent(item)
  const header = getTitleFromHeaderData(item)

  return (
    <div className={styles.detail__container}>
      <h2 className={styles.detail__header}>{header}</h2>
      <div className={styles.detail__content}>
        <div className={styles['detail__container-list']}>
          <p className={styles.detail__label}>
            general details
          </p>
          <ul className={styles.detail__list}>
            {data}
          </ul>
        </div>
        <div className={styles['detail__container-list']}>
          <p className={styles.detail__label}>
            {getResourcesLabel(category)}
          </p>
          <ul className={styles.detail__list}>
            {getResourcesContent(resources)}
          </ul>
        </div>
      </div>
    </div>
  )
}

DetailCard.propTypes = propTypes
