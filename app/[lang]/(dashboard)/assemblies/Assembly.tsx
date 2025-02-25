import { generateFieldConfig as fieldConfig } from "@/app/types/FieldConfig";
import { FieldConfig } from "@/app/types/FieldConfig";

export type Assembly = {
	id: number;
	name: string;
	status: "ativo" | "inativo";
	startDate?: string;
	endDate?: string;
	resultDate?: string;
	description?: string;
	type: "unica" | "multipla";
	allowChangeVote: boolean;
	displayMode: "padrao" | "assembleia";
	videoConference: boolean;
};

const displayModeOptions = [
	{ value: "padrão", label: "Padrão" },
	{ value: "assembleia", label: "Assembléia" },
];
const typeOptions = [
	{ value: "unica", label: "Escolha única" },
	{ value: "multipla", label: "Múltipla escolha" },
];
const statusOptions = [
	{ value: "ativo", label: "Ativo" },
	{ value: "inativo", label: "Inativo" },
];

export const assemblyConfig: FieldConfig<Assembly>[] = [
	fieldConfig<Assembly>("id", "ID", "number"),
	fieldConfig<Assembly>("name", "Nome", "text"),
	fieldConfig<Assembly>("status", "Situação", "select", statusOptions),
	fieldConfig<Assembly>("startDate", "Data Início", "text"),
	fieldConfig<Assembly>("endDate", "Data Fim", "text"),
	fieldConfig<Assembly>("resultDate", "Data do resultado", "text"),

	fieldConfig<Assembly>("description", "Descrição", "text"),
	fieldConfig<Assembly>("type", "Tipo", "select", typeOptions),
	fieldConfig<Assembly>(
		"allowChangeVote",
		"Respondente pode alterar voto",
		"boolean"
	),
	fieldConfig<Assembly>(
		"displayMode",
		"Modo de exibição",
		"select",
		displayModeOptions
	),
];
