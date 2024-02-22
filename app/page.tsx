import CardMovie from "./components/cardMovie/cardMovie"

export default function Home() {
	return (
		<>
			<h1 className="text-2xl font-semibold mb-5 mt-12">Афиша</h1>
			<div className='grid grid-cols-3 gap-x-8 gap-y-12'>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
			</div>
		</>
	)
}
