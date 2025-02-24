import { generateFieldConfig } from "@/app/types/FieldConfig";
import { FieldConfig } from "@/app/types/FieldConfig";

export type Course = {
	category: "curso1" | "curso2";
	name: string;
	startDate: string;
	endDate: string;
	registrationDeadline: string;
	participantLimit: number;
	instructors: "user1" | "user2";
	description: string;
	permissions: "venda" | "cliente";
	value: number;
	costCenter: "administrativo" | "outras";
	billing: "mensalidade" | "associados";
	account: "caixa" | "bradesco";
	enrollment: "evento1" | "evento2";
	paymentConfirmation: boolean;
	exemption: boolean;
	cancellation: boolean;
	inviteConfirmation: boolean;
	status: "ativo" | "inativo";
};

export const courseConfig: FieldConfig<Course>[] = [
	generateFieldConfig<Course>("name", "Nome"),
	generateFieldConfig<Course>("category", "Categoria", "select", [
		{ value: "curso1", label: "Curso 1" },
		{ value: "curso2", label: "Curso 2" },
	]),
	generateFieldConfig<Course>("startDate", "Data Início"),
	generateFieldConfig<Course>("endDate", "Data Fim"),
	generateFieldConfig<Course>(
		"registrationDeadline",
		"Data Limite de Inscrição"
	),
	generateFieldConfig<Course>("participantLimit", "Limite de Participantes"),
	generateFieldConfig<Course>("instructors", "Instrutores", "select", [
		{ value: "user1", label: "User 1" },
		{ value: "user2", label: "User 2" },
	]),
	generateFieldConfig<Course>("description", "Descrição"),
	generateFieldConfig<Course>("permissions", "Permissões", "select", [
		{ value: "venda", label: "VENDA" },
		{ value: "cliente", label: "CLIENTE" },
	]),
	generateFieldConfig<Course>("value", "Valor"),
	generateFieldConfig<Course>("costCenter", "Centro de Custo", "select", [
		{ value: "administrativo", label: "Administrativo" },
		{ value: "outras", label: "Outras" },
	]),
	generateFieldConfig<Course>("billing", "Forma de Pagamento", "select", [
		{ value: "mensalidade", label: "Mensalidade" },
		{ value: "associados", label: "Associados" },
	]),
	generateFieldConfig<Course>("account", "Conta", "select", [
		{ value: "caixa", label: "Caixa" },
		{ value: "bradesco", label: "Bradesco" },
	]),
	generateFieldConfig<Course>("enrollment", "Inscrição", "select", [
		{ value: "evento1", label: "Evento 1" },
		{ value: "evento2", label: "Evento 2" },
	]),
	generateFieldConfig<Course>(
		"paymentConfirmation",
		"Confirmação de Pagamento",
		"select",
		[
			{ value: true, label: "Sim" },
			{ value: false, label: "Não" },
		]
	),
	generateFieldConfig<Course>("exemption", "Isenção", "select", [
		{ value: true, label: "Sim" },
		{ value: false, label: "Não" },
	]),
	generateFieldConfig<Course>("cancellation", "Cancelamento", "select", [
		{ value: true, label: "Sim" },
		{ value: false, label: "Não" },
	]),
	generateFieldConfig<Course>(
		"inviteConfirmation",
		"Confirmação de Convite",
		"select",
		[
			{ value: true, label: "Sim" },
			{ value: false, label: "Não" },
		]
	),
	generateFieldConfig<Course>("status", "Situação", "select", [
		{ value: "ativo", label: "ATIVO" },
		{ value: "inativo", label: "INATIVO" },
	]),
];
