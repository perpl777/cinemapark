import {FC} from 'react'

type Props = {
	label: string
}

const Button: FC<Props> = ({ label }) => {
    const hover = 'hover:bg-violet-800 duration-200'

	return (
		<div className={`h-14 flex bg-[#9534D2] rounded-2xl justify-center items-center ${hover}`}>
			<p className="text-white font-semibold text-center">{label}</p>
		</div>
	)
}

export default Button
