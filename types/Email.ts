import { z } from 'zod';
import { StatusEnum } from './options';

export const EmailSchema = z.object({
	id: z.string().optional(),
	email: z.string(),
	status: StatusEnum,
	groupId: z.string(),
});

export type EmailType = z.infer<typeof EmailSchema>;

export const fakeEmails: EmailType[] = [
	{
		id: '1',
		email: 'email1',
		status: 'active',
		groupId: '1',
	},
	{
		id: '2',
		email: 'email2',
		status: 'active',
		groupId: '2',
	},
	{
		id: '3',
		email: 'email3',
		status: 'inactive',
		groupId: '3',
	},
];
