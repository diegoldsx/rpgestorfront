import { words, arrayElement as arr, date, sentence, boolean, int, name } from "@/app/mock/faker";
import { Service } from "./Service";

export const FAKE_DATA: Service[] = Array.from({ length: 5 }, () => ({
	id: int(),
	name: words(2),
	status: arr(["active", "inactive"]),
}));
