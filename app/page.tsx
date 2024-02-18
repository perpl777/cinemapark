import CardMovie from "./components/CardMovie/CardMovie"

export default function Home() {
	return (
		<>
			<h1>Здесь будет страница</h1>
			<div className='grid grid-cols-3 gap-4'>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
				<CardMovie></CardMovie>
			</div>
		</>
	)
}
