"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { PageLayout } from "@/components/common/page/PageLayout";
import { SimpleTable } from "@/components/common/simple-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Dados mockados
const mockData =
	{ ativo: 42, inativo: 5, pendente: 1, total: 48 }
	;

interface MemberReportData {
	ativo: number;
	inativo: number;
	pendente: number;
	total: number
}


// Colunas da tabela
const columns: ColumnDef<MemberReportData>[] = [
	{
		accessorKey: "ativo",
		header: "Ativo",
	},
	{
		accessorKey: "inativo",
		header: "Inativo",
	},
	{
		accessorKey: "pendente",
		header: "Pendente",
	},

];



const Page = () => {
	const [data, setData] = useState<MemberReportData>();

	const handleGenerateReport = () => {
		setData(mockData);
	};

	return (
		<PageLayout title="Relatório por Grupo">
			<div className="space-y-4">
				<Button onClick={handleGenerateReport}>
					Gerar Relatório
				</Button>

				{data && (
					<Card className="p-2">
						<CardContent >
							<SimpleTable data={[data]} columns={columns} />

						</CardContent>
						<CardFooter>
							<p>Total: {mockData.total}</p>

						</CardFooter>
					</Card>

				)}
			</div>
		</PageLayout>
	);
};

export default Page;
