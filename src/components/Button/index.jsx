import React from 'react'
import styles from './styles.module.scss'

export const Button = ({ children, onClick, typeButton = 'default', className }) => {
	return (
		<div style={{ display: 'flex', cursor: 'pointer' }} className={className}>
			<button onClick={onClick} className={typeButton === 'transparent' ? styles.butter_transparent : styles.butter_white}>
				{children}
			</button>
			<div className={typeButton === 'transparent' ? styles.vector_transparent : styles.vector_container}>
				<svg className={styles.vector} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M20 3.29346V19.952H3.37326M19.9618 20L0 0'
						stroke={typeButton === 'transparent' ? 'white' : '#0B3461'}
						strokeWidth='2'
					/>
				</svg>
			</div>
		</div>
	)
}
