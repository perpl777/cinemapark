/* eslint-disable react/jsx-key */
import React from 'react'


const ScheduleMovie = () => {

    const days = [
        'Пн, 9 янв', 
        'Вт, 10 янв', 
        'Ср, 11 янв', 
        'Чт, 12 янв',
        'Пт, 13 янв',
        'Сб, 14 янв', 
        'Вс, 15 янв'
    ];

    const halls = {
        'Красный зал': ['11:40', '12:40', '13:20', '14:40','16:40'],
        'Синий зал': ['11:15', '12:15', '13:20'],
        'Фиолетовый зал': ['11:40', '12:40', '13:20', '16:40']
    };


    return (
        <div className='mt-12'>
            <h2 className='font-bold text-2xl'>Расписание</h2>

            <div className='inline-block bg-gray-100 rounded-xl mt-6'>
                {days.map((day) => 
                    <button className='bg-slate-100 w-24 h-11 rounded-xl border-solid border-gray-100 border-2 text-gray-500 text-sm
                                        hover:text-black hover:bg-white'> 
                            {day} 
                    </button>
                )}
            </div>

            <div>
                {Object.entries(halls).map(([hall, times]) => (
                    <div key={hall}>
                        <p className='text-xs mt-6'> {hall} </p>
                        <div className="flex gap-2">
                            {times.map((time, index) => (
                                <button key={index} 
                                        className='mt-3 border-solid border-gray-400 border w-20 h-11 rounded-2xl 
                                                hover:text-white hover:bg-gray-400 '>
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default ScheduleMovie