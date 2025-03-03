import { words, arrayElement as arr, date, sentence, int, name } from "@/app/mock/faker";
import { Announcement } from "./types/announcements";

export const FAKE_DATA: Announcement[] = Array.from({ length: 30 }, () => ({
	id: int(),
	subject: words(2),
	message: sentence(),
}));
