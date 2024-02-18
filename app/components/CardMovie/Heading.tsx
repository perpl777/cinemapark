import { FC } from "react"

type size = 'xl' | '3xl'
interface HeadingProps {
	title: string
	subtitle: string
	size: size 
}

const Heading:FC<HeadingProps> = ({title, subtitle, size}) => {

	return (
		<div>
			<p className={`font-semibold text-${size}`}>{title}</p>
            <p className='text-gray-400'>{subtitle}</p>
		</div>
	)
}

export default Heading
