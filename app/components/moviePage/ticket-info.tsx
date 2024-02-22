import React, {FC} from 'react'

import Button from '../button'


interface TicketInfoProps {
    hall: string,
    date: string,
    selectedSeats: string
    price: string
}


const TicketInfo: FC<TicketInfoProps> = ({ hall, date, selectedSeats, price}) => {
    return (
        <div className='flex flex-col gap-4 w-80'>

            <div className='text-gray-500 text-xs'> Зал
                <p className='text-black text-base'> {hall} </p>
            </div>

            <div className='text-gray-500 text-xs'> Дата и время
                <p className='text-black text-base'> {date} </p>
            </div>

            <div className='text-gray-500 text-xs'> Места
                <p className='text-black text-base'> {selectedSeats} </p>
            </div>

            <h3 className='font-semibold text-lg'> Сумма: {price} </h3>

            <Button children={'купить'}/>
        </div>
    )
}

export default TicketInfo