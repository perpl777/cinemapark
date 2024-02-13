import Link from "next/link";

export default function Breadcrumps() {
	return (
		<>
			<div className="flex flex-row gap-5 opacity-50 mb-4">
                <p>{'<'}</p>
                <Link href='/' className="hover:opacity-50">Назад</Link>
            </div>
		</>
	)
}
