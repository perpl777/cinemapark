import CardMovie from "./components/CardMovie/CardMovie"

export default function Home() {
	return (
		<>
			<h1 className="text-2xl font-semibold mb-2">Афиша</h1>
			<div className='grid grid-cols-3 gap-x-4 gap-y-8'>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
			</div>
		</>
	)
}
