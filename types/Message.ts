
import { z } from 'zod';

export const MessageSchema = z.object({
	id: z.string().optional(),
	subject: z.string(), message: z.string(),

});

export type MessageType = z.infer<typeof MessageSchema>;

export const fakeMessages: MessageType[] = [
	{
		id: '1',
		subject: 'subject',
		message: 'message',
	},
	{
		id: '2',
		subject: 'subject',
		message: 'message',
	},
	{
		id: '3',
		subject: 'subject',
		message: 'message',
	},
];
