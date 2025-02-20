import {
	Home,
	Users,
	DollarSign,
	Calendar,
	FileText,
	Clock,
	Gift,
	User,
	Settings,
	MessageSquare,
	Vote,
	Contact,
	Mail,
	LayoutDashboard,
} from "lucide-react";

export const menusConfig = {
	sidebarNav: {
		classic: [
			{
				title: "Dashboard",
				icon: LayoutDashboard,
				href: "/dashboard",
			},
			{
				title: "Associados",
				icon: Contact,
				child: [
					{ title: "Associados", href: "/members" },
					{
						title: "Relatório Ocorrência",
						href: "/members",
					},
					{
						title: "Relatório Grupo",
						href: "/members",
					},
					{ title: "Relatórios Dinâmicos", href: "#" },
					{ title: "Grupo Pagamento", href: "#" },
				],
			},
			{
				title: "Clientes",
				icon: Users,
				href: "/customers",
			},
			{
				title: "Financeiro",
				icon: DollarSign,
				href: "/financial/income",
				child: [
					{ title: "Receita", href: "/financial/income" },
					{ title: "Despesa", href: "/financial/expense" },
					{ title: "Provisionamento", href: "/financial/provision" },
					{ title: "Parcela por Grupo", href: "#" },
					{ title: "Transferência", href: "/financial/transfer" },
					{ title: "Conciliação", href: "#" },
					{ title: "Importar", href: "#" },
					{ title: "Balancete", href: "#" },
					{ title: "Fluxo de Caixa", href: "#" },
					{ title: "Centro de Custo", href: "#" },
				],
			},
			{
				title: "Atendimento",
				icon: MessageSquare,
				child: [
					{ title: "Agendamento", href: "#" },
					{ title: "Eventos", href: "#" },
					{ title: "Local", href: "#" },
				],
			},
			{
				title: "Eventos",
				icon: Calendar,
				href: "/events/calendar",
				child: [
					{ title: "Eventos", href: "/events/calendar" },
					{ title: "Cursos", href: "#" },
					{ title: "Certificados", href: "#" },
					{ title: "Submissões", href: "#" },
				],
			},
			{
				title: "Assembleia",
				icon: Vote,
				href: "/assemblies",
			},
			{
				title: "Conteúdo",
				icon: FileText,
				href: "#",
			},
			{
				title: "Agenda",
				icon: Clock,
				child: [
					{ title: "Agenda", href: "#" },
					{ title: "Presença", href: "#" },
					{ title: "Telefones", href: "#" },
				],
			},
			{
				title: "Convênios",
				icon: Gift,
				child: [
					{ title: "Convênios", href: "#" },
					{ title: "Consultar", href: "#" },
					{ title: "Indicação", href: "#" },
					{
						title: "Relatório Utilização",
						href: "#",
					},
					{ title: "Configurações", href: "#" },
				],
			},
			{
				title: "Email Marketing",
				icon: Mail,
				child: [
					{ title: "Mensagens", href: "#" },
					{ title: "Grupos", href: "#" },
					{ title: "Emails", href: "#" },
					{ title: "Importar", href: "#" },
				],
			},
			{
				title: "Usuários",
				icon: User,
				href: "/users",
			},
			{
				title: "Configurações",
				icon: Settings,
				href: "/settings",
				// child: [
				// 	{ title: 'Campos Dinâmicos', href: '#' },
				// 	{ title: 'Campos Fixos', href: '#' },
				// 	{ title: 'Grupo Pagamento', href: '#' },
				// 	{ title: 'Notificações', href: '#' },
				// 	{ title: 'Relatórios', href: '#' },
				// ],
			},
		],
	},
};
