import React from 'react'
import MovieImg from '@/public/movieImg.png'
import Image from 'next/image'

import ScheduleMovie from './schedule-movie'
import SeatsMovie from './seats-movie'

const MoviePage = () => {

    //рейтинг фильма
    const rating = 4;
    // функция генерации звездного ерйтинга
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i} className="text-yellow-400 text-2xl">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300 text-2xl">&#9733;</span>);
            }
        }
        return stars;
    }

    
    return (
        <div>
            <div className='flex gap-8'>

                <div className='relative inline-block'>
                    <Image src={MovieImg} alt="movie" />

                    <div className="absolute bottom-0 right-0 
                        h-12 w-28 flex flex-col items-center justify-center 
                        rounded-tl-lg bg-gray-100">
                        <p className='font-medium text-sm'>фантастика</p>
                        <p className='font-regular text-sm'>США, 2023</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-bold'>Бебка с китсуней (16+)</h1>
                    <p className='font-regular text-sm text-gray-400 mt-1'>Subtitle</p>

                    <div className="mt-4">
                        {renderStars()}
                        <p className='font-regular text-sm text-gray-400 mt-1'>Kinopoisk - 8.4</p>
                    </div>

                    <div className="mt-4 max-w-2xl text-base font-normal">
                        Себастьян планирует провести уикенд со своей очаровательной невестой 
                        Элли и ее семьей в их роскошном фамильном поместье, где есть собственное
                        поле для гольфа, шикарная яхта и даже ручной павлин....
                    </div>
                </div>
            </div>

            <ScheduleMovie />
            <SeatsMovie />

            
        </div>
    )
}

export default MoviePage