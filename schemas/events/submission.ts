import { z } from "zod";

export const SubmissionSchema = z.object({
	id: z.string().optional(),

	packagingName: z.string().min(1, "O Nome da Embalagem é obrigatório."),
	strategicPartners: z
		.string()
		.min(1, "Os Parceiros Estratégicos são obrigatórios."),
	area: z.string().min(1, "A Área é obrigatória."),
	authors: z.string().min(1, "Os Autores são obrigatórios."),
	institution: z.string().min(1, "A Instituição é obrigatória."),

	date: z.string().min(1, "A Data é obrigatória."),
	event: z.string().min(1, "O Evento é obrigatório."),
	submitedBy: z.string().min(1, "O Submetido Por é obrigatório."),

	packageReleaseDate: z
		.string()
		.min(1, "A Data de Lançamento da Embalagem é obrigatória."),

	packageDesignAgency: z
		.string()
		.min(1, "A Agência de Design da Embalagem é obrigatória."),
	status: z.string().min(1, "O Status é obrigatório."),

	presentationLink: z
		.string()
		.min(1, "O Link da Apresentação é obrigatório.")
		.url("Formato de URL inválido."),
	comments: z.string().optional(),

	number: z.string().min(1, "O Número é obrigatório."),

	presentationDate: z.string().min(1, "A Data da Apresentação é obrigatória."),

	roomContent: z.string().min(1, "O Conteúdo da Sala é obrigatório."),
});

export type Submission = z.infer<typeof SubmissionSchema>;
export type SubmissionSchemaType = z.infer<typeof SubmissionSchema>;
