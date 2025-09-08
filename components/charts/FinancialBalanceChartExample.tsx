"use client";

import { FinancialBalanceDonuts } from "./FinancialBalanceChart";

export default function FinancialBalanceChartExample() {
	// Mock data for demonstration
	const mockData = {
		costCenter: [
			{ chart: { label: "Centro de custo A", value: "cost_center_a" }, income: 15000, expenses: 8500 },
			{ chart: { label: "Centro de custo B", value: "cost_center_b" }, income: 22000, expenses: 12000 },
			{ chart: { label: "Centro de custo C", value: "cost_center_c" }, income: 18000, expenses: 9500 },
			{ chart: { label: "Centro de custo D", value: "cost_center_d" }, income: 12000, expenses: 11000 },
		],
		category: [
			{ chart: { label: "Vendas", value: "sales" }, income: 35000, expenses: 5000 },
			{ chart: { label: "Serviços", value: "services" }, income: 25000, expenses: 15000 },
			{ chart: { label: "Produtos", value: "products" }, income: 15000, expenses: 8000 },
			{ chart: { label: "Outros", value: "others" }, income: 5000, expenses: 2000 },
		],
	};

	return (
		<div className="w-full max-w-4xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-6">Financial Balance Chart - Compacto</h1>
			<div className="h-[280px]">
				<FinancialBalanceDonuts
					data={mockData}
				/>
			</div>
		</div>
	);
}