import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { CustomerSchemaType } from "@/types/customer/customer";

const field = (id: keyof CustomerSchemaType, title: string, options?: any) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<CustomerSchemaType>[] = [
	field("id", "ID"),
	field("name", "Nome"),
	field("email", "Email"),
	field("customerType", "Tipo Cliente", [
		{ value: "pf", label: "Física" },
		{ value: "pj", label: "Jurídica" },
	]),
	field("cpf", "CPF"),
	field("cnpj", "CNPJ"),
	field("phone", "Telefone"),
	field("mobile", "Celular"),
	field("userPassword", "Senha do Usuário"),
	field("registrationDate", "Data de Registro"),
	field("status", "Status"),
	field("code", "Código"),
	field("photo", "Foto"),
	field("zipCode", "CEP"),
	field("street", "Rua"),
	field("number", "Número"),
	field("complement", "Complemento"),
	field("neighborhood", "Bairro"),
	field("state", "Estado"),
	field("city", "Cidade"),
	field("corporateName", "Razão Social"),
	field("tradeName", "Nome Fantasia"),
	field("billingEmail", "Email de Cobrança"),
	field("billingName", "Nome de Cobrança"),
	field("billingPhone", "Telefone de Cobrança"),
	field("billingMobile", "Celular de Cobrança"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<CustomerSchemaType>;

export const facetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);
