import React, {FC} from 'react'


interface TimeHallSelectorProps {
    onclick: (time: string, hall: string) => void,
    selectedTimeHall: {
        time: string,
        hall: string
    }
}


const TimeHallSelector: FC<TimeHallSelectorProps> = ({onclick, selectedTimeHall}) => {

    const halls = {
        'Красный зал': ['11:40', '12:40', '13:20', '14:40','16:40'],
        'Синий зал': ['11:15', '12:15', '13:20'],
        'Фиолетовый зал': ['11:40', '12:40', '13:20', '16:40']
    };

    return (
        <div>
            {Object.entries(halls).map(([hall, times]) => (
                <div key={hall}>
                    <p className='text-xs mt-6'> {hall} </p>
                    <div className="flex gap-2">
                        {times.map((time, index) => (
                            <button key={index} 
                                    className='mt-3 border-solid border-gray-400 border 
                                                w-20 h-11 rounded-2xl 
                                                hover:text-white hover:bg-gray-400 '
                                    onClick={() => onclick(time, hall)}>
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TimeHallSelector