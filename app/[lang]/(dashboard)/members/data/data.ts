import { faker } from "@faker-js/faker";

import { Member } from "../types/Member";
import { StateUF } from "../types/StateUF";

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

function generateFakeMember(): Member {
	const isCPFMember = faker.datatype.boolean();
	const type = isCPFMember ? "cpf" : "cnpj";

	return {
		id: faker.string.nanoid(5), // Substituindo faker.datatype.uuid()
		email: faker.internet.email().toLocaleLowerCase(),
		phone: faker.phone.number(), // Usando a forma recomendada
		mobile: faker.phone.number(),
		financialStatus: faker.helpers.arrayElement([
			"ativo",
			"inativo",
			"pendente",
		]),
		billingCycle: faker.helpers.arrayElement([
			"mensal",
			"bimestral",
			"trimestral",
			"anual",
		]),
		paymentGroup: faker.helpers.arrayElement(["Grupo Alfa", "Grupo Beta"]),
		paymentMethod: faker.helpers.arrayElement(["pix", "boleto"]),
		password: faker.internet.password(),
		cep: faker.location.zipCode("#####-###"), // Usando faker.location
		street: faker.location.street(),
		number: faker.location.buildingNumber(),
		complement: faker.location.secondaryAddress(),
		neighborhood: faker.location.city(), // Substituindo cityName por city
		state: faker.helpers.arrayElement(stateOptions),
		city: faker.location.city(),
		document:
			type === "cpf" ? faker.string.numeric(11) : faker.string.numeric(14), // Gerando CPF ou CNPJ com dígitos corretos
		type: type,
		name: type === "cpf" ? faker.person.fullName() : undefined,
		birthDate:
			type === "cpf"
				? faker.date
						.birthdate({ min: 18, max: 65, mode: "age" })
						.toISOString()
						.split("T")[0]
				: undefined,
		corporateName: type === "cnpj" ? faker.company.name() : undefined,
		tradeName: type === "cnpj" ? faker.company.name() : undefined,
	};
}

export const generateFakeMembers = (count: number = 10): any[] =>
	Array.from({ length: count }, () => generateFakeMember());
