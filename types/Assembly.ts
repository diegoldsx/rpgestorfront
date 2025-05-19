import { z } from "zod";
import { StatusEnum } from "./options";


export const AssemblySchema = z.object({
	id: z.string(),
	name: z.string().min(1, { message: "O nome é obrigatório" }),
	status: StatusEnum,
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

export type AssemblyType = z.infer<typeof AssemblySchema>;

export const fakeAssemblies: AssemblyType[] = [
	{
		id: "1",
		name: "Annual General Meeting",
		status: "active",
		startDate: "2025-04-01",
		endDate: "2025-04-02",
		resultDate: "2025-04-03",
		description: "Discussing the annual performance and future strategies.",
		type: "AGM",
		allowChangeVote: true,
		displayMode: "online",
		videoConference: true,
	},
	{
		id: "2",
		name: "Board Meeting",
		status: "inactive",
		startDate: "2025-05-10",
		endDate: "2025-05-11",
		resultDate: "2025-05-12",
		description: "Quarterly board meeting to review financials.",
		type: "Board",
		allowChangeVote: false,
		displayMode: "in-person",
		videoConference: false,
	},
	{
		id: "3",
		name: "Project Kickoff",
		status: "active",
		startDate: "2025-06-15",
		endDate: "2025-06-16",
		resultDate: "2025-06-17",
		description: "Kickoff meeting for the new project launch.",
		type: "Kickoff",
		allowChangeVote: true,
		displayMode: "hybrid",
		videoConference: true,
	},
];
