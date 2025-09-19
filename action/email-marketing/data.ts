import { EmailType } from "@/types/Email";
import { StatusEnum } from "@/types/options";

export const announcements: EmailType[] = [
	{
		email: "email@email.com",
		status: "active",
		group: {
			id: "3",
			name: "Clientes",
			total: 1,
		},
	},
	{
		email: "emai2@email.com",
		status: "pending",
		group: {
			id: "3",
			name: "Clientes",
			total: 1,
		},
	},
	{
		email: "emai3@email.com",
		status: "delivered",
		group: {
			id: "3",
			name: "Clientes",
			total: 1,
		},
	},
];
