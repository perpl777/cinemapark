import Image from 'next/image'
import poster1 from '@/public/poster1.png'

const Poster = () => {
	const genre = 'Фантастика'
	const city = 'США'
	const year = '2023'

	const hover = 'hover:text-sm hover:cursor-default duration-200'

	return (
		<div className='relative'>
			<Image
				src={poster1}
				alt='poster1'
				className='object-cover rounded-t-lg rounded-bl-lg'
			/>
			<div className='bg-gray-200 absolute bottom-0 right-0 rounded-tl-lg'>
				<div className={`text-xs px-2 py-1 ${hover}`}>
					<b>{genre}</b>
					<p className='text-center'>{city}, {year}</p>
				</div>
			</div>
		</div>
	)
}

export default Poster
