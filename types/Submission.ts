import { z } from "zod";
import { StatusEnum } from "./options";

export const SubmissionSchema = z.object({
	id: z.string(),
	packagingName: z.string().min(1, "O Nome da Embalagem é obrigatório."),
	strategicPartners: z
		.string()
		.min(1, "Os Parceiros Estratégicos são obrigatórios."),
	area: z.string().min(1, "A Área é obrigatória."),
	authors: z.string().min(1, "Os Autores são obrigatórios."),
	institution: z.string().min(1, "A Instituição é obrigatória."),
	date: z.string().min(1, "A Data é obrigatória."),
	eventId: z.string(),
	submitedBy: z.string().min(1, "O Submetido Por é obrigatório."),
	packageReleaseDate: z
		.string()
		.min(1, "A Data de Lançamento da Embalagem é obrigatória."),
	packageDesignAgency: z
		.string()
		.min(1, "A Agência de Design da Embalagem é obrigatória."),
	status: StatusEnum,
	presentationLink: z
		.string()
		.min(1, "O Link da Apresentação é obrigatório.")
		.url("Formato de URL inválido."),
	comments: z.string().optional(),
	number: z.string().min(1, "O Número é obrigatório."),
	presentationDate: z.string().min(1, "A Data da Apresentação é obrigatória."),
	roomContent: z.string().min(1, "O Conteúdo da Sala é obrigatório."),
});

export type SubmissionType = z.infer<typeof SubmissionSchema>;

export const fakeSubmissions: SubmissionType[] = [
	{
		id: '1',
		packagingName: 'packagingName 1',
		strategicPartners: 'strategicPartners 1',
		area: 'area 1',
		authors: 'authors 1',
		institution: 'institution 1',
		date: 'date 1',
		eventId: 'eventId 1',
		submitedBy: 'submitedBy 1',
		packageReleaseDate: 'packageReleaseDate 1',
		packageDesignAgency: 'packageDesignAgency 1',
		status: 'status 1',
		presentationLink: 'presentationLink 1',
		comments: 'comments 1',
		number: 'number 1',
		presentationDate: 'presentationDate 1',
		roomContent: 'roomContent 1',
	}]
