"use server";

import { EmailType } from "@/types/Email";
import { announcements } from "./data";

export async function getAnnouncementsAction() {
	return announcements as EmailType[];
}
