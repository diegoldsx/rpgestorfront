import { faker } from "@faker-js/faker";

export const int = () => faker.number.int({ min: 1, max: 1000 });
export const float = () =>
	faker.number.float({ min: 100, max: 500, multipleOf: 0.01 });
export const date = () => faker.date.anytime().toISOString().split("T")[0];
export const words = (count: number = 2) => faker.lorem.words(count);
export const sentence = () => faker.lorem.sentence();
export const arrayElement = <T>(arr: T[]) => faker.helpers.arrayElement(arr);
export const boolean = () => faker.datatype.boolean();
export const email = () => faker.internet.email().toLowerCase();
