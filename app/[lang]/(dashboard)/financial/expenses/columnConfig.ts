import { ColumnDef, VisibilityState } from "@tanstack/react-table";
import { Submission } from "@/types/event/submission";
import { FieldConfig } from "@/app/types/FieldConfig";
import { SubmissionSchemaType } from "@/schemas/events/submission";
import { ExpenseSchemaType } from "@/schemas/finance/expense";

export const options = {
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

const fieldTypes: Partial<
	Record<keyof Submission, "text" | "number" | "date" | "select">
> = {
	status: "select",
};

// Configuração dinâmica das colunas
export const columnConfig: FieldConfig<ExpenseSchemaType>[] = [
	{ id: "id", title: "ID", defaultValue: "" },
	{ id: "payer", title: "Pagador", defaultValue: "" },
	{ id: "competenceDate", title: "Data de competência", defaultValue: "" },
	{ id: "dueDate", title: "Data de vencimento", defaultValue: "" },
	{ id: "costCenter", title: "Centro de custo", defaultValue: "" },
	{ id: "category", title: "Categoria", defaultValue: "" },
	{ id: "paymentMethod", title: "Método de pagamento", defaultValue: "" },
	{ id: "baseDocument", title: "Documento", defaultValue: "" },
	{ id: "account", title: "Conta", defaultValue: "" },
	{ id: "tax", title: "Imposto", defaultValue: "" },
	{ id: "amount", title: "Valor", defaultValue: "" },
	{ id: "description", title: "Descrição", defaultValue: "" },
	{ id: "observations", title: "Observações", defaultValue: "" },
	{ id: "status", title: "Status", defaultValue: "" },
	{ id: "paymentDate", title: "Data de pagamento", defaultValue: "" },
	{ id: "paymentClearingDate", title: "Data de compensação", defaultValue: "" },
	{ id: "discounts", title: "Descontos", defaultValue: "" },
	{ id: "addition", title: "Adições", defaultValue: "" },
	{ id: "totalPaid", title: "Total pago", defaultValue: "" },
	{ id: "totalClearing", title: "Total compensado", defaultValue: "" },
	{ id: "installments", title: "Parcelas", defaultValue: "" },
	{ id: "installmentType", title: "Tipo de parcela", defaultValue: "" },
	{ id: "itemPayer", title: "Pagador do item", defaultValue: "" },
	{ id: "itemCategory", title: "Categoria do item", defaultValue: "" },
	{ id: "itemCostCenter", title: "Centro de custo do item", defaultValue: "" },
	{ id: "itemBaseDocument", title: "Documento do item", defaultValue: "" },
	{ id: "itemDueDate", title: "Data de vencimento do item", defaultValue: "" },
	{ id: "itemDescription", title: "Descrição do item", defaultValue: "" },
	{ id: "itemAmount", title: "Valor do item", defaultValue: "" },
	{ id: "taxISS", title: "ISS", defaultValue: "" },
	{ id: "taxCSSL", title: "CSSL", defaultValue: "" },
	{ id: "taxPIS", title: "PIS", defaultValue: "" },
	{ id: "taxCONFINS", title: "CONFINS", defaultValue: "" },
];

export const defaultValues: Partial<ExpenseSchemaType> = columnConfig.reduce(
	(acc, field) => {
		acc[field.id] =
			field.type === "number"
				? String(field.defaultValue) // Converte números para string
				: field.defaultValue;

		return acc;
	},
	{} as Partial<ExpenseSchemaType>
);

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);
