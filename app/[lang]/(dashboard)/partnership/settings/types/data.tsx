import { words, arrayElement as arr, date, sentence, boolean, int, name } from "@/app/mock/faker";
import { PartnershipType } from "./PartnershipType";

export const FAKE_DATA: PartnershipType[] = Array.from({ length: 5 }, () => ({
	id: int(),
	name: words(2),
	status: arr(["active", "inactive"]),
}));
