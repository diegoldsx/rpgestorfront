import { generateFieldConfig as fieldConfig } from "@/app/types/FieldConfig";
import { FieldConfig } from "@/app/types/FieldConfig";

export type Submission = {
	id: number;
	packagingName: string;
	strategicPartners: string;
	area: "concurso";
	authors: string;
	institution: string;
	date: string;
	event: "premioEmbalagem" | "cursoNeurociencia";
	submitedBy: "user1" | "user2";
	packageReleaseDate: string;
	packageDesignAgency: string;
	status: "aprovado" | "reprovado";
	presentationLink: string;
	comments: string;
	number: number;
	presentationDate: string;
	roomContent: "content1" | "content2";
};

export const eventOptions = [
	{ value: "premioEmbalagem", label: "Prêmio Embalagem" },
	{ value: "cursoNeurociencia", label: "Curso Neurociência" },
];
export const submitedByOptions = [
	{ value: "user1", label: "Usuário 1" },
	{ value: "user2", label: "Usuário 2" },
];
export const statusOptions = [
	{ value: "aprovado", label: "Reprovado" },
	{ value: "reprovado", label: "Aprovado" },
];

export const roomContentOptions = [
	{ value: "content1", label: "Conteúdo 1" },
	{ value: "content2", label: "Conteúdo 2" },
];

export const submissionConfig: FieldConfig<Submission>[] = [
	fieldConfig<Submission>("id", "ID", "text"),
	fieldConfig<Submission>("packagingName", "Nome da embalagem", "text"),
	fieldConfig<Submission>("strategicPartners", "Parceiros", "text"),
	fieldConfig<Submission>("area", "Área", "text"),
	fieldConfig<Submission>("authors", "Autores / Instituição", "text"),
	fieldConfig<Submission>("institution", "Instituição", "text"),
	fieldConfig<Submission>("date", "Data", "text"),
	fieldConfig<Submission>("event", "Evento", "select", eventOptions),
	fieldConfig<Submission>(
		"submitedBy",
		"Enviado por",
		"select",
		submitedByOptions
	),
	fieldConfig<Submission>("packageReleaseDate", "Data de lançamento", "text"),
	fieldConfig<Submission>("packageDesignAgency", "Agência do design", "text"),
	fieldConfig<Submission>("status", "Situação", "select", statusOptions),
	fieldConfig<Submission>("presentationLink", "Link", "text"),
	fieldConfig<Submission>("comments", "Comentários", "text"),
	fieldConfig<Submission>("number", "Número", "text"),
	fieldConfig<Submission>("presentationDate", "Data de apresentação", "text"),
	fieldConfig<Submission>("roomContent", "Sala", "select", roomContentOptions),
];
