import { z } from 'zod';
import { StatusEnum } from './options';
import { GroupSchema } from './Group';

export const EmailSchema = z.object({
	id: z.string().optional(),
	email: z.string(),
	status: StatusEnum,
	group: GroupSchema,
});

export type EmailType = z.infer<typeof EmailSchema>;

export const fakeEmails: EmailType[] = [
	{
		id: '1',
		email: 'email1',
		status: 'active',
		group: {
			id: '1',
			name: 'Group 1',
			total: 1,
		},
	},
	{
		id: '2',
		email: 'email2',
		status: 'active',
		group: {
			id: '2',
			name: 'Group 2',
			total: 2,
		},
	},
	{
		id: '3',
		email: 'email3',
		status: 'inactive',
		group: {
			id: '3',
			name: 'Group 3',
			total: 3,
		},
	},
];
