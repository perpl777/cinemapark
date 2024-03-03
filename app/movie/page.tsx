import React from 'react'

import BreadCrumps from '../components/bread-crumps'

import Heading from '../components/cardMovie/heading'
import Rating from '../components/cardMovie/rating'
import Poster from '../components/cardMovie/poster'
import CinemaDetails from '../components/cinemaDetails/cinemaDetails'


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
                        stars={3} 
                        rating={8.4}
                    />
                    
                    <div className="mt-4 max-w-2xl text-base font-normal">
                        Себастьян планирует провести уикенд со своей очаровательной невестой 
                        Элли и ее семьей в их роскошном фамильном поместье, где есть собственное
                        поле для гольфа, шикарная яхта и даже ручной павлин....
                    </div>
                </div>
            </div>

            <CinemaDetails />

        </div>
    )
}

export default MoviePage