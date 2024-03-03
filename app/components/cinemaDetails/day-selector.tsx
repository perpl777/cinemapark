import React, {FC, MouseEventHandler} from 'react'


interface DaySelectorProps {
    onclick: (day: string) => void
    selectedValue: string 
}


const DaySelector: FC<DaySelectorProps> = ({onclick, selectedValue}) => {

    const days = [
        'Пн, 9 янв', 
        'Вт, 10 янв', 
        'Ср, 11 янв', 
        'Чт, 12 янв',
        'Пт, 13 янв',
        'Сб, 14 янв', 
        'Вс, 15 янв'
    ];

    return (
        <div className='inline-block bg-gray-100 rounded-xl mt-6'>
            {days.map((day) => 
                <button 
                        key={day}
                        className='bg-slate-100 w-24 h-11 rounded-xl border-solid
                                    border-gray-100 border-2 text-gray-500 text-sm
                                    hover:text-black hover:bg-white'
                        onClick={() => onclick(day)}> 
                    {day} 
                </button>
            )}
        </div>
    )
}

export default DaySelector