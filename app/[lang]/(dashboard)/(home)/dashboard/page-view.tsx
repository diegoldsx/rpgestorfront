"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportsSnapshot from "./components/reports-snapshot";

import UserStats from "./components/user-stats-chart";
import AssociadosStat from "./components/associados-stat";
import ReportsArea from "./components/reports-area";
import DashboardSelect from "@/components/dasboard-select";

import DatePickerWithRange from "@/components/date-picker-with-range";
import TipoAssociadoReport from "./components/tipo-associado-report";
import UltimosEventos from "./components/ultimos-eventos";
import UltimosComunicados from "./components/ultimos-comunicados";
import AssociadosMap from "./components/associados-map";
import CountryMap from "./components/country-map";

interface DashboardPageViewProps {
	trans: {
		[key: string]: string;
	};
}

const DashboardPageView = ({ trans }: DashboardPageViewProps) => {
	return (
		<div className="space-y-6">
			OIOIOIOI
			{/* <div className='flex items-center flex-wrap justify-between gap-4'>
				<div className='text-2xl font-medium text-default-800 '>
					RPGestor {trans?.dashboard}
				</div>
				<DatePickerWithRange />
			</div> */}
			{/* Área de métricas principais */}
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-8">
					<ReportsSnapshot /> {/* Adaptado para mostrar receitas x despesas */}
				</div>
				<div className="col-span-12 lg:col-span-4">
					<AssociadosStat /> {/* Métricas de associados */}
				</div>
			</div>
			{/* Métricas secundárias */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<ReportsArea /> {/* Indicadores financeiros */}
				</div>
				<Card>
					<CardHeader className="border-none p-6 pt-5 mb-0">
						<CardTitle className="text-lg font-semibold text-default-900 p-0">Status dos Associados</CardTitle>
					</CardHeader>
					<CardContent>
						<UserStats />
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="border-none p-6 pt-5 mb-0">
						<CardTitle className="text-lg font-semibold text-default-900 p-0">Tipos de Associado</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="dashtail-legend">
							<TipoAssociadoReport />
						</div>
					</CardContent>
				</Card>
			</div>
			{/* Mapa de associados */}
			{/* <div className='col-span-2'>
				<Card>
					<CardHeader className='border-none pb-0'>
						<div className='flex flex-wrap items-center gap-2'>
							<div className='flex-1 text-xl font-semibold text-default-900 whitespace-nowrap'>
								Associados por Região
							</div>
							<div className='flex-none'>
								<DashboardSelect />
							</div>
						</div>
					</CardHeader>
					<CardContent className='px-5 pb-0'>
						<CountryMap />
					</CardContent>
				</Card>
			</div> */}
			{/* Últimas atividades */}
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-4">
					<UltimosEventos />
				</div>
				<div className="col-span-12 lg:col-span-8">
					<Card>
						<CardHeader className="border-none pb-0">
							<CardTitle className="pt-2.5">Últimos Comunicados</CardTitle>
						</CardHeader>
						<CardContent className="px-0">
							<UltimosComunicados />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default DashboardPageView;
