import React from 'react'

const SeatsMovie = () => {

    const numRows = 5; // количество рядом
    const numCols = 10; // количество мест
    const seats = [];

    for (let i = 0; i < numRows; i++) {
        const rowSeats = [];

        for (let j = 0; j < numCols; j++) {
            rowSeats.push(
                <button className='w-4 h-4 rounded-md mt-4 bg-violet-900 hover:scale-150'>
                    <p className='flex items-center justify-center
                                    opacity-0 hover:opacity-100 
                                    text-white text-xs'>
                        {j + 1}
                    </p>
                </button>
            );
        }

        seats.push(
            <div key={i} className='flex gap-4 items-center'>
                <p className='mt-4'> {i+1} </p>
                {rowSeats}
            </div>
        );
    }
    
    return (
        <div className='mt-12'>
            <h2 className='font-bold text-2xl'>Выбор места</h2>
            <div className='mt-6'>
                <div className='flex w-80 justify-center border-b-4
                                border-solid border-gray-300 text-xs'>
                    Экран
                </div>

                <div className='mt-6'>
                    <p className='text-xs'>Ряд</p>
                    {seats}
                </div>
            </div>
        </div>
    )
}

export default SeatsMovie