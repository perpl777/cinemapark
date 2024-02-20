import Poster from './poster'
import Heading from './heading'
import Button from '../button'
import Rating from './rating'

const CardMovie = () => {
	return (
		<div className='max-w-72'>
			<div className='mb-1'>
				<Poster></Poster>
			</div>
			<div>
				<Heading title='Бебка с китсуней' subtitle='Подзаголовок' size='xl'></Heading>
			</div>
			<div>
				<Rating stars={4} rating={8.4}></Rating>
			</div>
			<div className='mt-1'>
				<Button>Подробнее</Button>
			</div>
		</div>
	)
}

export default CardMovie
