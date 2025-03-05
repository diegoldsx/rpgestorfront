import { words, arrayElement as arr, date, sentence, int, name } from "@/app/mock/faker";
import { Sector } from "./types/sector";

export const FAKE_DATA: Sector[] = Array.from({ length: 30 }, () => ({
	id: int(),
	name: words(2),
	benefits: sentence(),
	contact: name(),
	email: "email@empresa.com",
	mobile: "(99) 9999-99999",
	phone: "(55) 5555-55555",
	type: arr(["user1", "user2"]),
	local: words(3),
	status: arr(["active", "inactive"]),
}));
