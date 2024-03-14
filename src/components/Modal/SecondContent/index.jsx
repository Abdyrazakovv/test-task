import React from 'react'
import styles from './styles.module.scss'
import { Logo } from '@/assets'

export const SecondContent = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Спасибо
				<br />
				за заявку
			</h1>
			<h1 className={styles.title}>
				Я обязательно
				<br/>
				свяжусь с вами
				<br/>
				в ближайшее время.
			</h1>

			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<img className={styles.logo} src={Logo} alt="logo" />
			</div>
		</div>
	)
}
