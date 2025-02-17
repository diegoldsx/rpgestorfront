"use client";

import { Table } from "@tanstack/react-table";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Member } from "../../types/Member";
import { DataTableToggleColumns } from "./data-table-toggle-columns";
import { DataTableFacetedFilter } from "./data-table-faced-filter";
import { DataExporter } from "./data-exporter";

export const paymentGroupOptions = [
	{ value: "Grupo Alfa", label: "Grupo Alfa" },
	{ value: "Grupo Beta", label: "Grupo Beta" },
];

export const billingCycleOptions = [
	{ value: "mensal", label: "Mensal" },
	{ value: "bimestral", label: "Bimestral" },
	{ value: "trimestral", label: "Trimestral" },
	{ value: "anual", label: "Anual" },
];

export const financialStatusOptions = [
	{ value: "ativo", label: "Ativo" },
	{ value: "inativo", label: "Inativo" },
	{ value: "pendente", label: "Pendente" },
];
interface DataTableToolbarProps {
	table: Table<Member>;
}

export function DataTableToolbar({ table }: DataTableToolbarProps) {
	const financialStatusColumn = table.getColumn("financialStatus");
	const billingCycleColumn = table.getColumn("billingCycle");
	const paymentGroupColumn = table.getColumn("paymentGroup");
	const memberTypeColumn = table.getColumn("type");

	return (
		<div className="flex gap-4 p-2">
			<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
				<div className="flex items-center gap-3">
					<span className="text-base font-medium text-default-600">Exibir</span>
					<Select>
						<SelectTrigger className="w-20" size="md" radius="sm">
							<SelectValue placeholder="10" />
						</SelectTrigger>
						<SelectContent className="w-20 min-w-[80px]">
							{[10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="flex-none flex flex-col sm:flex-row sm:items-center gap-4">
				{memberTypeColumn && (
					<DataTableFacetedFilter
						column={memberTypeColumn}
						title="Tipo de cadastro"
						iconName="mdi:tag-text-outline"
						options={[
							{ value: "cnpj", label: "CNPJ" },
							{ value: "cpf", label: "CPF" },
						]}
					/>
				)}
				{financialStatusColumn && (
					<DataTableFacetedFilter
						iconName="mdi:cash-check"
						column={financialStatusColumn}
						title="Status Financeiro"
						options={financialStatusOptions}
					/>
				)}
				{paymentGroupColumn && (
					<DataTableFacetedFilter
						column={paymentGroupColumn}
						title="Grupo de Pagamento"
						iconName="mdi:account-group"
						options={[
							{ value: "Grupo Alfa", label: "Grupo Alfa" },
							{ value: "Grupo Beta", label: "Grupo Beta" },
						]}
					/>
				)}
				{billingCycleColumn && (
					<DataTableFacetedFilter
						column={billingCycleColumn}
						iconName="mdi:calendar-sync-outline"
						title="Ciclo de Cobrança"
						options={billingCycleOptions}
					/>
				)}
				<DataTableToggleColumns table={table} />
				<DataExporter table={table} />
			</div>
		</div>
	);
}
