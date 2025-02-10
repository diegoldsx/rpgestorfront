"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import React from "react";

interface MemberFormData {
	id: string;
	name: string;
	type: "CPF" | "CNPJ";
	status: "ativo" | "inativo" | "pendente";
	code: string;
	document: string;
	corporateName?: string;
	tradeName?: string;
	birthDate?: string;
	email: string;
	paymentGroup: string;
	billingCycle: string;
	automaticBilling: boolean;
	phone: string;
	mobile: string;
	linkedTo?: string;
	billingAmount: string;
	password: string;
	stateRegistration?: string;
	municipalRegistration?: string;
	billingEmail?: string;
	website?: string;
	socialMedia?: string;
	address?: string;
}

export default function MemberRegistration() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<MemberFormData>();

	const onSubmit = (data: MemberFormData) => {
		console.log("Member Data:", data);
		reset();
	};

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
			<h2 className="text-xl font-semibold mb-4">Cadastro de Associado</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-2 gap-4"
			>
				<div>
					<Label htmlFor="name">Nome</Label>
					<Input
						id="name"
						{...register("name", { required: "Nome é obrigatório" })}
					/>
				</div>

				<div>
					<Label htmlFor="type">Tipo</Label>
					<Select {...register("type")}>
						<SelectTrigger>
							<SelectValue placeholder="Selecione o Tipo" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="CPF">CPF</SelectItem>
							<SelectItem value="CNPJ">CNPJ</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div>
					<Label htmlFor="status">Status</Label>
					<Select {...register("status")}>
						<SelectTrigger>
							<SelectValue placeholder="Selecione o Status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="ativo">Ativo</SelectItem>
							<SelectItem value="inativo">Inativo</SelectItem>
							<SelectItem value="pendente">Pendente</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div>
					<Label htmlFor="document">Documento</Label>
					<Input id="document" {...register("document")} />
				</div>

				<div>
					<Label htmlFor="email">E-mail</Label>
					<Input id="email" type="email" {...register("email")} />
				</div>

				<div>
					<Label htmlFor="phone">Telefone</Label>
					<Input id="phone" {...register("phone")} />
				</div>

				<div>
					<Label htmlFor="mobile">Celular</Label>
					<Input id="mobile" {...register("mobile")} />
				</div>

				<div className="col-span-2">
					<Label htmlFor="billingAmount">Valor de Cobrança</Label>
					<Input id="billingAmount" {...register("billingAmount")} />
				</div>

				<div className="col-span-2">
					<Label htmlFor="address">Endereço</Label>
					<Input id="address" {...register("address")} />
				</div>

				<div className="col-span-2">
					<Button type="submit" className="w-full">
						Cadastrar
					</Button>
				</div>
			</form>
		</div>
	);
}
