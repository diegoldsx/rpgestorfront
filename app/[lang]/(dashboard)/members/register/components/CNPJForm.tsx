"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface BaseMember {
	id: string;
	name: string;
	status: "ativo" | "inativo" | "pendente";
	code: string;
	document: string;
	email: string;
	paymentGroup: string;
	billingCycle: string;
	automaticBilling: boolean;
	phone: string;
	mobile: string;
	billingAmount: string;
	password: string;
	address?: string;
	billingEmail?: string;
	website?: string;
	socialMedia?: string;
}

interface CNPJMember extends BaseMember {
	type: "CNPJ";
	corporateName: string;
	tradeName: string;
	stateRegistration?: string;
	municipalRegistration?: string;
	linkedTo?: string;
}

export default function CNPJMemberForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CNPJMember>();

	const onSubmit = (data: CNPJMember) => {
		console.log("CNPJ Member Data:", data);
		reset();
	};

	return (
		<Card className="max-w-5xl mx-auto p-6 shadow-md bg-white">
			<CardHeader>
				<CardTitle className="text-center text-xl font-bold text-gray-800">
					Cadastro de Pessoa Jurídica
				</CardTitle>
			</CardHeader>

			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					{/* Informações Empresariais */}
					<div>
						<h2 className="text-lg font-semibold text-gray-700">
							Informações Empresariais
						</h2>
						<Separator className="my-2" />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<Label htmlFor="corporateName">Nome Corporativo</Label>
								<Input
									id="corporateName"
									{...register("corporateName", { required: true })}
								/>
								{errors.corporateName && (
									<span className="text-red-500 text-sm">
										Nome corporativo é obrigatório
									</span>
								)}
							</div>

							<div>
								<Label htmlFor="tradeName">Nome Fantasia</Label>
								<Input
									id="tradeName"
									{...register("tradeName", { required: true })}
								/>
								{errors.tradeName && (
									<span className="text-red-500 text-sm">
										Nome fantasia é obrigatório
									</span>
								)}
							</div>

							<div>
								<Label htmlFor="document">CNPJ</Label>
								<Input
									id="document"
									{...register("document", { required: true })}
								/>
								{errors.document && (
									<span className="text-red-500 text-sm">
										CNPJ é obrigatório
									</span>
								)}
							</div>

							<div>
								<Label htmlFor="status">Status</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Selecione um status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="ativo">Ativo</SelectItem>
										<SelectItem value="inativo">Inativo</SelectItem>
										<SelectItem value="pendente">Pendente</SelectItem>
									</SelectContent>
								</Select>
								{errors.status && (
									<span className="text-red-500 text-sm">
										Status é obrigatório
									</span>
								)}
							</div>
						</div>
					</div>

					{/* Contato */}
					<div>
						<h2 className="text-lg font-semibold text-gray-700">Contato</h2>
						<Separator className="my-2" />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									{...register("email", { required: true })}
								/>
								{errors.email && (
									<span className="text-red-500 text-sm">
										Email é obrigatório
									</span>
								)}
							</div>

							<div>
								<Label htmlFor="phone">Telefone</Label>
								<Input
									id="phone"
									type="tel"
									{...register("phone", { required: true })}
								/>
								{errors.phone && (
									<span className="text-red-500 text-sm">
										Telefone é obrigatório
									</span>
								)}
							</div>

							<div>
								<Label htmlFor="mobile">Celular</Label>
								<Input
									id="mobile"
									type="tel"
									{...register("mobile", { required: true })}
								/>
								{errors.mobile && (
									<span className="text-red-500 text-sm">
										Celular é obrigatório
									</span>
								)}
							</div>
						</div>
					</div>

					{/* Dados Financeiros */}
					<div>
						<h2 className="text-lg font-semibold text-gray-700">
							Dados Financeiros
						</h2>
						<Separator className="my-2" />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<Label htmlFor="paymentGroup">Grupo de Pagamento</Label>
								<Input
									id="paymentGroup"
									{...register("paymentGroup", { required: true })}
								/>
								{errors.paymentGroup && (
									<span className="text-red-500 text-sm">
										Grupo de pagamento é obrigatório
									</span>
								)}
							</div>

							<div>
								<Label htmlFor="billingCycle">Ciclo de Cobrança</Label>
								<Input
									id="billingCycle"
									{...register("billingCycle", { required: true })}
								/>
								{errors.billingCycle && (
									<span className="text-red-500 text-sm">
										Ciclo de cobrança é obrigatório
									</span>
								)}
							</div>

							<div>
								<Label htmlFor="billingAmount">Valor da Cobrança</Label>
								<Input
									id="billingAmount"
									{...register("billingAmount", { required: true })}
								/>
								{errors.billingAmount && (
									<span className="text-red-500 text-sm">
										Valor da cobrança é obrigatório
									</span>
								)}
							</div>
						</div>
					</div>

					{/* Endereço */}
					<div>
						<h2 className="text-lg font-semibold text-gray-700">Endereço</h2>
						<Separator className="my-2" />
						<Label htmlFor="address">Endereço Completo</Label>
						<Input id="address" {...register("address")} />
					</div>

					{/* Botão de Envio */}
					<div className="text-center mt-4">
						<Button type="submit" className="w-full md:w-auto px-6 py-2">
							Cadastrar Pessoa Jurídica
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
