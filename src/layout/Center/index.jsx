import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Button, Modal } from '@/components'

export const Center = () => {
	const [gbpRate, setGbpRate] = useState(null)
	const [error, setError] = useState(null)
	const [digitSum, setDigitSum] = useState(null)
	const [isModal, setIsModal] = useState(false)

	const showModal = () => setIsModal(true)
	const hideModal = () => setIsModal(false)

	useEffect(() => {
		fetch('https://www.cbr-xml-daily.ru/daily_json.js')
			.then(response => {
				if (!response.ok) {
					throw new Error('Ошибка загрузки данных')
				}
				return response.json()
			})
			.then(data => {
				const gbpRate = data.Valute.GBP.Value

				const roundedGbpRate = Math.round(gbpRate)

				setGbpRate(roundedGbpRate)
			})
			.catch(error => {
				setError(error.message)
			})
	}, [])

	useEffect(() => {
		const currentDate = new Date().toLocaleDateString()

		const arr = currentDate.split('').filter(item => item !== '.')
		const sum = arr.reduce((previousValue, currentValue) => {
			return (previousValue += Number(currentValue))
		}, 0)

		setDigitSum(sum)
	}, [])

	return (
		<>
			{isModal && <Modal hideModal={hideModal} />}
			<div className={styles.container}>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 60 }}>
					<h1 className={styles.title}>
						Создаю условия
						<br />
						для вашего успеха
					</h1>

					<p className={styles.text} style={{ whiteSpace: window.innerWidth <= 767 ? 'normal' : 'pre-line' }}>
						{window.innerWidth <= 767
							? 'Ваш успех зависит от вашихдействий'
							: 'Когда ваше время и энергия лучше сфокусированы, стремление к новым\nвозможностям становится реальностью, ваш успех зависит от ваших действий'}
					</p>

					<div className={styles.footer}>
						<Button className={styles.btn1} onClick={showModal}>
							{window.innerWidth <= 767 ? 'Записаться' : 'Записаться на консультацию'}
						</Button>
						<Button className={styles.btn2} typeButton='transparent'>
							{window.innerWidth <= 767 ? 'Заказать звонок' : 'Бесплатная консультация'}
						</Button>
					</div>
					<div className={styles.footer}>
						<div className={styles.footer_info_block}>
							<div className={styles.quantity_title}>{digitSum}+</div>
							<p className={styles.quantity} style={{ whiteSpace: window.innerWidth <= 767 ? 'normal' : 'pre-line' }}>
								{window.innerWidth <= 767 ? 'техники' : 'техник для\nдостижения целей'}
							</p>
						</div>

						<div className={styles.footer_info_block}>
							<div className={styles.quantity_title}>
								{error && <>Произошла ошибка: {error}</>}
								{gbpRate !== null ? <>{gbpRate}%</> : <>Загрузка...</>}
							</div>
							<p className={styles.quantity} style={{ whiteSpace: window.innerWidth <= 767 ? 'normal' : 'pre-line' }}>
								{window.innerWidth <= 767 ? 'продуктивности' : 'увеличение личной\nпродуктивности'}
							</p>
						</div>
					</div>
				</div>

				<img src='/mentor.png' alt='mentor' className={styles.mentor} />
			</div>
		</>
	)
}
