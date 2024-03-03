import React from 'react'
import CardTicket from '../components/cardTicket/cardTicket'

const TicketsPage = () => {
  return (
    <div>
        <h1 className='font-semibold text-2xl mb-5 mt-12'>Билеты</h1>
        <div className='grid grid-cols-1 gap-4 justify-items-center'>
            <CardTicket/>
            <CardTicket/>
            <CardTicket/>
        </div>
    </div>
  )
}

export default TicketsPage