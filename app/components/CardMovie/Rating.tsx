import { FC } from 'react'

type star = 1 | 2 | 3 | 4 | 5
interface RatingProps {
	stars: star
	rating: number
}

const Rating: FC<RatingProps> = ({ stars, rating }) => {
	const renderStars = []
	for (let i = 1; i <= 5; i++) {
		if (i <= stars) {
			renderStars.push(<span key={i} className='text-yellow-400 text-2xl'>&#9733;</span>)
		} else {
			renderStars.push(<span key={i} className='text-gray-300 text-2xl'>&#9733;</span>)
		}
	}

	return (
		<div>
            {renderStars}
            <p className='font-regular text-sm text-gray-400'>Kinopoisk - {rating}</p>
        </div>
	)
}

export default Rating
