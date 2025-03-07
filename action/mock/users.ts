import { User } from "@/app/[lang]/(dashboard)/users/lib/types/user";
import { faker } from "@faker-js/faker";

export const FAKE_USERS: User[] = Array.from({ length: 30 }, () => ({
	name: faker.person.fullName(),
	status: faker.helpers.arrayElement(["active", "inactive"]),
	email: faker.internet.email(),
	username: faker.internet.userName(),
	redirectUrl: faker.internet.url(),
}));
