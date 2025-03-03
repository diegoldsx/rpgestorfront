import { words, arrayElement as arr, date, sentence, int, name } from "@/app/mock/faker";
import { Group } from "./types/group";

export const FAKE_DATA: Group[] = Array.from({ length: 30 }, () => ({
	id: int(),
	name: words(2),
}));
