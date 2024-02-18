import React, {FC, ReactNode} from 'react'

interface ButtonProps {
	children: ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
    const hover = 'hover:bg-violet-800 hover:cursor-pointer duration-200'

	return (
		<div className={`h-14 flex bg-[#9534D2] rounded-2xl justify-center items-center ${hover}`}>
			<p className="text-white font-semibold text-center">{children}</p>
		</div>
	)
}

export default Button
