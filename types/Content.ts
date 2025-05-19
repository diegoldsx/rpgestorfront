import { z } from "zod";
import { StatusEnum, AccessTypeEnum } from "./options";

export const ContentSchema = z.object({
	id: z.string().optional(),
	contentTypeId: z.string(),
	status: StatusEnum,
	expirationDate: z.string().optional(),
	title: z.string().max(100).optional(),
	description: z.string().min(1, { message: "A descrição não pode estar vazia" }),
	responsibleId: z.string(),
	videoConference: z.boolean(),
	customHtml: z.string().min(1, { message: "O HTML não pode estar vazio" }),
	access: AccessTypeEnum,
});

export type ContentType = z.infer<typeof ContentSchema>;
