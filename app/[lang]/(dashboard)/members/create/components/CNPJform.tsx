"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FormData {
	name: string;
	email: string;
	password: string;
}

export default function NewMemberForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log("Dados do Formulário:", data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="p-6 border rounded-lg shadow space-y-4"
		>
			{/* Nome */}
			<div>
				<label className="text-sm font-medium">Nome</label>
				<Input
					{...register("name", { required: "O nome é obrigatório." })}
					type="text"
					className="mt-1"
				/>
				{errors.name && (
					<p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
				)}
			</div>

			{/* Email */}
			<div>
				<label className="text-sm font-medium">Email</label>
				<Input
					{...register("email", {
						required: "O email é obrigatório.",
						pattern: {
							value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
							message: "Insira um email válido.",
						},
					})}
					type="email"
					className="mt-1"
				/>
				{errors.email && (
					<p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
				)}
			</div>

			{/* Senha */}
			<div>
				<label className="text-sm font-medium">Senha</label>
				<Input
					{...register("password", {
						required: "A senha é obrigatória.",
						minLength: {
							value: 6,
							message: "A senha deve ter pelo menos 6 caracteres.",
						},
					})}
					type="password"
					className="mt-1"
				/>
				{errors.password && (
					<p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
				)}
			</div>

			{/* Botão de Enviar */}
			<Button type="submit" className="w-full">
				Enviar
			</Button>
		</form>
	);
}
