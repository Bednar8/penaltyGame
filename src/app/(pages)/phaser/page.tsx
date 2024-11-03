// "use client"

// import Phaser from "phaser"

// class Example extends Phaser.Scene {
// 	preload() {
// 		// Ustawiamy bazowy URL dla zasobów gry
// 		this.load.setBaseURL("https://cdn.phaserfiles.com/v385")

// 		// Ładujemy zasoby graficzne
// 		this.load.image("sky", "assets/skies/space3.png")
// 		this.load.image("logo", "assets/sprites/phaser3-logo.png")
// 		this.load.image("red", "assets/particles/red.png")
// 	}

// 	create() {
// 		// Dodajemy tło do gry
// 		this.add.image(400, 300, "sky")

// 		// Dodajemy cząsteczki (particles) w kolorze czerwonym
// 		const particles = this.add.particles(0, 0, "red", {
// 			speed: 100,
// 			scale: {start: 1, end: 0},
// 			blendMode: "ADD",
// 		})

// 		// Dodajemy logo Phaser jako obiekt fizyczny
// 		const logo = this.physics.add.image(400, 100, "logo")

// 		// Ustawiamy prędkość i odbicia logo
// 		logo.setVelocity(100, 200)
// 		logo.setBounce(1, 1)
// 		logo.setCollideWorldBounds(true)

// 		// Sprawiamy, że cząsteczki podążają za logo
// 		particles.startFollow(logo)
// 	}
// }

// import {useEffect, useRef} from "react"

// export default function GamePage() {
// 	const gameContainerRef = useRef(null) // Referencja do kontenera gry
// 	const gameInstanceRef = useRef(null) // Referencja do instancji gry

// 	useEffect(() => {
// 		// Konfiguracja gry Phaser
// 		const config = {
// 			type: Phaser.AUTO,
// 			width: 800,
// 			height: 600,
// 			scene: Example,
// 			physics: {
// 				default: "arcade",
// 				arcade: {gravity: {y: 200}},
// 			},
// 			parent: gameContainerRef.current, // Kontener, w którym gra będzie renderowana
// 		}

// 		// Inicjalizacja gry, jeśli nie istnieje
// 		if (!gameInstanceRef.current) {
// 			gameInstanceRef.current = new Phaser.Game(config)
// 		}

// 		// Sprzątanie - usuwanie instancji gry przy odmontowaniu komponentu
// 		return () => {
// 			if (gameInstanceRef.current) {
// 				gameInstanceRef.current.destroy(true)
// 				gameInstanceRef.current = null
// 			}
// 		}
// 	}, [])

// 	return (
// 		<div className="flex justify-center items-center h-screen">
// 			{/* Kontener na grę Phaser */}
// 			<div
// 				ref={gameContainerRef}
// 				className="w-full max-w-[800px] h-[600px]"></div>
// 		</div>
// 	)
// }

export default function PhaserPage() {
	// const {data: session} = useSession()

	// if (!session) {
	// 	return <p>Proszę się zalogować, aby zmienić klub.</p>
	// }

	return <div className="flex flex-col h-full">text</div>
}
