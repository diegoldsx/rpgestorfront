"use client";

import { ReportPageLayout } from "@/components/common/page/ReportLayout";
import { SimpleTable } from "@/components/common/simple-table";
import { useState } from "react";
import { getAccountReportAction } from "@/app/action/reports/extract"; // Server action
import { Bank, BanksOptions, PaymentMethodOptions, Status } from "@/types/options";
import Select from "@/components/Select";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";

import { reportColumns } from "./columns";

export interface AccountReportData {
	account: string;
	dateType: string;
	paymentMethod: string;
	status: string;
	date: string;
}

export interface AccountReportFilters {
	account: Bank;
	from?: Date | null;
	to?: Date | null;
}

const Page = () => {
	const [data, setData] = useState<AccountReportData[]>([]);
	const [from, setFrom] = useState<Date | null>(null);
	const [to, setTo] = useState<Date | null>(null);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		console.log("Filtros:", Object.fromEntries(formData.entries()));
		const { data, success } = await getAccountReportAction(formData);

		if (!success) {
			throw new Error("Erro ao gerar relatório");
		}
		setData(data as AccountReportData[]);
	};
	return (
		<ReportPageLayout title="Relatórios">
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<Select
					options={PaymentMethodOptions}
					name="paymentMethod"
					label="Forma de Pagamento"
					placeholder="Selecione uma forma de pagamento"
				/>
				<Select options={BanksOptions} name="account" label="Conta" placeholder="Selecione uma conta" />
				<Select options={Status} name="status" label="Situação" placeholder="Selecione uma conta" />

				<div className="flex gap-4">
					<DatePicker label="Data Início" name="from" onDateChange={setFrom} selectedDate={from as Date} />
					<DatePicker label="Data Fim" name="to" onDateChange={setTo} selectedDate={to as Date} />
				</div>
				<Select
					options={[
						{ value: "payment", label: "Pagamento" },
						{ value: "compensation", label: "Compensação" },
					]}
					name="dateType"
					label="Por data de:"
					placeholder="Selecione um tipo de data"
				/>

				<Button type="submit">Gerar relatório</Button>
			</form>

			{data.length > 0 && (
				<div className="mt-6">
					<SimpleTable columns={reportColumns} data={data} />
				</div>
			)}
		</ReportPageLayout>
	);
};

export default Page;
