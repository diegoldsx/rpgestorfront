import { Home, Users, DollarSign, Calendar, FileText, Clock, Gift, User, Settings, MessageSquare, Vote, Contact, Mail, LayoutDashboard } from "lucide-react";

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
					{ title: "Remessa", href: "/financial/remittance" },
					{ title: "Retorno", href: "/financial/return" },

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
				href: "/gatherings",
				child: [
					{ title: "Eventos", href: "/gatherings" },
					{ title: "Cursos", href: "/gatherings/courses" },
					{ title: "Categorias", href: "/gatherings/categories" },
					{ title: "Submissões", href: "/gatherings/submissions" },
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
				href: "/content",
				child: [
					{ title: "Conteúdo", href: "/content" },
					{ title: "Tipo", href: "/content/content-type" },
				],
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
					{ title: "Tipos", href: "/partnership/settings/types" },
					{ title: "Desconto", href: "/partnership/settings/discount" },
					{ title: "Pagamento", href: "/partnership/settings/payment" },
					{ title: "Serviço", href: "/partnership/settings/service" },
				],
			},
			{
				title: "Email Marketing",
				icon: Mail,
				child: [
					{ title: "Comunicados", href: "/crm/announcements" },
					{ title: "Mensagens", href: "/crm/messages" },
					{ title: "Grupo", href: "/crm/groups" },
					{ title: "Emails", href: "/crm/emails" },
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
