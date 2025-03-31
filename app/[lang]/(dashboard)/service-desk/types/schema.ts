import { z } from "zod";

export const ServiceDeskSchema = z.object({
	id: z.string().optional(),
	registration: z.string().min(1, { message: "Matrícula é obrigatório" }),
	document: z.string().min(1, { message: "O documento é obrigatório" }),
	member: z.string().min(1, { message: "O associado é obrigatório" }),
	phone: z.string().optional(),
	email: z.string().min(1, { message: "O email é obrigatório" }),
	company: z.string().optional(),
	sector: z.string().optional(),
	local: z.string().optional(),
	appointmentDate: z
		.string()
		.min(1, { message: "A data de agendamento é obrigatória" }),
	appointmentHour: z
		.string()
		.min(1, { message: "A hora de agendamento é obrigatória" }),
	description: z.string().optional(),
});

export type ServiceDeskSchemaType = z.infer<typeof ServiceDeskSchema>;
