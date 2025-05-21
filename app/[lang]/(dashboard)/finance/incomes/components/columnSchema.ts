import { Column } from "@/types/columns/ColumnsDefinition";
import { VisibilityState } from "@tanstack/react-table";
import { createColumn } from "@/types/columns/ColumnsDefinition";
import { CostCenterOptions, DiscountTypeOptions, PaymentMethodOptions, Status } from "@/types/options";
import { IncomeType } from "@/types/Income";


export const columnSchema: Array<Column<IncomeType>> = [
	createColumn<IncomeType>({
		id: "id",
		title: "ID",
		type: "id",
		size: 100,
	}),
	createColumn<IncomeType>({
		id: "payer",
		title: "Pagador",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "competenceDate",
		title: "Competência",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "description",
		title: "Descri o",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "dueDate",
		title: "Data vencimento",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "paymentMethod",
		title: "M todo de pagamento",
		type: "select",
		options: PaymentMethodOptions,
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "costCenter",
		title: "Centro de custo",
		type: "select",
		options: CostCenterOptions,
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "category",
		title: "Categoria",
		type: "select",

		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "account",
		title: "Conta",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "taxApplied",
		title: "Taxa",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "value",
		title: "Valor",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "description",
		title: "Descrição",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "observations",
		title: "Observações",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "status",
		title: "Status",
		type: "select",
		options: Status,
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "paidValue",
		title: "Valor pago",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),

	createColumn<IncomeType>({
		id: "discountType",
		title: "Descontos",
		type: "select",
		options: DiscountTypeOptions,
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "discountPercentage",
		title: "Acrescimo",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "discountExpirationDate",
		title: "Total pago",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "discountDescription",
		title: "Total limpeza",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "totalInstallments",
		title: "Parcelas",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "installmentType",
		title: "Tipo de parcela",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "invoiceInstructions",
		title: "Instruções da fatura",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
	createColumn<IncomeType>({
		id: "sampleMessage",
		title: "Mensagem de exemplo",
		type: "text",
		defaultValue: "",
		isVisible: true,
		size: 200,
	}),
]

export const defaultValues = Object.fromEntries(
	columnSchema.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<IncomeType>;

export const facetedFilters = columnSchema.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnSchema.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);


export function getFieldsWithOptions() {
	return columnSchema.filter(({ options }) => !!options);
}

