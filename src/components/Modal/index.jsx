import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import styles from './styles.module.scss'
import { FormContent } from './FormContent'
import { SecondContent } from './SecondContent'

export const Modal = ({ hideModal }) => {
	const [isContent, setIsContent] = useState()
	const methods = useForm()

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'visible'
		}
	}, [])

	const submit = ({ name, tel }) => {
		localStorage.setItem('info', JSON.stringify({ name, tel }))
		setIsContent(true)
	}

	return (
		<FormProvider {...methods}>
			<div className={styles.fon} onClick={hideModal}>
				<div className={styles.modal} onClick={e => e.stopPropagation()}>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<div className={styles.close} onClick={hideModal}>
							&times;
						</div>
					</div>


					{
						isContent ?
						<SecondContent/> :
						<FormContent submit={submit} />
					}
				</div>
			</div>
		</FormProvider>
	)
}
