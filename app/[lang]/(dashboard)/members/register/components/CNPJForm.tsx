"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CNPJMember } from "../../types/Member";
import SelectField from "@/components/select-field";
import TextField from "@/components/text-field";
import Section from "./Section";
import states from "../../types/states"; // Importando a lista de estados

export default function CNPJMemberForm() {
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<CNPJMember>();

	const onSubmit = (data: CNPJMember) => {
		console.log("CNPJ Member Data:", data); // Imprimindo os dados do CNPJ no console
		reset();
	};

	return (
		<div className="max-w-7xl mx-auto p-6 shadow-md bg-white">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<Section title="Informações Empresariais">
					<TextField
						label="Nome Corporativo"
						name="corporateName"
						control={control}
						placeholder="Digite o nome corporativo"
						rules={{ required: "Nome corporativo é obrigatório" }}
					/>
					<TextField
						label="Nome Fantasia"
						name="tradeName"
						control={control}
						placeholder="Digite o nome fantasia"
						rules={{ required: "Nome fantasia é obrigatório" }}
					/>
					<TextField
						label="CNPJ"
						name="document"
						control={control}
						placeholder="Digite o CNPJ"
						rules={{ required: "CNPJ é obrigatório" }}
					/>
					<SelectField
						label="Status"
						name="status"
						control={control}
						placeholder="Selecione um status"
						options={[
							{ value: "ativo", label: "Ativo" },
							{ value: "inativo", label: "Inativo" },
							{ value: "pendente", label: "Pendente" },
						]}
						rules={{ required: "Status é obrigatório" }}
					/>
				</Section>

				<Section title="Contato">
					<TextField
						label="Email"
						name="email"
						control={control}
						placeholder="Digite seu email"
						type="email"
						rules={{ required: "Email é obrigatório" }}
					/>
					<TextField
						label="Telefone"
						name="phone"
						control={control}
						placeholder="Digite seu telefone"
						type="tel"
						rules={{ required: "Telefone é obrigatório" }}
					/>
					<TextField
						label="Celular"
						name="mobile"
						control={control}
						placeholder="Digite seu celular"
						type="tel"
						rules={{ required: "Celular é obrigatório" }}
					/>
				</Section>

				<Section title="Endereço">
					<TextField
						label="CEP"
						name="cep"
						control={control}
						placeholder="Digite seu CEP"
						rules={{ required: "CEP é obrigatório" }}
					/>
					<TextField
						label="Rua"
						name="street"
						control={control}
						placeholder="Digite sua rua"
						rules={{ required: "Rua é obrigatória" }}
					/>
					<TextField
						label="Número"
						name="number"
						control={control}
						placeholder="Digite o número"
						rules={{ required: "Número é obrigatório" }}
					/>
					<TextField
						label="Complemento"
						name="complement"
						control={control}
						placeholder="Digite o complemento (opcional)"
					/>
					<TextField
						label="Bairro"
						name="neighborhood"
						control={control}
						placeholder="Digite seu bairro"
						rules={{ required: "Bairro é obrigatório" }}
					/>
					<TextField
						label="Cidade"
						name="city"
						control={control}
						placeholder="Digite sua cidade"
						rules={{ required: "Cidade é obrigatória" }}
					/>
					<SelectField
						label="Estado"
						name="state"
						control={control}
						placeholder="Selecione seu estado"
						options={states} // Usando a lista de estados importada
						rules={{ required: "Estado é obrigatório" }}
					/>
				</Section>

				<div className="text-center mt-4">
					<Button type="submit" className="w-full md:w-auto px-6 py-2">
						Cadastrar Pessoa Jurídica
					</Button>
				</div>
			</form>
		</div>
	);
}
