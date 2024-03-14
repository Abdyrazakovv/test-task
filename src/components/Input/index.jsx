import React from 'react'
import styles from './styles.module.scss'

export const Input = props => {
	return <input {...props} className={styles.input} />
}
