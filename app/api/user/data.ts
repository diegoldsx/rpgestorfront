import avatar3 from '@/public/images/avatar/avatar-3.jpg';
export const user = [
	{
		id: 1,
		name: 'RPGestor',
		image: avatar3,
		password: 'senha123',
		email: 'admin@rpgestor.com.br',
		resetToken: null,
		resetTokenExpiry: null,
		profile: null,
	},
];

export type User = (typeof user)[number];
