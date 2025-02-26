import { words, arrayElement as arr, date, sentence, boolean, int } from "@/app/mock/faker";
import { Content } from "./Content";

export const FAKE_DATA: Content[] = Array.from({ length: 30 }, () => ({
	id: int(),
	contentType: arr(["content1", "content2"]),
	status: arr(["active", "inactive"]),
	expirationDate: date(),
	title: words(2),
	file: words(1),
	videoConference: boolean(),
	access: arr(["private", "public"]),
	description: sentence(),
	customHtml: "<html>Customizado</html>",
	responsible: arr(["user1", "user2"]),
}));
