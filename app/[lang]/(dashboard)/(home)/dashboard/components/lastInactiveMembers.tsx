import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const lastInactivatedData = [
	{ id: 1, name: "UNIAO OESTE PARAN DE ESTUDOS E COMBATE AO CANCER", date: "10/06/2025 11:59" },
	{ id: 2, name: "CERVC - CENTRO ESPECIALIZADO EM RETINA E VITREO DE CURITIBA S/S LTDA", date: "09/06/2025 08:25" },
	{ id: 3, name: "ASSOC HOSP BENEF MOACIR MICHELETTO DE ASSIS CHATEAUBRIAND-PR", date: "06/06/2025 17:07" },
	{ id: 4, name: "CENTRO DE ALERGIA E RINITE DO IPO LTDA", date: "06/06/2025 12:19" },
	{ id: 5, name: "HOSPITAL XV", date: "06/06/2025 12:08" },
];

export function LastInactiveMembers() {
	return (
		<Card className="bg-white border-gray-200">
			<CardHeader>
				<CardTitle>Últimos Inativados</CardTitle>
			</CardHeader>

			<CardContent>
				<div className="space-y-2">
					{lastInactivatedData.map((m) => (
						<div key={m.id} className="flex items-start justify-between gap-3 py-1">
							<div className="flex items-start gap-3 min-w-0 flex-1">
								<Badge className="min-w-[24px] h-5 !p-0 flex items-center justify-center rounded-sm bg-sky-500 text-white text-[11px]">
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
