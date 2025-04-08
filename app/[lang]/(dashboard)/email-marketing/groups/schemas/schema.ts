import { z } from "zod";

export const GroupSchema = z.object({
	id: z.string().optional(),
	subject: z.string().min(2, "O nome do grupo é obrigatório"),
	message: z.string().min(1, "O total é obrigatório"),
});

export type GroupSchemaType = z.infer<typeof GroupSchema>;
