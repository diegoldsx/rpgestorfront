import { getFieldsWithOptions } from "@/app/types/FieldConfig";
import { config, Gathering } from "../../types/Gathering";
import Cell from "./cell";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

const options = config.filter((c) => c.type === "select");
const exactFilter = (row: any, columnId: string, filterValue: any) => {
	return row.getValue(columnId) === filterValue;
};

console.log(options);

export const columns: ColumnDef<Gathering>[] = config.map((field) => ({
	id: field.id,
	accessorKey: field.id,
	header: field.title,
	fnFilter: exactFilter,
	cell: (info) => {
		if (field.type === "select") {
			const options = config.find((c) => c.id === field.id)?.options;
			const label = options?.find(
				(option) => option.value === info.getValue()
			)?.label;
			return <Cell>{label}</Cell>;
		}

		return <Cell>{info.getValue() as string}</Cell>;
	},
}));

// export const columns: ColumnDef<Gathering>[] = [
// 	{
// 		accessorKey: "id",
// 		header: "ID",
// 		cell: (info) => {
// 			config.map((c) => c.options);
// 			return <Cell>{info.getValue() as string}</Cell>;
// 		},
// 	},

// 	{
// 		accessorKey: "category",
// 		header: "Categoria",
// 		cell: (info) => {
// 			const categoriesOptions = options.find((op) => op.id === "category");
// 			return <Cell>{info.getValue() as string}</Cell>;
// 		},
// 	},
// 	{
// 		accessorKey: "name",
// 		header: "Nome",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "startDate",
// 		header: "Data de Início",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "endDate",
// 		header: "Data de Fim",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "registrationEndDate",
// 		header: "Fim das Inscrições",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "participantLimit",
// 		header: "Limite de Participantes",
// 	},
// 	{
// 		accessorKey: "responsible",
// 		header: "Responsável",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "description",
// 		header: "Descrição",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "sponsors",
// 		header: "Patrocinadores",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "permission",
// 		header: "Permissão",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "value",
// 		header: "Valor",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "costCenter",
// 		header: "Centro de Custo",
// 	},
// 	{
// 		accessorKey: "eventCategory",
// 		header: "Categoria do Evento",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "account",
// 		header: "Conta",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "allowSubmission",
// 		header: "Permitir Submissão",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "submissionDeadline",
// 		header: "Prazo de Submissão",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "registration",
// 		header: "Inscrição",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "paymentConfirmation",
// 		header: "Confirmação de Pagamento",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "exemption",
// 		header: "Isenção",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "cancellation",
// 		header: "Cancelamento",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		accessorKey: "inviteConfirmation",
// 		header: "Confirmação de Convite",
// 		cell: (info) => <Cell>{info.getValue() as string}</Cell>,
// 	},
// 	{
// 		id: "status",
// 		accessorKey: "status",
// 		header: "Status",
// 		meta: { type: "select" },
// 		filterFn: exactFilter, // Use a função de filtro exato aqui
// 		cell: (info) => {
// 			const values = {
// 				ATIVO: { color: "success", label: "Ativo" },
// 				INATIVO: { color: "destructive", label: "Inativo" },
// 				// Adicione outros status se necessário
// 			} as const;

// 			const status = info.getValue() as keyof typeof values;

// 			return (
// 				<Cell>
// 					<Badge color={values[status]?.color || "gray" /* fallback */}>
// 						{values[status]?.label || status /* fallback */}
// 					</Badge>
// 				</Cell>
// 			);
// 		},
// 	},
// ];

export const getVisibilityState = (visibleColumnIds: string[]) =>
	Object.fromEntries(
		config.map((key) => [key.id, visibleColumnIds.includes(key.id)])
	);
