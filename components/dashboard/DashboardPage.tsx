"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Users,
	DollarSign,
	Calendar,
	TrendingDown,
	Activity,
	BarChart3
} from "lucide-react";
import { FinancialBalanceDonuts } from "@/components/charts/FinancialBalanceChart";
import { IncomesXExpensesChart } from "@/components/charts/IncomesXExpensesChart";
import { MembersStatsChart } from "@/components/charts/MemberStatsChart";

export default function DashboardPage() {
	const [stats, setStats] = useState({
		totalMembers: 0,
		activeMembers: 0,
		totalRevenue: 0,
		totalExpenses: 0,
		pendingPayments: 0,
		upcomingEvents: 0,
	});

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simular carregamento de dados
		const loadDashboardData = async () => {
			try {
				// Aqui você faria as chamadas para as APIs
				setStats({
					totalMembers: 1250,
					activeMembers: 1180,
					totalRevenue: 45680.50,
					totalExpenses: 32150.75,
					pendingPayments: 45,
					upcomingEvents: 8,
				});
			} catch (error) {
				console.error("Erro ao carregar dados do dashboard:", error);
			} finally {
				setLoading(false);
			}
		};

		loadDashboardData();
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
			</div>
		);
	}



	return (
		<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
				<div className="flex items-center space-x-2">
					<Button variant="outline" size="sm">
						<BarChart3 className="mr-2 h-4 w-4" />
						Relatórios
					</Button>
				</div>
			</div>

			{/* Cards de Estatísticas */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total de Membros</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stats.totalMembers.toLocaleString()}</div>
						<p className="text-xs text-muted-foreground">
							{stats.activeMembers} ativos
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Receitas</CardTitle>
						<DollarSign className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							R$ {stats.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
						</div>
						<p className="text-xs text-muted-foreground">Este mês</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Despesas</CardTitle>
						<TrendingDown className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							R$ {stats.totalExpenses.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
						</div>
						<p className="text-xs text-muted-foreground">Este mês</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Pagamentos Pendentes</CardTitle>
						<Activity className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{stats.pendingPayments}</div>
						<p className="text-xs text-muted-foreground">Aguardando confirmação</p>
					</CardContent>
				</Card>
			</div>

			{/* Gráficos e Atividades */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Receitas vs Despesas</CardTitle>
						<CardDescription>
							Comparativo mensal dos últimos 12 meses
						</CardDescription>
					</CardHeader>
					<CardContent className="pl-2">
						<IncomesXExpensesChart />
					</CardContent>
				</Card>

				<Card className="col-span-3">
					<CardHeader>
						<CardTitle>Atividades Recentes</CardTitle>
						<CardDescription>
							Últimas ações no sistema
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
									<Users className="h-4 w-4 text-blue-600" />
								</div>
								<div className="flex-1">
									<p className="text-sm font-medium">João Silva</p>
									<p className="text-xs text-muted-foreground">pagou mensalidade - R$ 150,00</p>
								</div>
								<Badge variant="outline" className="text-xs">30 min</Badge>
							</div>

							<div className="flex items-center space-x-3">
								<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
									<Users className="h-4 w-4 text-green-600" />
								</div>
								<div className="flex-1">
									<p className="text-sm font-medium">Maria Oliveira</p>
									<p className="text-xs text-muted-foreground">se cadastrou no sistema</p>
								</div>
								<Badge variant="outline" className="text-xs">2h</Badge>
							</div>

							<div className="flex items-center space-x-3">
								<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
									<Calendar className="h-4 w-4 text-purple-600" />
								</div>
								<div className="flex-1">
									<p className="text-sm font-medium">Carlos Santos</p>
									<p className="text-xs text-muted-foreground">confirmou presença no evento</p>
								</div>
								<Badge variant="outline" className="text-xs">4h</Badge>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Ações Rápidas e Mais Gráficos */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Visão Geral Financeira</CardTitle>
						<CardDescription>
							Balanço financeiro detalhado
						</CardDescription>
					</CardHeader>
					<CardContent className="pl-2">
						<FinancialBalanceDonuts />
					</CardContent>
				</Card>

				<Card className="col-span-3">
					<CardHeader>
						<CardTitle>Ações Rápidas</CardTitle>
						<CardDescription>
							Atalhos para tarefas comuns
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-3">
							<Button variant="outline" className="h-auto p-4 justify-start">
								<div className="flex items-center space-x-3 w-full">
									<div className="p-2 rounded-md bg-blue-500">
										<Users className="h-4 w-4 text-white" />
									</div>
									<div className="text-left">
										<div className="font-medium text-sm">Novo Membro</div>
										<div className="text-xs text-muted-foreground">Cadastrar novo associado</div>
									</div>
								</div>
							</Button>

							<Button variant="outline" className="h-auto p-4 justify-start">
								<div className="flex items-center space-x-3 w-full">
									<div className="p-2 rounded-md bg-green-500">
										<DollarSign className="h-4 w-4 text-white" />
									</div>
									<div className="text-left">
										<div className="font-medium text-sm">Registrar Pagamento</div>
										<div className="text-xs text-muted-foreground">Lançar nova receita</div>
									</div>
								</div>
							</Button>

							<Button variant="outline" className="h-auto p-4 justify-start">
								<div className="flex items-center space-x-3 w-full">
									<div className="p-2 rounded-md bg-purple-500">
										<Calendar className="h-4 w-4 text-white" />
									</div>
									<div className="text-left">
										<div className="font-medium text-sm">Criar Evento</div>
										<div className="text-xs text-muted-foreground">Agendar novo evento</div>
									</div>
								</div>
							</Button>

							<Button variant="outline" className="h-auto p-4 justify-start">
								<div className="flex items-center space-x-3 w-full">
									<div className="p-2 rounded-md bg-orange-500">
										<BarChart3 className="h-4 w-4 text-white" />
									</div>
									<div className="text-left">
										<div className="font-medium text-sm">Gerar Relatório</div>
										<div className="text-xs text-muted-foreground">Relatórios financeiros</div>
									</div>
								</div>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Estatísticas de Membros e Eventos */}
			<div className="grid gap-4 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Status dos Membros</CardTitle>
						<CardDescription>
							Distribuição por status de atividade
						</CardDescription>
					</CardHeader>
					<CardContent className="pl-2">
						<MembersStatsChart
							total={1250}
							series={[150, 200, 180, 120, 100, 80]}
							categories={["SP", "RJ", "MG", "RS", "PR", "SC"]}
							regionData={[
								{ region: "São Paulo", total: 150 },
								{ region: "Rio de Janeiro", total: 200 },
								{ region: "Minas Gerais", total: 180 },
								{ region: "Rio Grande do Sul", total: 120 },
								{ region: "Paraná", total: 100 },
								{ region: "Santa Catarina", total: 80 }
							]}
						/>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Próximos Eventos</CardTitle>
						<CardDescription>
							Eventos agendados para os próximos 30 dias
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<Calendar className="h-4 w-4 text-muted-foreground" />
									<div>
										<p className="text-sm font-medium">Assembleia Geral</p>
										<p className="text-xs text-muted-foreground">15 Dez 2024</p>
									</div>
								</div>
								<Badge variant="outline">Próximo</Badge>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<Calendar className="h-4 w-4 text-muted-foreground" />
									<div>
										<p className="text-sm font-medium">Reunião do Conselho</p>
										<p className="text-xs text-muted-foreground">20 Dez 2024</p>
									</div>
								</div>
								<Badge variant="outline">Agendado</Badge>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<Calendar className="h-4 w-4 text-muted-foreground" />
									<div>
										<p className="text-sm font-medium">Festa de Fim de Ano</p>
										<p className="text-xs text-muted-foreground">22 Dez 2024</p>
									</div>
								</div>
								<Badge variant="outline">Agendado</Badge>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}