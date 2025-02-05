import { Member } from '../components/members-list-table/columns';

export const data: Member[] = [
	{
		id: 1,
		name: 'Carlos Silva',
		cnpj: '12.345.678/0001-90',
		cpf: '123.456.789-00',
		paymentGroup: 'Grupo 1',
		financialStatus: 'Regular',
		registrationStatus: 'Ativo',
		status: 'ACTIVE',
	},
	{
		id: 2,
		name: 'João Carlos',
		cnpj: '',
		cpf: '123.456.789-00',
		paymentGroup: 'Grupo 1',
		financialStatus: 'Regular',
		registrationStatus: 'Ativo',
		status: 'ACTIVE',
	},
	{
		id: 3,
		name: 'Carlos João',
		cnpj: '12.345.678/0001-90',
		cpf: '123.456.789-00',
		paymentGroup: 'Grupo 1',
		financialStatus: 'Regular',
		registrationStatus: 'Ativo',
		status: 'ACTIVE',
	},
];

// Opções de status para filtros
export const statuses = [
	{
		value: 'ACTIVE',
		label: 'Ativo',
		icon: 'heroicons:check-circle',
	},
	{
		value: 'INACTIVE',
		label: 'Inativo',
		icon: 'heroicons:x-circle',
	},
];

// Estados brasileiros para filtros
export const states = [
	'AC',
	'AL',
	'AP',
	'AM',
	'BA',
	'CE',
	'DF',
	'ES',
	'GO',
	'MA',
	'MT',
	'MS',
	'MG',
	'PA',
	'PB',
	'PR',
	'PE',
	'PI',
	'RJ',
	'RN',
	'RS',
	'RO',
	'RR',
	'SC',
	'SP',
	'SE',
	'TO',
].map((state) => ({
	value: state,
	label: state,
}));
