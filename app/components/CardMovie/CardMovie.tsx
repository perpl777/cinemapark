import Poster from './Poster'
import Heading from './Heading'
import Button from '../Button'
import Rating from './Rating'

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
