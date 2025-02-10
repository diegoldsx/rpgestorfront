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
import { CPFMember } from "../../types/Member";
import MaskedInput from "@/components/ui/input-mask;
import InputText from "@/components/ui/input-text";
import SelectField from "@/components/select";

export default function CPFMemberForm() {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<CPFMember>();

	const onSubmit = (data: CPFMember) => {
		console.log("CPF Member Data:", data);
		reset();
	};

	return (
		<Card className="max-w-7xl mx-auto p-6 shadow-md bg-white">
			<CardHeader>
				<CardTitle className="text-center text-xl font-bold text-gray-800">
					Cadastro de Pessoa Física
				</CardTitle>
			</CardHeader>

			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div>
						<h2 className="text-lg font-semibold text-gray-700">
							Informações Pessoais
						</h2>
						<Separator className="my-2" />
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<InputText
									label="Nome Completo"
									name="name"
									control={control}
									placeholder="Digite seu nome"
									rules={{ required: "Nome é obrigatório" }}
								/>
							</div>

							<div>
								<Label htmlFor="birthDate">Data de Nascimento</Label>
								<Input
									id="birthDate"
									type="date"
									{...register("birthDate", { required: true })}
								/>
								{errors.birthDate && (
									<span className="text-red-500 text-sm">
										Data de nascimento é obrigatória
									</span>
								)}
							</div>

							<div>
								<MaskedInput
									label="CPF"
									name="cpf"
									mask="999.999.999-99"
									placeholder="000.000.000-00"
									control={control}
									rules={{ required: "O CPF é obrigatório" }}
								/>
							</div>

							<div>
								<SelectField
									label="Status"
									name="status"
									control={control}
									placeholder="Selecione o status"
									options={[
										{ value: "ativo", label: "Ativo" },
										{ value: "inativo", label: "Inativo" },
										{ value: "pendente", label: "Pendente" },
									]}
									rules={{ required: "O status é obrigatório" }}
								/>
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

						
						</div>
					</div>

					<div>
						<h2 className="text-lg font-semibold text-gray-700">Endereço</h2>
						<Separator className="my-2" />
						<Label htmlFor="address">Endereço Completo</Label>
						<Input id="address" {...register("address")} />
					</div>

					<div className="text-center mt-4">
						<Button type="submit" className="w-full md:w-auto px-6 py-2">
							Cadastrar Pessoa Física
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
