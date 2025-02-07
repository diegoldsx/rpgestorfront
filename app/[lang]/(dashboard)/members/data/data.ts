import { faker } from "@faker-js/faker";
import { Status } from "../types/Status";
import { BillingCycle } from "../types/BillingCycle";
import { Address } from "../types/Address";
import { Member } from "../types/Member";
import { StateUF } from "../types/StateUF";

const statusOptions: Status[] = ["ATIVO", "INATIVO", "PENDENTE"];
const billingCycleOptions: BillingCycle[] = [
	"MENSAL",
	"BIMESTRAL",
	"TRIMESTRAL",
	"ANUAL",
];
const stateOptions: StateUF[] = [
	"AC",
	"AL",
	"AP",
	"AM",
	"BA",
	"CE",
	"DF",
	"ES",
	"GO",
	"MA",
	"MT",
	"MS",
	"MG",
	"PA",
	"PB",
	"PR",
	"PE",
	"PI",
	"RJ",
	"RN",
	"RS",
	"RO",
	"RR",
	"SC",
	"SP",
	"SE",
	"TO",
];

const generateFakeAddress = (): Address => ({
	zipCode: faker.location.zipCode(),
	street: faker.location.streetAddress(),
	number: faker.string.numeric(3),
	complement: faker.helpers.maybe(() => faker.location.secondaryAddress()),
	neighborhood: faker.location.city(),
	city: faker.location.city(),
	state: faker.helpers.arrayElement(stateOptions),
});

const generateFakeSocialMedia = () => ({
	instagram: faker.helpers.maybe(() => faker.internet.url()),
	facebook: faker.helpers.maybe(() => faker.internet.url()),
	linkedIn: faker.helpers.maybe(() => faker.internet.url()),
});

const generateFakeMember = (): Member => {
	const isIndividual = faker.datatype.boolean();
	return {
		id: faker.string.numeric(4),
		type: isIndividual ? "CPF" : "CNPJ",
		status: faker.helpers.arrayElement(statusOptions),
		code: faker.string.numeric(6),
		document: isIndividual
			? faker.string.numeric(11)
			: faker.string.numeric(14),
		corporateName: isIndividual ? null : faker.company.name(),
		tradeName: isIndividual ? null : faker.company.name(),
		name: isIndividual ? faker.person.fullName() : null,
		birthDate: isIndividual
			? faker.date.birthdate({ min: 18, max: 65, mode: "age" })
			: null,
		email: faker.internet.email().toLocaleLowerCase(),
		paymentGroup: faker.company.name(),
		billingCycle: faker.helpers.arrayElement(billingCycleOptions),
		automaticBilling: faker.datatype.boolean(),
		phone: faker.phone.number(),
		mobile: faker.phone.number(),
		linkedTo: faker.helpers.maybe(() => faker.person.fullName()),
		billingAmount: faker.string.numeric(3),
		password: faker.internet.password(),
		stateRegistration: isIndividual
			? null
			: faker.helpers.maybe(() => faker.string.numeric(9)),
		municipalRegistration: isIndividual
			? null
			: faker.helpers.maybe(() => faker.string.numeric(9)),
		billingEmail: isIndividual
			? null
			: faker.helpers.maybe(() => faker.internet.email()),
		website: isIndividual
			? null
			: faker.helpers.maybe(() => faker.internet.url()),
		socialMedia: generateFakeSocialMedia(),
		address: generateFakeAddress(),
	};
};

export const generateFakeMembers = (count: number = 10): Member[] =>
	Array.from({ length: count }, () => generateFakeMember());

export const statuses = [
	{
		value: "ACTIVE",
		label: "Ativo",
		icon: "heroicons:check-circle",
	},
	{
		value: "INACTIVE",
		label: "Inativo",
		icon: "heroicons:x-circle",
	},
];

export const states = [
	"AC",
	"AL",
	"AP",
	"AM",
	"BA",
	"CE",
	"DF",
	"ES",
	"GO",
	"MA",
	"MT",
	"MS",
	"MG",
	"PA",
	"PB",
	"PR",
	"PE",
	"PI",
	"RJ",
	"RN",
	"RS",
	"RO",
	"RR",
	"SC",
	"SP",
	"SE",
	"TO",
].map((state) => ({
	value: state,
	label: state,
}));
