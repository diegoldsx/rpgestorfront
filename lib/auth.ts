import Credentials from 'next-auth/providers/credentials';


import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { NextAuthOptions } from 'next-auth';
import { fake_users } from '@/app/[lang]/(dashboard)/users/types';

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

				const foundUser = fake_users.find((u) => u.email === email);

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
						permissions: foundUser.permissions
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
				token.permissions = user.permissions;

			}
			return token
		},
		async session({ session, token }) {
			if (session.user && token.id) {
				session.user.id = token.id as string
				session.user.permissions = token.permissions as any;

			}
			return session
		},
	},
	debug: process.env.NODE_ENV !== 'production',
};
