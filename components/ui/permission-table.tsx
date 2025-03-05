import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const permissions = [
	{ value: "financial", label: "Financeiro" },
	{ value: "announcements", label: "Comunicados" },
	{ value: "support", label: "Atendimento" },
	{ value: "user", label: "Usuário" },
	{ value: "event", label: "Evento" },
	{ value: "schedule", label: "Agenda" },
	{ value: "memberAccess", label: "Acesso do Associado" },
	{ value: "client", label: "Cliente" },
	{ value: "votingAssembly", label: "Votação / Assembléia" },
	{ value: "settings", label: "Configurações" },
];

export default function PermissionsTable() {
	return (
		<Card className="max-w-4xl mx-auto">
			<CardContent className="p-4">
				<h2 className="text-xl font-semibold mb-4">Permissões</h2>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="text-left">Permissão</TableHead>
							<TableHead className="text-center">Ler</TableHead>
							<TableHead className="text-center">Editar</TableHead>
							<TableHead className="text-center">Admin</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{permissions.map((perm, i) => (
							<TableRow key={perm.value} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
								<TableCell>{perm.label}</TableCell>
								{["read", "edit", "admin"].map((permType) => (
									<TableCell key={permType} className="text-center">
										<Checkbox />
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
