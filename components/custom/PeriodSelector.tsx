import { useState } from "react";
import { format, subHours, startOfMonth, endOfMonth, subMonths, startOfYear, endOfYear } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "../ui/button";

// Tipagem para os períodos disponíveis
export type Period = "24h" | "monthly" | "yearly";

// Interface para o intervalo de datas
interface DateRange {
	from: Date;
	to: Date;
}

export function PeriodSelector() {
	const [selectedPeriod, setSelectedPeriod] = useState<Period>("monthly");

	// Função para calcular o intervalo de datas com base no período
	const getDateRange = (): DateRange => {
		const now = new Date("2025-08-19T11:12:00-03:00"); // Data atual fornecida
		switch (selectedPeriod) {
			case "24h":
				return { from: subHours(now, 24), to: now };
			case "monthly":
				return { from: startOfMonth(subMonths(now, 11)), to: endOfMonth(now) };
			case "yearly":
				return { from: startOfYear(subMonths(now, 36)), to: endOfYear(now) };
			default:
				return { from: startOfMonth(subMonths(now, 11)), to: endOfMonth(now) };
		}
	};

	const { from, to } = getDateRange();

	// Formata o intervalo para exibição
	const formattedRange = `${format(from, "dd/MM/yyyy HH:mm", { locale: ptBR })} - ${format(to, "dd/MM/yyyy HH:mm", {
		locale: ptBR,
	})}`;

	return (
		<div className="p-4 bg-white rounded-none   shadow-md">
			<div className="flex rounded-none  mb-4">
				<Button
					variant="ghost"
					className={`px-4 py-2 rounded-none  ${
						selectedPeriod === "24h" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-800"
					}`}
					onClick={() => setSelectedPeriod("24h")}
				>
					24h
				</Button>
				<Button
					variant="ghost"
					className={`px-4 py-2 rounded-none   ${
						selectedPeriod === "monthly" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-800"
					}`}
					onClick={() => setSelectedPeriod("monthly")}
				>
					Mês
				</Button>
				<Button
					variant="ghost"
					className={`px-4 py-2 rounded-none ${
						selectedPeriod === "yearly" ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-800"
					}`}
					onClick={() => setSelectedPeriod("yearly")}
				>
					Ano
				</Button>
			</div>
		</div>
	);
}
