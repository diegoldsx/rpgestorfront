"use client";

import { SubmitHandler } from "react-hook-form";
import { PageParams } from "@/types/commons/PageParams";
import { GenericForm } from "@/components/form/GenericForm_";
import { PageLayout } from "@/components/common/page/PageLayout";
import { useFetchData } from "@/hooks/useFetchData";
import { User, userSchema, fake_users } from "../types";
import { defaultValues, fieldsProps } from "../columns";
import { UserForm } from "@/app/[lang]/(dashboard)/users/details-page/UserForm";

export default function DetailsPage({ searchParams }: PageParams) {

	console.log(searchParams)
	const { data: user } = useFetchData(searchParams.id, (id) => {
		return fake_users.find((f) => f.id === id);
	});

	const handleSubmit: SubmitHandler<User> = async (data) => {
		console.log("Submit:", data);
	};

	return (
		<PageLayout title={user ? "Editar" : "Novo"}>
			<UserForm user={user as User} onSubmit={handleSubmit} />
		</PageLayout>
	);
}
