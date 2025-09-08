import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LastEvents() {
	const events = [
		{ title: "Evento A", expense: "R$ 100", profit: "R$ 90" },
		{ title: "Evento B", expense: "R$ 100", profit: "R$ 90" },
		{ title: "Evento C", expense: "R$ 100", profit: "R$ 90" },
		{ title: "Evento D", expense: "R$ 100", profit: "R$ 90" },
	];

	return (
		<Card className="bg-white border-gray-200">
			<CardHeader>
				<CardTitle>Últimos eventos</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="">
					<div className="grid grid-cols-3 gap-4 font-semibold text-sm text-gray-600 border-b border-gray-100 pb-2">
						<div>Título</div>
						<div>Gasto</div>
						<div>Lucro</div>
					</div>

					{events.map((event, index) => (
						<div key={index} className="grid grid-cols-3 gap-4 items-center py-2">
							<div className="text-sm font-medium">{event.title}</div>
							<div>
								<Badge color="destructive" className="bg-red-500 text-white border-red-500 rounded-md">
									{event.expense}
								</Badge>
							</div>
							<div>
								<Badge color="info" className="bg-blue-500 text-white border-blue-500 rounded-md">
									{event.profit}
								</Badge>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
