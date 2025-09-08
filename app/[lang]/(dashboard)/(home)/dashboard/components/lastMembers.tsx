import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const lastMembersData = [
	{ id: 1, name: "MED MAIS SOLUCOES EM SERVICOS ESPECIAIS LTDA", date: "23/05/2025 16:39" },
	{ id: 2, name: "BR VIDA - ATENDIMENTO PRE-HOSPITALAR S/S", date: "21/05/2025 15:49" },
	{ id: 3, name: "MEBI SERVICOS DE APOIO ADMINISTRATIVO LTDA", date: "28/04/2025 17:02" },
	{ id: 4, name: "VACINEMAIS CLINICA DE VACINACAO LTDA.", date: "25/04/2025 15:30" },
	{ id: 5, name: "PEOPLE CONNECT", date: "22/04/2025 16:59" },
];
export function LastMembers() {
	return (
		<Card className="bg-white border-gray-200 h-full flex flex-col">
			<CardHeader>
				<CardTitle>Últimos Associados</CardTitle>
			</CardHeader>

			<CardContent className="flex-1 p-2 flex flex-col overflow-hidden">
				<div className="flex-1 overflow-auto space-y-2 pr-2">
					{lastMembersData.map((m) => (
						<div key={m.id} className="flex items-start justify-between gap-3 py-1">
							<div className="flex items-start gap-3 min-w-0 flex-1">
								<Badge className="min-w-[24px] h-5 !p-0 flex items-center justify-center rounded-sm bg-blue-500 text-white text-[11px]">
									{m.id}
								</Badge>

								<div className="min-w-0 flex-1">
									<div className="text-[12px] font-medium text-blue-600 truncate" title={m.name} aria-label={m.name}>
										{m.name}
									</div>
								</div>
							</div>

							<div className="text-[11px] text-gray-500 whitespace-nowrap">{m.date}</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
