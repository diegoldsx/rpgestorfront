"use client";

import { useEffect, useState } from "react";
import { UserForm } from "./UserForm";
import { UserSchemaType } from "@/schemas/userSchema";
import { SubmitHandler } from "react-hook-form";
import { fetchUserAction, upsertUserAction } from "@/action/users-actions";

export default function UserPage({ searchParams }: { searchParams: { id?: string } }) {
	const [user, setUser] = useState<UserSchemaType | null>(null);
	console.log(user);
	useEffect(() => {
		if (searchParams.id) {
			const fetchUser = async () => {
				const fetchedUser = await fetchUserAction(searchParams.id);
				if (fetchedUser) {
					setUser(fetchedUser);
				}
			};
			fetchUser();
		}
	}, [searchParams.id]);

	const handleSubmit: SubmitHandler<UserSchemaType> = async (data) => {
		await upsertUserAction(data);
	};

	return (
		<div>
			<UserForm onSubmit={handleSubmit} user={user || undefined} />
		</div>
	);
}
