import { words, arrayElement as arr, date, sentence, boolean, int, name } from "@/app/mock/faker";
import { Payment } from "./Payment";

export const FAKE_DATA: Payment[] = Array.from({ length: 5 }, () => ({
	id: int(),
	name: words(2),
	status: arr(["active", "inactive"]),
}));
