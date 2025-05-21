

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


export const fakeCourses: CourseType[] = [
	{
		id: "1",
		category: "Desenvolvimento Web",
		name: "React Avançado",
		startDate: "2024-10-15",
		endDate: "2024-10-20",
		registrationDeadline: "2024-10-10",
		participantLimit: 30,
		instructors: "João Silva, Maria Oliveira",
		description:
			"Curso avançado de React com foco em performance e arquitetura.",
		permissions: "Acesso total",
		value: 1500,
		costCenter: "Desenvolvimento",
		billing: "Cartão de crédito",
		account: "Conta Principal",
		enrollment: "Online",
		paymentConfirmation: true,
		exemption: false,
		cancellation: false,
		inviteConfirmation: true,
		status: "Ativo",
	},
	{
		id: "2",
		category: "Marketing Digital",
		name: "SEO para Iniciantes",
		startDate: "2024-11-05",
		endDate: "2024-11-10",
		registrationDeadline: "2024-11-01",
		participantLimit: 50,
		instructors: "Ana Rodrigues",
		description:
			"Introdução às técnicas de SEO para melhorar o posicionamento em buscadores.",
		permissions: "Acesso limitado",
		value: 800,
		costCenter: "Marketing",
		billing: "Boleto bancário",
		account: "Conta de Marketing",
		enrollment: "Presencial",
		paymentConfirmation: false,
		exemption: true,
		cancellation: false,
		inviteConfirmation: true,
		status: "Pendente",
	},
];

