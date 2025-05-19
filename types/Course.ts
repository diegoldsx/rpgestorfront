

import { z } from "zod";
import { BillingCycleEnum, CostCenterEnum, StatusEnum } from "./options";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/

export const CourseSchema = z.object({
	id: z.string(),
	category: z.string().min(3, "A categoria deve ter pelo menos 3 caracteres."),
	name: z.string().min(5, "O nome do curso deve ter pelo menos 5 caracteres."),
	startDate: z.string().regex(dateRegex, "Data de início inválida (AAAA-MM-DD)."),
	endDate: z.string().regex(dateRegex, "Data de término inválida (AAAA-MM-DD)."),
	registrationDeadline: z.string().regex(dateRegex, "Prazo de inscrição inválido (AAAA-MM-DD)."),
	participantLimit: z.number()
		.min(1, "O limite de participantes deve ser pelo menos 1."),
	instructors: z.string().min(5, "Os instrutores devem ser especificados."),
	description: z.string()
		.min(10, "A descrição deve ter pelo menos 10 caracteres."),
	permissions: z.string().min(3, "As permissões devem ser especificadas."),
	value: z.number().min(0, "O valor deve ser maior ou igual a zero."),
	costCenter: CostCenterEnum,
	billing: BillingCycleEnum,
	account: z.string().min(3, "A conta deve ser especificada."),
	enrollment: z.string().min(3, "A inscrição deve ser especificada."),
	paymentConfirmation: z.boolean(),
	exemption: z.boolean(),
	cancellation: z.boolean(),
	inviteConfirmation: z.boolean(),
	status: StatusEnum,
});

export type CourseType = z.infer<typeof CourseSchema>;
