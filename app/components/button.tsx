import React, {FC, ReactNode} from 'react'

type type = 'default' | 'secondary' | 'disabled'
interface ButtonProps {
	children: ReactNode
	type?: type
}

const Button: FC<ButtonProps> = ({ children, type }) => {
    const hoverDefault = 'hover:bg-violet-800 hover:cursor-pointer duration-200'
	const hoverSecondary = 'hover:bg-gray-200 hover:cursor-pointer duration-200'
	
	switch(type) {
		case 'secondary': {
			return (
				<div className={`h-14 border-2 flex rounded-2xl justify-center items-center ${hoverSecondary}`}>
					<p className="font-semibold text-center">{children}</p>
				</div>
			)
		}
		case 'disabled': {
			return (
				<div className={`h-14 bg-gray-200 flex rounded-2xl justify-center items-center`}>
					<p className="text-gray-400 font-semibold text-center">{children}</p>
				</div>
			)
		}
		default: {
			return (
				<div className={`h-14 flex bg-[#9534D2] rounded-2xl justify-center items-center ${hoverDefault}`}>
					<p className="text-white font-semibold text-center">{children}</p>
				</div>
			)
		}
	}

}

export default Button
