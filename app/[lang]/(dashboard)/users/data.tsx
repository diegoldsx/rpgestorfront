import { words, arrayElement as arr, date, sentence, int, name } from "@/app/mock/faker";
import { User } from "./types/user";
import { faker } from "@faker-js/faker";

export const FAKE_DATA: User[] = Array.from({ length: 30 }, () => ({
	id: faker.number.int({ min: 1, max: 1000 }),
	name: faker.person.fullName(),
	email: faker.internet.email(),
	nickname: faker.internet.userName(),
	password: faker.internet.password(),
	status: faker.helpers.arrayElement(["active", "inactive"]),
	redirectUrl: faker.internet.url(),
	company: faker.company.name(),
	permissions: faker.helpers.arrayElement(["admin", "user", "guest"]),
	role: faker.helpers.arrayElement([
		"financial",
		"announcements",
		"support",
		"user",
		"event",
		"schedule",
		"memberAccess",
		"client",
		"votingAssembly",
		"settings",
		"member",
		"content",
		"agreement",
	]),
}));
