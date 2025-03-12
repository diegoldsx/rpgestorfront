"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // 🔹 Importando o Select do Radix UI
import { z, ZodSchema } from "zod";

interface CustomFormProps<T extends ZodSchema> {
	userId?: string;
	defaultValues?: Record<string, any>;
	schema: T;
	onSubmit: (data: z.infer<T>) => Promise<void>;
	children: React.ReactNode;
}

export default function CustomForm<T extends ZodSchema>({ userId, defaultValues = {}, schema, onSubmit, children }: CustomFormProps<T>) {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues,
	});

	const handleSubmit = async (data: any) => {
		await onSubmit(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{children}
				<div className="md:col-span-2 flex justify-end">
					<Button type="submit">{userId ? "Atualizar" : "Salvar"}</Button>
				</div>
			</form>
		</Form>
	);
}
