import { User } from "./types/user";
import { faker } from "@faker-js/faker";

export const FAKE_DATA: User[] = Array.from({ length: 30 }, () => ({
	name: faker.person.fullName(),
	status: faker.helpers.arrayElement(["active", "inactive"]),
	email: faker.internet.email(),
	username: faker.internet.userName(),
	redirectUrl: faker.internet.url(),
}));
