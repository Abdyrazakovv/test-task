import React from 'react'
import { Logo, Menu, Tel } from '@/assets'
import styles from './styles.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<img src={Logo} alt='logo' />

			<nav className={styles.nav}>
				<ul>
					<li className={styles.link}>
						<a href='#'>Обо мне</a>
					</li>
					<li className={styles.link}>
						<a href='#'>Наставничество</a>
					</li>
					<li className={styles.link}>
						<a href='#'>Мероприятия</a>
					</li>
					<li className={styles.link}>
						<a href='#'>Кейсы</a>
					</li>
					<li className={styles.link}>
						<a href='#'>Отзывы</a>
					</li>
					<li className={styles.link}>
						<a href='#'>Контакты</a>
					</li>
				</ul>
			</nav>

			<div className={styles.tel}>
				<img src={Menu} alt='menu' className={styles.menu}  />
				<img src={Tel} alt='tel'/>

				<span>8-345-123-34-45</span>
			</div>
		</header>
	)
}
