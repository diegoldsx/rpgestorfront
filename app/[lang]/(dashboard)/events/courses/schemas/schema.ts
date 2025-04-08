import { z } from "zod";

export const CourseSchema = z.object({
	id: z.string().optional(),
	category: z.string().min(3, "A categoria deve ter pelo menos 3 caracteres."),
	name: z.string().min(5, "O nome do curso deve ter pelo menos 5 caracteres."),
	startDate: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, "Data de início inválida (AAAA-MM-DD)."),
	endDate: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, "Data de término inválida (AAAA-MM-DD)."),
	registrationDeadline: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, "Prazo de inscrição inválido (AAAA-MM-DD)."),
	participantLimit: z
		.number()
		.min(1, "O limite de participantes deve ser pelo menos 1."),
	instructors: z.string().min(5, "Os instrutores devem ser especificados."),
	description: z
		.string()
		.min(10, "A descrição deve ter pelo menos 10 caracteres."),
	permissions: z.string().min(3, "As permissões devem ser especificadas."),
	value: z.number().min(0, "O valor deve ser maior ou igual a zero."),
	costCenter: z.string().min(3, "O centro de custo deve ser especificado."),
	billing: z.string().min(3, "O faturamento deve ser especificado."),
	account: z.string().min(3, "A conta deve ser especificada."),
	enrollment: z.string().min(3, "A inscrição deve ser especificada."),
	paymentConfirmation: z.boolean(),
	exemption: z.boolean(),
	cancellation: z.boolean(),
	inviteConfirmation: z.boolean(),
	status: z.string().min(3, "O status deve ser especificado."),
});

export type CourseSchemaType = z.infer<typeof CourseSchema>;
