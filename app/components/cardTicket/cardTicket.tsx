import React from 'react'
import Button from '../button'

const CardTicket = () => {
    const date = '5 июля, среда'
    const time = '16:50'
    const name = 'Бебка с Китсуней'
    const seats = '2 ряд 8, 9 места'
    const status = 'Оплачен'
    const idTicket = '777'

	return (
		<div className='flex flex-col gap-4 border-2 rounded-2xl p-4 max-w-96 w-full'>
			<div className='flex justify-between text-sm'>
                <p>{date}</p>
                <p>{time}</p>
            </div>
            <div className='text-xl font-semibold self-center'>{name}</div>
            <div className='text-sm self-center'>{seats}</div>
            <div className='flex justify-between text-sm'>
                <p className='bg-green-200 rounded-full px-2 py-1 text-green-500'>{status}</p>
                <p>Код билета: {idTicket}</p>
            </div>
            <div>
                <Button type='secondary'>Вернуть билет</Button>
            </div>
		</div>
	)
}

export default CardTicket
