import Link from 'next/link'
import React from 'react'

const BreadCrumps = () => {
	return (
		<div className='flex flex-row gap-5 opacity-50 mb-4'>
			<p>{'<'}</p>
			<Link href='/' className='hover:opacity-50'>
				Назад
			</Link>
		</div>
	)
}

export default BreadCrumps
