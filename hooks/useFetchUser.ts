import { fetchUserAction } from "@/action/users-actions";
import { UserSchemaType } from "@/schemas/userSchema";
import { useState, useEffect } from "react";

interface UseFetchUserProps {
	id?: string;
}

export function useFetchUser({ id }: UseFetchUserProps) {
	const [user, setUser] = useState<UserSchemaType | null>(null);

	useEffect(() => {
		if (id) {
			const fetchUser = async () => {
				const fetchedUser = await fetchUserAction(id);
				if (fetchedUser) {
					setUser(fetchedUser);
				}
			};
			fetchUser();
		}
	}, [id]);

	return user;
}
