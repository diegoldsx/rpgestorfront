"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type AccountBalance = {
	bank: string;
	balance: number;
};

export type AccountBalanceProps = {
	accountBalance: AccountBalance[];
};

export function AccountBalance({ accountBalance }: AccountBalanceProps) {
	const totalAccounts = accountBalance.length;

	return (
		<Card className="flex flex-col">
			<CardHeader className="border-none">
				<p className="text-sm text-muted-foreground">Existe um total de {totalAccounts} contas ativas.</p>
			</CardHeader>
			<CardContent className="flex-1 space-y-2">
				{accountBalance.map((acc) => (
					<div key={acc.bank} className="flex justify-between text-md font-medium">
						<span>{acc.bank}</span>
						<span className={acc.balance < 0 ? "text-red-600" : "text-green-600"}>
							{acc.balance.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
						</span>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
