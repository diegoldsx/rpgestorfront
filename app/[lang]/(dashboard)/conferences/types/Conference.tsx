import { FieldConfig } from "@/app/types/FieldConfig";

export type Conference = {
	id: number;
	category: "event1" | "event2";
	name: string;
	startDate?: string;
	endDate?: string;
	registrationEndDate?: string;
	participantLimit?: number;
	responsible: "option1" | "option2";
	description?: string;
	sponsors?: string;
	permission: "VENDA" | "OUTRO";
	value?: number;
	costCenter?: "center1" | "center2";
	eventCategory?: string;
	account: "associados" | "outros";
	allowSubmission: boolean;
	submissionDeadline?: string;
	registration?: "event" | "outro";
	paymentConfirmation?: "option1" | "option2";
	exemption?: "option1" | "option2";
	cancellation?: "option1" | "option2";
	inviteConfirmation?: string;
	status: "ATIVO" | "INATIVO";
};

export const config: FieldConfig[] = [
	{
		id: "id",
		title: "ID",
	},
	{
		id: "name",
		title: "Nome",
	},
	{
		id: "category",
		title: "Categoria",
		options: [
			{ value: "event1", label: "Evento 1" },
			{ value: "event2", label: "Evento 2" },
		],
	},
	{
		id: "startDate",
		title: "Data Início Evento",
	},
	{
		id: "endDate",
		title: "Data Final Evento",
	},
	{
		id: "registrationEndDate",
		title: "Data Final Inscrições",
	},
	{
		id: "participantLimit",
		title: "Limite de Participantes",
	},
	{
		id: "responsible",
		title: "Responsáveis",
		options: [
			{ value: "option1", label: "Opção 1" },
			{ value: "options2", label: "Opção 2" },
		],
	},
	{
		id: "description",
		title: "Descrição",
	},
	{
		id: "sponsors",
		title: "Patrocinadores",
	},
	{
		id: "permission",
		title: "Permissão",
		options: [
			{ value: "VENDA", label: "Venda" },
			{ value: "OUTRO", label: "Outro" },
		],
	},
	{
		id: "value",
		title: "Valor",
	},
	{
		id: "costCenter",
		title: "Centro de Custo",
		options: [
			{ value: "center1", label: "Centro 1" },
			{ value: "center2", label: "Centro 2" },
		],
	},
	{
		id: "eventCategory",
		title: "Categoria do Evento",
	},
	{
		id: "account",
		title: "Conta",
		options: [
			{ value: "associados", label: "Associados" },
			{ value: "outros", label: "Outros" },
		],
	},
	{
		id: "allowSubmission",
		title: "Permite Submissão",
	},
	{
		id: "submissionDeadline",
		title: "Data limite para submissão",
	},
	{
		id: "registration",
		title: "Inscrição",
		options: [
			{ value: "event", label: "Evento" },
			{ value: "outro", label: "Outro" },
		],
	},
	{
		id: "paymentConfirmation",
		title: "Confirmação de Pagamento",
		options: [
			{ value: "option1", label: "Opção 1" },
			{ value: "options2", label: "Opção 2" },
		],
	},
	{
		id: "exemption",
		title: "Isenção",
		options: [
			{ value: "option1", label: "Opção 1" },
			{ value: "options2", label: "Opção 2" },
		],
	},
	{
		id: "cancellation",
		title: "Cancelamento",
		options: [
			{ value: "option1", label: "Opção 1" },
			{ value: "options2", label: "Opção 2" },
		],
	},
	{
		id: "inviteConfirmation",
		title: "Confirmação de Convite",
	},
	{
		id: "status",
		title: "Situação",
		options: [
			{ value: "ATIVO", label: "Ativo" },
			{ value: "INATIVO", label: "Inativo" },
		],
	},
];

export const getSelectableFields = (): FieldConfig[] => {
	const items = config.filter((c) => c.options).map((item) => ({ ...item }));

	return items;
};

export const getLabelFromValue = (id: string, value: string): string => {
	const options = config.find((field) => field.id === id)?.options;

	const option = options?.find((op) => op.value === value);
	if (!option) return "";

	return option.label || "";
};
