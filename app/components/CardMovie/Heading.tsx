const Heading = () => {
	const title = 'Стражи галактики'
	const subtitle = 'Подзаголовок'

	return (
		<div className='mt-2'>
			<b>{title}</b>
            <p className='text-gray-400'>{subtitle}</p>
		</div>
	)
}

export default Heading
