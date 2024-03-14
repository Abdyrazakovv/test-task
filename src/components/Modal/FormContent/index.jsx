import React from 'react'
import styles from './styles.module.scss'
import { Controller, useFormContext } from 'react-hook-form'
import { Button, Input } from '@/components'

const rules = { required: { value: true, message: 'Это обязательное поле' } }

export const FormContent = ({ submit }) => {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useFormContext()

	return (
		<>
			<h1 className={styles.call_title}>
				Закажите <br /> обратный звонок
			</h1>

			<form className={styles.form}>
				<Controller
					name='name'
					control={control}
					render={({ field }) => (
						<div>
							<Input {...field} placeholder='Имя' />
							{errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
						</div>
					)}
					rules={rules}
				/>
				<Controller
					name='tel'
					control={control}
					render={({ field }) => (
						<div>
							<Input type='number' {...field} placeholder='Телефон' />
							{errors.tel && <span style={{ color: 'red' }}>{errors.tel.message}</span>}
						</div>
					)}
					rules={rules}
				/>

				<Controller
					control={control}
					rules={rules}
					render={({ field }) => (
						<div>
							<div className={styles.checkbox}>
								<input {...field} type='checkbox' id='check' />
								<label htmlFor='check'>Согласен на сохранение и обработку персональных данных</label>
							</div>
							{errors.politica && <span style={{ color: 'red' }}>{errors.politica.message}</span>}
						</div>
					)}
					name='politica'
				/>
				<div className={styles.button_block}>
					<Button onClick={handleSubmit(submit)} typeButton='transparent'>
						Заказать обратный звонок
					</Button>
				</div>
			</form>
		</>
	)
}
