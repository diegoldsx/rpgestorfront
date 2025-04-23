import Credentials from 'next-auth/providers/credentials';

import { User, user } from '@/app/api/user/data';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID as string,
			clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
		}),
		GithubProvider({
			clientId: process.env.AUTH_GITHUB_ID as string,
			clientSecret: process.env.AUTH_GITHUB_SECRET as string,
		}),
		Credentials({
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				const foundUser = user.find((u) => u.email === email);

				if (!foundUser) {
					return null;
				}

				const valid = password === foundUser.password;

				if (!valid) {
					return null;
				}

				if (foundUser) {
					return {
						id: foundUser.id,
						name: foundUser.name,
						email: foundUser.email,
					}
				}
				return null;
			},
		}),
	],
	secret: process.env.AUTH_SECRET,

	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
			}
			return token
		},
		async session({ session, token }) {
			if (session.user && token.id) {
				session.user.id = token.id as string
			}
			return session
		},
	},
	debug: process.env.NODE_ENV !== 'production',
};
