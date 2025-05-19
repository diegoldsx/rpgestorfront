

import { z } from "zod";
import { StatusEnum } from "./options";


export const CategorySchema = z.object({
	id: z.string(),
	name: z.string().min(5, "O nome do curso deve ter pelo menos 5 caracteres."),
	status: StatusEnum,
});

export type CategoryType = z.infer<typeof CategorySchema>;
