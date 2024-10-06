import Image from "next/image"
import Link from "next/link"

function CurrentClub({currentClub}) {
	return (
		<div className="flex h-full">
			{currentClub?.name ? (
				<div className="flex flex-col items-center gap-5">
					<div className="flex flex-col items-center">
						<p>Twój klub: </p>
						<Image
							src={currentClub.image}
							width={200}
							height={200}
							alt={currentClub.name}
						/>
					</div>
					<Link href="/clubs" className="text-red-500 underline">
						Zmień klub
					</Link>
				</div>
			) : (
				<>
					<p>Nie masz jeszcze klubu</p>
					<Link href="/clubs" className="text-red-500">
						Wybierz klub
					</Link>
				</>
			)}
		</div>
	)
}

export default CurrentClub
