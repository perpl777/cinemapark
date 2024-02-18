import React from 'react'

import Link from 'next/link'
import logo from '@/public/logo.svg'
import exit from '@/public/exit.svg'
import Image from 'next/image'

const Header = () => {
	const hover = 'hover:opacity-50'
	return (
		<div className='flex flex-row justify-between items-center h-20'>
			<div className='flex flex-row items-center gap-10'>
				<Link href='/'>
					<Image src={logo} alt='logo' className={hover} />
				</Link>

				<Link href='/profile' className={hover}>
					Профиль
				</Link>
				<Link href='/ticket' className={hover}>
					Билеты
				</Link>
			</div>
			<div className={'flex flex-row ' + hover}>
				<Image src={exit} alt='exit' />
				<Link href='/'>Выйти</Link>
			</div>
		</div>
	)
}

export default Header
