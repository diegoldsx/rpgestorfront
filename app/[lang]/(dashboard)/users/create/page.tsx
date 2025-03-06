"use client";
import React, { useEffect } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userSchema, UserSchemaType } from "../validation/userSchema";
import { submitUserAction } from "@/action/users/submitUsersAction";
import GenericForm from "@/components/form/GenericForm";
import { userFields } from "../config/userField";
import { UserCircle } from "lucide-react";

export const handleSubmit = async (data: UserSchemaType) => {
	console.log(data);
	await submitUserAction(data);
};
export default function CreatePage() {
	return (
		<div>
			<Card className="p-6 rounded">
				<CardHeader>
					<div className="flex items-center  space-x-2">
						<UserCircle />
						<CardTitle>Criar Usuário</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="space-y-6">
					<GenericForm fields={userFields} schema={userSchema} onSubmit={handleSubmit} />
				</CardContent>
			</Card>
		</div>
	);
}
