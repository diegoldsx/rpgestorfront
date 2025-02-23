import { faker } from "@faker-js/faker";

const { number, lorem, helpers, person, datatype } = faker;

const { int } = number;
const { words, sentence } = lorem;
const { arrayElement } = helpers;
const { fullName } = person;
const { boolean } = datatype;

export { int, words, sentence, arrayElement as array, fullName, boolean };
