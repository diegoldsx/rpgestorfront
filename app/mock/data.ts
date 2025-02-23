import { array, int, words } from "./faker";
import { Income } from "../[lang]/(dashboard)/financial/income/types/Income";
import { Expense } from "../[lang]/(dashboard)/financial/expense/types/Expense";
import { Provision } from "../[lang]/(dashboard)/financial/provision/types/Provision";
import { Transfer } from "../[lang]/(dashboard)/financial/transfer/types/Transfer";
import { PaymentGroup } from "../[lang]/(dashboard)/settings/payment-groups/types/PaymentGroup";
import {} from "../[lang]/(dashboard)/financial/remittance/types/Connections";
import { faker } from "@faker-js/faker";

const LENGTH = 30;

export const fake_returns: any[] = Array.from({ length: LENGTH }, () => ({
	id: int(),
	account: array(["CAIXA", "BRADESCO"]),
	file: words(1) + ".doc",
}));

export const fakeRemittances: any[] = Array.from({ length: LENGTH }, () => ({
	id: faker.number.int(),
	bank: faker.helpers.arrayElement(["CAIXA", "BRADESCO"]),
	search: faker.lorem.words(2),
	searchFor: faker.helpers.arrayElement(["code", "name", "cpf", "cnpj"]),
	amount: faker.number.int(),
	startDate: faker.date.future().toISOString().split("T")[0],
	finalDate: faker.date.future().toISOString().split("T")[0],
	dateCategory: faker.helpers.arrayElement(["dueDate", "paymentDate"]),
	limit: faker.lorem.words(2),
	type: faker.helpers.arrayElement(["adimplente", "inadimplente"]),
}));

export const fakeIncomes: Income[] = Array.from({ length: LENGTH }, () => ({
	payer: faker.person.fullName(),
	description: faker.lorem.sentence(),
	competenceDate: faker.date.anytime().toISOString().split("T")[0],
	dueDate: faker.date.soon({ days: 30 }).toISOString().split("T")[0],
	account: faker.helpers.arrayElement(["CAIXA", "BRADESCO"]),
	paymentMethod: faker.helpers.arrayElement(["DINHEIRO", "BOLETO"]),
	costCenter: faker.helpers.arrayElement(["ADMINISTRATIVO", "OUTROS"]),
	category: faker.helpers.arrayElement(["MENSALIDADE", "ASSOCIADOS"]),
	taxApplied: faker.datatype.boolean(),
	value: faker.number.float({ min: 50, max: 1000, multipleOf: 0.01 }),
	discountType: faker.helpers.arrayElement(["%", "R$"]) as "%" | "R$",
	paidValue: faker.number.float({ min: 50, max: 1000, multipleOf: 0.01 }),
	discountPercentage: faker.number.float({ min: 5, max: 50, multipleOf: 0.01 }),
	discountExpirationDate: faker.date.future().toISOString().split("T")[0],
	discountDescription: faker.lorem.sentence(),
	observations: faker.lorem.sentence(),
	status: faker.helpers.arrayElement(["PENDING", "PAID", "CANCELLED"]),
	totalInstallments: faker.number.int({ min: 1, max: 12 }),
	installmentType: faker.helpers.arrayElement(["REPETE", "DIVIDE"]),
	invoiceInstructions: faker.lorem.sentence(),
	sampleMessage: faker.lorem.sentence(),
}));

export const fakeExpenses: Expense[] = Array.from({ length: LENGTH }, () => ({
	payer: faker.person.fullName(),
	competenceDate: faker.date.past().toISOString().split("T")[0],
	dueDate: faker.date.future().toISOString().split("T")[0],
	costCenter: faker.helpers.arrayElement(["ADMINISTRATIVO", "OUTROS"]),
	category: faker.helpers.arrayElement(["ENERGY", "WATER", "SYSTEM"]),
	paymentMethod: faker.helpers.arrayElement(["DINHEIRO", "BOLETO"]),
	baseDocument: faker.string.uuid(),
	account: faker.helpers.arrayElement(["CAIXA", "BRADESCO"]),
	tax: faker.datatype.boolean(),
	amount: faker.number.int({ min: 100, max: 10000 }),
	description: faker.lorem.sentence(),
	observations: faker.lorem.paragraph(),
	status: faker.helpers.arrayElement(["PENDING", "PAID", "CANCELLED"]),
	paymentDate: faker.date.future().toISOString().split("T")[0],
	paymentClearingDate: faker.date.future().toISOString().split("T")[0],
	discounts: faker.number.int({ min: 0, max: 100 }),
	addition: faker.number.int({ min: 0, max: 100 }),
	totalPaid: faker.number.int({ min: 100, max: 10000 }),
	totalClearing: faker.number.int({ min: 100, max: 10000 }),
	installments: faker.number.int({ min: 1, max: 12 }),
	installmentType: faker.helpers.arrayElement(["REPEAT", "DIVIDE"]),
	itemPayer: faker.person.fullName(),
	itemCategory: faker.helpers.arrayElement(["ENERGY", "WATER"]),
	itemCostCenter: faker.helpers.arrayElement(["ADMINISTRATIVO", "OUTROS"]),
	itemBaseDocument: faker.string.uuid(),
	itemDueDate: faker.date.future().toISOString().split("T")[0],
	itemDescription: faker.lorem.sentence(),
	itemAmount: faker.number.int({ min: 100, max: 10000 }),
	taxISS: faker.number.int({ min: 0, max: 100 }),
	taxCSSL: faker.number.int({ min: 0, max: 100 }),
	taxPIS: faker.number.int({ min: 0, max: 100 }),
	taxCONFINS: faker.number.int({ min: 0, max: 100 }),
}));

export const fakeProvisions: Provision[] = Array.from(
	{ length: LENGTH },
	() => ({
		id: faker.helpers.rangeToNumber({ min: 1, max: 999 }),
		ammount: faker.helpers.rangeToNumber({ min: 100, max: 400 }),
		description: faker.lorem.sentence(),
		documentDate: faker.date.recent().toISOString().split("T")[0],
		dueDate: faker.date.future().toISOString().split("T")[0],
		observations: faker.lorem.paragraph(),
		type: faker.helpers.arrayElement(["DESPESA", "OUTROS"]),
		registeredBy: faker.helpers.arrayElement(["Maria", "João", "José"]),
		status: faker.helpers.arrayElement(["APROVADO", "REPROVADO", "PENDENTE"]),
	})
);

export const fakeTransfers: Transfer[] = Array.from({ length: LENGTH }, () => ({
	id: faker.helpers.rangeToNumber({ min: 1, max: 999 }),
	origin: faker.helpers.arrayElement(["CAIXA", "BRADESCO"]),
	destination: faker.helpers.arrayElement(["CAIXA", "BRADESCO"]),
	date: faker.date.recent().toISOString().split("T")[0].toString(),
	amount: faker.helpers.rangeToNumber({ min: 100, max: 4000 }),
}));

export const fakePaymentGroups: PaymentGroup[] = Array.from(
	{ length: LENGTH },
	() => ({
		id: faker.number.int(),
		name: faker.lorem.words(2),
		defaultAmount: faker.number.float({ min: 10, max: 1000, multipleOf: 0.01 }),
		emailModel: faker.helpers.arrayElement([
			"campanhaMobile",
			"carteirinha",
			"carteirinhaSocio",
			"taxaAssociativa",
		]),
		cycle: faker.helpers.arrayElement(["ANUAL", "MENSAL"]),
		status: faker.helpers.arrayElement(["ATIVO", "INATIVO"]),
	})
);
