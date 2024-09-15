import NextAuth from "next-auth"

declare module "next-auth" {
	interface Session {
		user: {
			_id: string
			name: string | null
			email: string | null
			image: string | null
			emailVerified: boolean | null
			club: string | null
		}
	}

	interface User {
		_id: string
		name: string | null
		email: string | null
		image: string | null
		emailVerified: boolean | null
		club: string | null
	}
}
