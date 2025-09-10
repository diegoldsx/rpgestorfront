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

export const menusConfig: any = {
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
				href: "/finance/incomes",
				child: [
					{ title: "Receita", href: "/finance/incomes" },
					{ title: "Despesa", href: "/finance/expenses" },
					{ title: "Provisionamento", href: "/finance/provisions" },
					{ title: "Parcela por Grupo", href: "/finance/installments" },
					{ title: "Transferência", href: "/finance/transfer" },
					{ title: "Remessa", href: "/finance/remittances" },
					{ title: "Retornos", href: "/finance/return" },
					{ title: "Importar", href: "#" },
					{ title: "Balancete", href: "#" },
					{ title: "Fluxo de Caixa", href: "#" },
					{ title: "Centro de Custo", href: "#" },
				],
			},
			{
				title: "Atendimento",
				icon: MessageSquare,

				child: [{ title: "Agendamento", href: "/service-desk" }],
			},
			{
				title: "Eventos",
				icon: Calendar,
				href: "/events/courses",
				child: [
					{ title: "Eventos", href: "/events" },
					{ title: "Cursos", href: "/events/courses" },
					{ title: "Categorias", href: "/events/categories" },
					{ title: "Submissões", href: "/events/submissions" },
				],
			},
			{
				title: "Assembléia",
				icon: Vote,
				href: "/assemblies",
			},
			{
				title: "Conteúdo",
				icon: FileText,
				child: [{ title: "Tipo", href: "/content/content-type" }, { title: "Conteúdo", href: "/content" }],
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
					{ title: "Convênios", href: "/partnership" },
					{ title: "Tipos", href: "/partnership/settings/partnershipType" },
					{ title: "Desconto", href: "/partnership/settings/discount" },
					{ title: "Pagamento", href: "/partnership/settings/payment" },
					{ title: "Serviço", href: "/partnership/settings/service" },
				],
			},
			{
				title: "Email Marketing",
				icon: Mail,
				child: [
					{ title: "Mensagens", href: "/email-marketing/messages" },
					{ title: "Grupos", href: "/email-marketing/groups" },
					{ title: "Emails", href: "/email-marketing/emails" },
					{ title: "Setor", href: "/email-marketing/sector" },
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
				child: [
					{ title: "Campos Dinâmicos", href: "#" },
					{ title: "Campos Fixos", href: "#" },
					{ title: "Grupo Pagamento", href: "/settings/payment-groups" },
					{ title: "Notificações", href: "#" },
					{ title: "Relatórios", href: "#" },
				],
			},
		],
	},
};
