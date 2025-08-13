import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { createColumn } from "@/types/columns/ColumnsDefinition";
import { CostCenterOptions, PaymentMethodOptions, Status, StatusEnum } from "@/types/options";
import { ExpenseType } from "@/types/Expense";
import { FacetedFilter } from "@/components/common/data-table/data-table";


export const columnSchema: Array<Column<ExpenseType>> = [
	createColumn<ExpenseType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<ExpenseType>({
		id: "payer",
		title: "Pagador",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "competenceDate",
		title: "Competência",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "description",
		title: "Descri o",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "dueDate",
		title: "Data vencimento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "paymentMethod",
		title: "M todo de pagamento",
		type: "select",
		options: PaymentMethodOptions,
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "costCenter",
		title: "Centro de custo",
		type: "select",
		options: CostCenterOptions,
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "category",
		title: "Categoria",
		type: "select",

		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "account",
		title: "Conta",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "tax",
		title: "Taxa",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "amount",
		title: "Valor",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "description",
		title: "Descrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "observations",
		title: "Observações",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "status",
		title: "Status",
		type: "select",
		options: Status,
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "paymentDate",
		title: "Data de pagamento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "paymentClearingDate",
		title: "Data de limpeza",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "discounts",
		title: "Descontos",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "addition",
		title: "Acrescimo",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "totalPaid",
		title: "Total pago",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "totalClearing",
		title: "Total limpeza",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "installments",
		title: "Parcelas",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "installmentType",
		title: "Tipo de parcela",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "itemPayer",
		title: "Pagador do item",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "itemCategory",
		title: "Categoria do item",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "itemCostCenter",
		title: "Centro de custo do item",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "itemBaseDocument",
		title: "Documento base do item",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "itemDueDate",
		title: "Data de vencimento do item",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "itemDescription",
		title: "Descrição do item",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "itemAmount",
		title: "Valor do item",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "taxISS",
		title: "ISS",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "taxCSSL",
		title: "CSSL",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "taxPIS",
		title: "PIS",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<ExpenseType>({
		id: "taxCOFINS",
		title: "COFINS",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	})
]

export const defaultValues = Object.fromEntries(
	columnSchema.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<ExpenseType>;

export const facetedFilters = columnSchema.filter((f) => !!f.options) as FacetedFilter[];

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnSchema.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);


export function getFieldsWithOptions() {
	return columnSchema.filter(({ options }) => !!options)as FacetedFilter[];
}

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

