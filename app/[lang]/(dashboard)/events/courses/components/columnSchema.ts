import { Column, createColumn } from "@/types/columns/ColumnsDefinition";
import { CourseType } from "@/types/Course";
import { VisibilityState } from "@tanstack/react-table";

export const columnSchema: Array<Column<CourseType>> = [
	createColumn<CourseType>({
		id: "category",
		title: "Categoria",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "name",
		title: "Nome",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<CourseType>({
		id: "startDate",
		title: "Data de Início",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 120,
	}),
	createColumn<CourseType>({
		id: "endDate",
		title: "Data de Término",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 120,
	}),
	createColumn<CourseType>({
		id: "registrationDeadline",
		title: "Prazo de Inscrição",
		type: "date", // Ou "text", dependendo da sua implementação de datas
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "participantLimit",
		title: "Limite de Participantes",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 120,
	}),
	createColumn<CourseType>({
		id: "instructors",
		title: "Instrutores",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<CourseType>({
		id: "description",
		title: "Descrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 300,
	}),
	createColumn<CourseType>({
		id: "permissions",
		title: "Permissões",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "value",
		title: "Valor",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	}),
	createColumn<CourseType>({
		id: "costCenter",
		title: "Centro de Custo",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "billing",
		title: "Faturamento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "account",
		title: "Conta",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "enrollment",
		title: "Inscrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "paymentConfirmation",
		title: "Confirmação de Pagamento",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "exemption",
		title: "Isenção",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 100,
	}),
	createColumn<CourseType>({
		id: "cancellation",
		title: "Cancelamento",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 120,
	}),
	createColumn<CourseType>({
		id: "inviteConfirmation",
		title: "Confirmação de Convite",
		type: "checkbox",
		defaultValue: "",
		isVisible: true,
		size: 150,
	}),
	createColumn<CourseType>({
		id: "status",
		title: "Status",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 100,
	}),
];

export const defaultValues: Record<string, any> = columnSchema.reduce(
	(acc, { id, defaultValue, options }) => {
		acc[id] = options?.length ? options[0].value : (defaultValue ?? "");
		return acc;
	},
	{} as Record<string, any>
);

export function getVisibilityState(
	visibilityArray: string[] = ["*"]
): VisibilityState {
	return Object.fromEntries(
		columnSchema
			.filter(({ id }) => id !== undefined)
			.map(({ id }) => [
				id as string,
				visibilityArray.includes("*") || visibilityArray.includes(id as string),
			])
	);
}

export function getFieldsWithOptions() {
	return columnSchema.filter(({ options }) => !!options);
}
