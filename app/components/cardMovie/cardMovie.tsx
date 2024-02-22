import Link from 'next/link'

import Poster from './poster'
import Heading from './heading'
import Button from '../button'
import Rating from './rating'

const CardMovie = () => {
	return (
		<div className='max-w-72'>
			<div className='mb-4'>
				<Poster></Poster>
			</div>
			<div>
				<Heading title='Бебка с китсуней' subtitle='Подзаголовок' size='xl'></Heading>
			</div>
			<div className='mt-2'>
				<Rating stars={4} rating={8.4}></Rating>
			</div>
			<div className='mt-3'>
				<Link href={'movie'}><Button>Подробнее</Button></Link>
			</div>
		</div>
	)
}

export default CardMovie
