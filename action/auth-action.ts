"use server";
import { User } from "@/app/[lang]/(dashboard)/users/types";
import { registerUser } from "@/config/user.config";
import { revalidatePath } from "next/cache";

export const addUser = async (data: User) => {
  const response = await registerUser(data);
  return response;
};
