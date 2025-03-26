// Updated content with references to member
// Original content from assemblies/components/columnHelper.ts

import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { MemberSchemaType } from "@/types/member";

const field = (id: keyof MemberSchemaType, title: string, options?: any) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<MemberSchemaType>[] = [
	field("id", "ID"),
	field("email", "Email"),
	field("phone", "Telefone"),
	field("mobile", "Celular"),
	field("name", "Nome"),
	field("birthDate", "Data de Nascimento"),
	field("corporateName", "Razão Social"),
	field("tradeName", "Nome Fantasia"),
	field("financialStatus", "Status Financeiro", [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	]),
	field("billingCycle", "Ciclo de Faturamento"),
	field("paymentGroup", "Grupo de Pagamento"),
	field("paymentMethod", "Método de Pagamento"),
	field("type", "Tipo"),
	field("cep", "CEP"),
	field("street", "Rua"),
	field("number", "Número"),
	field("complement", "Complemento"),
	field("neighborhood", "Bairro"),
	field("state", "Estado"),
	field("city", "Cidade"),
	field("document", "Documento"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<MemberSchemaType>;

export const memberFacetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const memberVisibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);
