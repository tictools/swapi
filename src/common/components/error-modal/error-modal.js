import React from 'react'
import { YodaFullIcon } from '../../icons'
import styles from './error-modal.css'

export const ErrorModal = ({closeErrorModal}) => {
    return(
        <div className={styles['error-modal__container']}>
            <div className={styles['error-modal__content']}>
                <p>An error occurred</p>
                <YodaFullIcon width={150}/>
                <p>Close to the dark side maybe you are</p>
                <button onClick={closeErrorModal}> X </button>
            </div>
        </div>
    )
}
