import React from 'react'

import Input from '../components/input'
import Button from '../components/button'

const AuthPage = () => {
	return (
		<div className='flex flex-col items-center gap-4 text-center'>
			<h1 className='font-bold text-2xl'>Авторизация</h1>
			<p>Введите номер телефона для входа <br />в личный кабинет</p>
			<div className='max-w-96 w-full flex flex-col gap-4'>
				<Input placeholder='Телефон'></Input>
				<Button>Получить код</Button>
				<Input placeholder='Проверочный код'></Input>
				<Button>Войти</Button>
			</div>
		</div>
	)
}

export default AuthPage
