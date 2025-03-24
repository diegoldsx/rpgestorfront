import { z } from "zod";
export const ReportSchema = z.object({
	id: z.string().optional(),
	title: z.string().min(1, "O título é obrigatório."),
	author: z.string().min(1, "O autor é obrigatório."),
	date: z.string().min(1, "A data é obrigatória."),
	status: z.enum(["active", "inactive"]),
});

export type ReportSchemaType = z.infer<typeof ReportSchema>;
