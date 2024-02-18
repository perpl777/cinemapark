import { FC } from 'react'

interface InputProps {
	placeholder: string
}

const Input: FC<InputProps> = ({ placeholder }) => {
	return (
		<div>
			<input type='text' className='w-full border-2 border-inherit rounded-lg px-2 py-1 text-xl' placeholder={placeholder}></input>
		</div>
	)
}

export default Input
