import { VisibilityState } from "@tanstack/react-table";
import { FieldConfig } from "@/app/types/FieldConfig";
import { IncomeSchemaType } from "@/types/finance/income";

const field = (id: keyof IncomeSchemaType, title: string, options?: any) => ({
	id,
	title,
	defaultValue: "",
	...(options && { options }),
});

export const columnConfig: FieldConfig<IncomeSchemaType>[] = [
	field("id", "ID"),
	field("payer", "Pagador"),
	field("description", "Descrição"),
	field("competenceDate", "Competência"),
	field("dueDate", "Data de vencimento"),
	field("paymentMethod", "Método de pagamento"),
	field("costCenter", "Centro de custo"),
	field("category", "Documento"),
	field("value", "Valor"),
	field("paidValue", "Valor pago"),
	field("discountType", "Tipo desconto"),
	field("discountPercentage", "Percentual de desconto"),
	field("discountExpirationDate", "Desconto expira em:"),
	field("discountDescription", "Descrição do descontos"),
	field("observations", "Observações"),
	field("status", "Situação", [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	]),
	field("totalInstallments", "total de parcelas"),
	field("installmentType", "tipo de parcela"),
	field("invoiceInstructions", "Instruções de boleto"),
	field("sampleMessage", "Mensagem exemplo"),
];

export const defaultValues = Object.fromEntries(
	columnConfig.map(({ id, defaultValue }) => [id, defaultValue])
) as Partial<IncomeSchemaType>;

export const incomeFacetedFilters = columnConfig.filter((f) => !!f.options);

export const visibleColumns: ReadonlyArray<string> = ["*"];
export const incomeVisibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [
		id,
		visibleColumns.includes(id) || visibleColumns[0] === "*",
	])
);
