import Image from "next/image"
import Link from "next/link"

function CurrentPlayer({currentPlayer}) {
	return (
		<div className="flex h-full">
			{currentPlayer?.name ? (
				<div className="flex flex-col items-center gap-5 justify-center">
					<div>
						<p>Twój piłkarz: {currentPlayer.name}</p>
						{currentPlayer.image && (
							<div style={{height: "200px"}}>
								<Image
									src={currentPlayer.image}
									alt=""
									height={200}
									width={200} // Możemy pominąć szerokość, stylując ją przez CSS
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
									}}
								/>
							</div>
						)}
					</div>

					<Link href="/players" className="text-red-500 underline">
						Zmień piłkarza
					</Link>
				</div>
			) : (
				<>
					<p>Nie masz jeszcze piłkarza</p>
					<Link href="/players" className="text-red-500">
						Wybierz piłkarza
					</Link>
				</>
			)}
		</div>
	)
}

export default CurrentPlayer
