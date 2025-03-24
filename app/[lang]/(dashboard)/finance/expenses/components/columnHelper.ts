import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { ExpenseSchemaType } from "@/types/finance/expense";

const field = (id: keyof ExpenseSchemaType, title: string, options?: any) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<ExpenseSchemaType>[] = [
	field("id", "ID"),
	field("payer", "Pagador"),
	field("competenceDate", "Data de competência"),
	field("dueDate", "Data de vencimento"),
	field("costCenter", "Centro de custo"),
	field("category", "Categoria"),
	field("paymentMethod", "Método de pagamento"),
	field("baseDocument", "Documento"),
	field("account", "Conta"),
	field("tax", "Imposto"),
	field("amount", "Valor"),
	field("description", "Descrição"),
	field("observations", "Observações"),
	field("status", "Status", [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	]),
	field("paymentDate", "Data de pagamento"),
	field("paymentClearingDate", "Data de compensação"),
	field("discounts", "Descontos"),
	field("addition", "Adições"),
	field("totalPaid", "Total pago"),
	field("totalClearing", "Total compensado"),
	field("installments", "Parcelas"),
	field("installmentType", "Tipo de parcela"),
	field("itemPayer", "Pagador do item"),
	field("itemCategory", "Categoria do item"),
	field("itemCostCenter", "Centro de custo do item"),
	field("itemBaseDocument", "Documento do item"),
	field("itemDueDate", "Data de vencimento do item"),
	field("itemDescription", "Descrição do item"),
	field("itemAmount", "Valor do item"),
	field("taxISS", "ISS"),
	field("taxCSSL", "CSSL"),
	field("taxPIS", "PIS"),
	field("taxCONFINS", "CONFINS"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<ExpenseSchemaType>;

export const expenseFacetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const expenseVisibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);
