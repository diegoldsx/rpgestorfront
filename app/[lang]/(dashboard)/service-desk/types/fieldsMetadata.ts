import { FieldConfig as Field } from "@/app/types/FieldConfig";
import { ServiceDesk } from "@/types/service-desk";
import { VisibilityState } from "@tanstack/react-table";

export const fieldsMetadata: Array<Field<ServiceDesk>> = [
	{
		id: "id",
		title: "ID",
		type: "id",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "registration",
		title: "Registro",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "document",
		title: "Documento",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "member",
		title: "Associado",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "phone",
		title: "Telefone",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "email",
		title: "Email",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "company",
		title: "Empresa",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "sector",
		title: "Setor",
		type: "select",
		defaultValue: "sector1",
		isVisible: true,
		options: [
			{ label: "Setor 1", value: "sector1" },
			{ label: "Setor 2", value: "sector2" },
		],
	},
	{
		id: "local",
		title: "Local",
		type: "select",
		defaultValue: "local1",
		isVisible: true,
		options: [
			{ label: "Local 1", value: "local1" },
			{ label: "Local 2", value: "local2" },
		],
	},
	{
		id: "appointmentDate",
		title: "Data do Atendimento",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "appointmentHour",
		title: "Hora do Atendimento",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
	{
		id: "description",
		title: "Descrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
	},
];

export function getMetadata() {
	return fieldsMetadata;
}

export function getFieldMetadata(id: string) {
	return fieldsMetadata.find((item) => item.id === id);
}

export const defaultValues: Record<string, any> = fieldsMetadata.map(
	({ id, defaultValue, options }) => ({
		id,
		value: options && options.length > 0 ? options[0].value : defaultValue,
	})
);

export function getVisibilityState(
	visibilityArray: string[] = ["*"]
): VisibilityState {
	return Object.fromEntries(
		fieldsMetadata.map(({ id }) => [
			id,
			visibilityArray.includes("*") || visibilityArray.includes(id),
		])
	);
}

export function getFieldsWithOptions() {
	return fieldsMetadata.filter(({ options }) => !!options);
}
