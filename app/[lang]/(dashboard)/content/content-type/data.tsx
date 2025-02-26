import { words, arrayElement as arr, date, sentence, boolean, int } from "@/app/mock/faker";
import { ContentType } from "./ContentType";

export const FAKE_DATA: ContentType[] = Array.from({ length: 30 }, () => ({
	id: int(),
	name: words(2),
}));
