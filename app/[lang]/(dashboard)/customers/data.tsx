import { faker } from "@faker-js/faker";
import { StateUF } from "@/app/types/StateUF";
import { Customer } from "./types/customer";
import states from "../members/types/StateUF";

const generateCustomer = (): Customer => {
	const isPJ = faker.helpers.arrayElement(["pj", "pf"]) === "pj";

	return {
		id: faker.string.numeric({ length: 6 }),
		customerType: isPJ ? "PJ" : "PF",
		name: faker.person.fullName(),
		cpf: isPJ ? undefined : faker.string.numeric(11),
		email: faker.internet.email().toLowerCase(),
		billingEmail: faker.datatype.boolean()
			? faker.internet.email().toLowerCase()
			: undefined,
		phone: "(55) 5555-55555",
		mobile: "(99) 9999-99999",
		userPassword: faker.internet.password(),
		registrationDate: faker.date.past().toISOString(),
		status: faker.helpers.arrayElement(["ATIVO", "INATIVO", "PENDENTE"]),
		code: faker.string.alphanumeric(6),

		address: {
			zipCode: faker.location.zipCode(),
			street: faker.location.street(),
			number: faker.string.numeric(3),
			complement: faker.datatype.boolean()
				? faker.location.secondaryAddress()
				: undefined,
			neighborhood: faker.location.county(),
			state: faker.helpers.arrayElement(states.map((s) => s.value)) as StateUF,
			city: faker.location.city(),
			phone: "(55) 5555-55555",
			mobile: "(99) 9999-99999",
		},

		companyData: isPJ
			? {
					corporateName: faker.company.name(),
					tradeName: faker.company.buzzPhrase(),
					cnpj: faker.string.numeric(14), // CNPJ apenas para PJ
					businessSegment: faker.company.buzzAdjective(),
					fullAddress: `${faker.location.street()} - ${faker.location.city()}, ${faker.location.state(
						{ abbreviated: true }
					)}`,
					website: faker.internet.url(),
			  }
			: undefined,

		billingData: {
			name: faker.person.fullName(),
			email: faker.internet.email().toLowerCase(),
			phone: "(55) 5555-55555",
			mobile: "(99) 9999-99999",
		},
	};
};

export const fakeData = (count: number = 10): Customer[] => {
	return Array.from({ length: count }, generateCustomer);
};
