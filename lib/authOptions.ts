import {NextAuthOptions} from "next-auth"
import {MongoDBAdapter} from "@auth/mongodb-adapter"
import client from "./db"

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import {MongoClient} from "mongodb"

export const authOptions: NextAuthOptions = {
	adapter: MongoDBAdapter(client),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],

	callbacks: {
		async session({session, token, user}) {
			const dbClient: MongoClient = await client.connect()
			const db = dbClient.db("PenaltyGame")
			const usersCollection = db.collection("users")

			// Pobierz użytkownika z bazy danych na podstawie emaila
			const dbUser = await usersCollection.findOne({email: session.user?.email})

			if (dbUser) {
				// Zapisujemy dodatkowe dane do sesji
				// session.user._id = dbUser._id.toString() // Zapisz ID użytkownika jako string
				// session.user.name = dbUser.name || null
				// session.user.email = dbUser.email || null
				// session.user.image = dbUser.image || null
				// session.user.emailVerified = dbUser.emailVerified || null
				session.user.club = dbUser.club || null // Zakładamy, że club istnieje
				session.user.player = dbUser.player || null // Zakładamy, że club istnieje
				session.user.record = dbUser.record || null // Zakładamy, że club istnieje
			}

			return session // Zwróć sesję z dodatkowymi informacjami
		},

		async signIn({user, account, profile, email, credentials}) {
			// const dbClient: MongoClient = await client.connect()
			// const db = dbClient.db("PenaltyGame")
			// const usersCollection = db.collection("users")

			// const existingUser = await usersCollection.findOne({email: user.email})

			// if (existingUser && account?.provider !== existingUser.provider) {
			// 	// Użytkownik istnieje, ale próbuje zalogować się za pomocą innego dostawcy
			// 	console.log("########################")
			// 	console.log("TAK TAK", user)
			// 	console.log("########################")
			// 	throw new Error("Proszę zalogować się za pomocą oryginalnego dostawcy.")
			// }

			// Jeżeli użytkownik nie istnieje, dodaj go do bazy
			// if (!existingUser) {
			// 	await usersCollection.insertOne({
			// 		// name: user.name,
			// 		// email: user.email,
			// 		// image: user.image,
			// 		club: user.club, // Można ustawić domyślną wartość dla club
			// 		// provider: account?.provider, // Dodaj dostawcę do bazy
			// 	})
			// }

			return true // Pozwól na logowanie
		},
	},
}
