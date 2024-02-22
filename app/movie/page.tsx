import React from 'react'

import BreadCrumps from '../components/breadcrumps'

import Heading from '../components/cardMovie/heading'
import Rating from '../components/cardMovie/rating'
import Poster from '../components/cardMovie/poster'
import Button from '../components/button'
import ScheduleMovie from '../components/moviePage/schedule-movie'
import SeatsMovie from '../components/moviePage/seats-movie'


const MoviePage = () => {
    
    return (
        <div>
			<BreadCrumps />

            <div className='flex gap-8'>
                
                <div className='w-72'><Poster /></div>
                
                <div>
                    <Heading 
                        title={'Бебка с китсуней (16+)'} 
                        subtitle={'Subtitle'}
                        size={'xl'}
                    />

                    <Rating 
                        stars={1} 
                        rating={8.4}
                    />
                    
                    <div className="mt-4 max-w-2xl text-base font-normal">
                        Себастьян планирует провести уикенд со своей очаровательной невестой 
                        Элли и ее семьей в их роскошном фамильном поместье, где есть собственное
                        поле для гольфа, шикарная яхта и даже ручной павлин....
                    </div>
                </div>
            </div>

            <ScheduleMovie />

            <div className='flex gap-24 items-end'>
                
                <SeatsMovie />

                <div className='flex flex-col gap-4'>
                    <div className='text-gray-500 text-xs'>
                        Зал
                        <p className='text-black text-base'>Синий</p>
                    </div>
                    <div className='text-gray-500 text-xs'>
                        Дата и время
                        <p className='text-black text-base'>3 июля, 11:15</p>
                    </div>
                    <div className='text-gray-500 text-xs'>
                        Места
                        <p className='text-black text-base'>2 ряд, 8, 9</p>
                    </div>

                    <h3 className='font-semibold text-lg'>Сумма: 500 руб</h3>

                    <Button children={'купить'}/>
                </div>
                
            </div>

        </div>
    )
}

export default MoviePage