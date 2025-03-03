import { words, email, arrayElement as arr, date, sentence, int, name } from "@/app/mock/faker";
import { Email } from "./types/email";

export const FAKE_DATA: Email[] = Array.from({ length: 30 }, () => ({
	id: int(),
	email: email(),
	status: arr(["active", "inactive"]),
}));
