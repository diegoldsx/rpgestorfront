import { z } from "zod";

export type Assembly = {
	id?: string;
	name: string;
	status: string;
	startDate?: string;
	endDate?: string;
	resultDate?: string;
	description?: string;
	type: string;
	allowChangeVote: boolean;
	displayMode: string;
	videoConference: boolean;
};

export const AssemblySchema = z.object({
	id: z.string().optional(),
	name: z.string().min(1, { message: "O nome é obrigatório" }),
	status: z.string().min(1, { message: "O status é obrigatório" }),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
	resultDate: z.string().optional(),
	description: z.string().optional(),
	type: z.string().min(1, { message: "O tipo é obrigatório" }),
	allowChangeVote: z.boolean(),
	displayMode: z
		.string()
		.min(1, { message: "O modo de exibição é obrigatório" }),
	videoConference: z.boolean(),
});

export type AssemblySchemaType = z.infer<typeof AssemblySchema>;
