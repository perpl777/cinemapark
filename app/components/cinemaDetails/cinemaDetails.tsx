'use client'

import React from 'react'
import { useState } from 'react';

import DaySelector from './day-selector';
import TimeHallSelector from './time-hall-selector';
import SeatsMap from './seats-map';
import MiniModal from './mini-modal';
import TicketInfo from './ticket-info';
import { time } from 'console';


const CinemaDetails = () => {

    const [day, setDay] = useState('не выбрано')
    const [timeHall, setTimeHall] = useState<{ time: string, hall: string }>({ time: 'не выбрано', hall: 'не выбрано' });
    const [selectedSeats, setSelectedSeats] = useState<{ row: string, col: string }>({ row: 'не выбран', col: 'не выбрано'});
    const [showModal, setShowModal] = useState(false);


    const handleDay = (day: string) => {
        setDay(day);
    }

    const handleTimeHall = (time: string, hall: string) => {
        setTimeHall({ time, hall });
    }

    const handleSelectedSeats = (row: string, col: string) => {
        setSelectedSeats({ row, col });
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <>
            <div className='mt-12'>
                <h2 className='font-bold text-2xl'>Расписание</h2>

                <DaySelector onclick={handleDay} selectedValue={day}/>
                <TimeHallSelector onclick={handleTimeHall} selectedTimeHall={timeHall}/>
            </div>

            <h2 className='font-bold text-2xl mt-12'>Выбор места</h2>

            {showModal && 
                <MiniModal
                    handleClose={handleCloseModal}
                    price='200 руб'
                    selectedSeat={`${selectedSeats.row} ряд, ${selectedSeats.col} место`}
                />
            }

            <div className='flex items-end gap-24'>
                <SeatsMap onclick={handleSelectedSeats} selectedSeats={selectedSeats}/>

                <TicketInfo
                    hall={`${timeHall.hall}`}
                    date={`${day} - ${timeHall.time}`}
                    selectedSeats={`${selectedSeats.row} ряд, ${selectedSeats.col} место`}
                    price='500 руб'
                />
            </div>
        </>
    )
}

export default CinemaDetails