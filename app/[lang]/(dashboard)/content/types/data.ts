import { Content } from ".";

export const FAKE_CONTENT: Content[] = [
	{
		id: "1",
		contentType: "content1",
		status: "active",
		expirationDate: "2024-12-31",
		title: "Webinar de Introdução ao React",
		description: "Um webinar introdutório sobre os conceitos básicos do React.",
		responsible: "user1",
		videoConference: true,
		customHtml: "<p>Bem-vindo ao webinar!</p>",
		access: "public",
	},
	{
		id: "2",
		contentType: "content2",
		status: "inactive",
		description: "Documentação interna sobre o novo sistema de autenticação.",
		responsible: "user2",
		videoConference: false,
		customHtml: "<div>Documentação do sistema de autenticação.</div>",
		access: "private",
	},
	{
		id: "3",
		contentType: "content1",
		status: "active",
		expirationDate: "2024-06-15",
		title: "Atualização da Biblioteca Next.js",
		description: "Discussão sobre as novas funcionalidades e melhorias na biblioteca Next.js.",
		responsible: "user1",
		videoConference: true,
		customHtml: "<p>Discussão sobre o Next.js</p>",
		access: "public",
	},
];
