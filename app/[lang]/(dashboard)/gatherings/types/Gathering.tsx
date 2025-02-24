import { generateFieldConfig } from "@/app/types/FieldConfig";
import { FieldConfig } from "@/app/types/FieldConfig";

export type Gathering = {
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
	status: "ativo" | "inativo";
};

export const config: FieldConfig<Gathering>[] = [
	generateFieldConfig<Gathering>("id", "ID", "number"),
	generateFieldConfig<Gathering>("name", "Nome", "text"),
	generateFieldConfig<Gathering>("category", "Categoria", "select", [
		{ value: "event1", label: "Evento 1" },
		{ value: "event2", label: "Evento 2" },
	]),
	generateFieldConfig<Gathering>("startDate", "Data Início", "text"),
	generateFieldConfig<Gathering>("endDate", "Data Fim", "text"),
	generateFieldConfig<Gathering>(
		"registrationEndDate",
		"Data Limite de Inscrição",
		"select"
	),
	generateFieldConfig<Gathering>(
		"participantLimit",
		"Limite de Participantes",
		"select"
	),
	generateFieldConfig<Gathering>("responsible", "Instrutores", "select", [
		{ value: "user1", label: "User 1" },
		{ value: "user2", label: "User 2" },
	]),
	generateFieldConfig<Gathering>("description", "Descrição", "text"),
	generateFieldConfig<Gathering>("permission", "Permissões", "select", [
		{ value: "venda", label: "VENDA" },
		{ value: "cliente", label: "CLIENTE" },
	]),
	generateFieldConfig<Gathering>("sponsors", "Patrocinador"),
	generateFieldConfig<Gathering>("costCenter", "Centro de Custo", "select", [
		{ value: "administrativo", label: "Administrativo" },
		{ value: "outras", label: "Outras" },
	]),
	generateFieldConfig<Gathering>("costCenter", "Forma de Pagamento", "select", [
		{ value: "center1", label: "Centro 1" },
		{ value: "center2", label: "Centro 2" },
	]),
	generateFieldConfig<Gathering>("account", "Conta", "select", [
		{ value: "caixa", label: "Caixa" },
		{ value: "bradesco", label: "Bradesco" },
	]),
	generateFieldConfig<Gathering>("eventCategory", "Categoria", "select", [
		{ value: "evento1", label: "Evento 1" },
		{ value: "evento2", label: "Evento 2" },
	]),
	generateFieldConfig<Gathering>(
		"paymentConfirmation",
		"Confirmação de Pagamento",
		"select",
		[
			{ value: true, label: "Sim" },
			{ value: false, label: "Não" },
		]
	),
	generateFieldConfig<Gathering>("exemption", "Isenção", "select", [
		{ value: true, label: "Sim" },
		{ value: false, label: "Não" },
	]),
	generateFieldConfig<Gathering>("cancellation", "Cancelamento", "select", [
		{ value: true, label: "Sim" },
		{ value: false, label: "Não" },
	]),
	generateFieldConfig<Gathering>(
		"inviteConfirmation",
		"Confirmação de Convite",
		"select",
		[
			{ value: true, label: "Sim" },
			{ value: false, label: "Não" },
		]
	),
	generateFieldConfig<Gathering>("status", "Situação", "select", [
		{ value: "ativo", label: "Ativo" },
		{ value: "inativo", label: "Inativo" },
	]),
];
