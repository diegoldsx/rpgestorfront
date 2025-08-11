import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { CustomerType } from "@/types/Customer";
import { createColumn } from "@/types/columns/ColumnsDefinition";
import { DocumentType } from "@/types/options";

export const columnSchema: Array<Column<CustomerType>> = [
	createColumn<CustomerType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<CustomerType>({
		id: "name",
		title: "Nome",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<CustomerType>({
		id: "email",
		title: "Email",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	}),
	createColumn<CustomerType>({
		id: "documentType",
		title: "Tipo de Cliente",
		type: "select", //
		defaultValue: "",
		isVisible: true,
		size: 120,
		options: DocumentType,
	}),
	createColumn<CustomerType>({
		id: "cpf",
		title: "CPF",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "cnpj",
		title: "CNPJ",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 180,
	}),
	createColumn<CustomerType>({
		id: "phone",
		title: "Telefone",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "mobile",
		title: "Celular",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "userPassword",
		title: "Senha",
		type: "text",
		defaultValue: "",
		isVisible: false,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "registrationDate",
		title: "Data de Registro",
		type: "date",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "status",
		title: "Status",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	}),
	createColumn<CustomerType>({
		id: "code",
		title: "Código",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	}),
	createColumn<CustomerType>({
		id: "photo",
		title: "Foto",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<CustomerType>({
		id: "zipCode",
		title: "CEP",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 120,
	}),
	createColumn<CustomerType>({
		id: "street",
		title: "Rua",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<CustomerType>({
		id: "number",
		title: "Número",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 80,
	}),
	createColumn<CustomerType>({
		id: "complement",
		title: "Complemento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "neighborhood",
		title: "Bairro",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "state",
		title: "Estado",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 80,
	}),
	createColumn<CustomerType>({
		id: "city",
		title: "Cidade",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "corporateName",
		title: "Razão Social",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	}),
	createColumn<CustomerType>({
		id: "tradeName",
		title: "Nome Fantasia",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	}),
	createColumn<CustomerType>({
		id: "billingEmail",
		title: "Email de Cobrança",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 250,
	}),
	createColumn<CustomerType>({
		id: "billingName",
		title: "Nome de Cobrança",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<CustomerType>({
		id: "billingPhone",
		title: "Telefone de Cobrança",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CustomerType>({
		id: "billingMobile",
		title: "Celular de Cobrança",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
];

export const defaultValues: Record<string, any> = columnSchema.reduce((acc, { id, defaultValue, options }) => {
	acc[id] = options?.length ? options[0].value : defaultValue ?? "";
	return acc;
}, {} as Record<string, any>);

export function getVisibilityState(visibilityArray: string[] = ["*"]): VisibilityState {
	return Object.fromEntries(
		columnSchema
			.filter(({ id }) => id !== undefined)
			.map(({ id }) => [id as string, visibilityArray.includes("*") || visibilityArray.includes(id as string)])
	);
}

export function getFieldsWithOptions() {
	return columnSchema.filter(({ options }) => !!options);
}
