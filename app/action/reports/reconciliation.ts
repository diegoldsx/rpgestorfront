"use server";

import { formatTime } from "@/app/lib/utils";
import { formatDate } from "@/lib/utils";
import { PaymentMethodOptions } from "@/types/options";

export async function getReconciliationReportAction(formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const mock = [
		{
			account: "caixa",
			paymentMethod: PaymentMethodOptions[0].value,
			dateType: "compensation",
			status: "active",
			date: "2023-03-01T00:00:00",
		},
		{
			account: "bradesco",
			paymentMethod: PaymentMethodOptions[0].value,
			dateType: "compensation",
			status: "active",
			date: "2023-03-01T00:00:00",
		},
	];
	return {
		success: mock || false,
		message: "Relatório gerado com sucesso!",
		data: [
			{
				account: "caixa",
				paymentMethod: PaymentMethodOptions[0].value,
				dateType: "compensation",
				status: "active",
				date: "2023-03-01T00:00:00",
			},
			{
				account: "bradesco",
				paymentMethod: PaymentMethodOptions[0].value,
				dateType: "compensation",
				status: "active",
				date: "2023-03-01T00:00:00",
			},
		],
	};
}
