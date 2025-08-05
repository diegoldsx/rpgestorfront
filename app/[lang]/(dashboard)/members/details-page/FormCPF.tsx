"use client";
import { GenericForm } from "@/components/form/GenericForm";
import { z } from "zod";
import { columnSchema } from "../components/columnSchema";
import { Column } from "@/types/columns/ColumnsDefinition";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { SelectComponent } from "@/components/SelectComponent";
import { useEffect } from "react";

export const individualSchema = z.object({
	id: z.string().uuid().optional(),
	type: z.literal("individual"),
	status: z.enum(["active", "inactive"]),
	code: z.string(),
	fullName: z.string().min(3),
	cpf: z
		.string()
		.min(11)
		.max(14)
		.regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/),
	birthDate: z.string(),
	contact: z.object({
		email: z.string().email(),
		phone: z.string(),
	}),
	paymentGroup: z.string(),
	cycle: z.string(),
	address: z.object({
		zipCode: z.string(),
		state: z.string(),
		city: z.string(),
		district: z.string(),
		street: z.string(),
		number: z.string(),
		complement: z.string().optional(),
	}),
});

type IndividualType = z.infer<typeof individualSchema>;

export function FormPessoaFisica({
	onSubmit,
	member,
}: {
	onSubmit: (data: IndividualType) => void;
	member?: Partial<IndividualType> | null;
}) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IndividualType>({
		resolver: zodResolver(individualSchema),
		defaultValues: {
			...member,
			id: member?.id || "",
			type: "individual",
			cpf: member?.cpf || "",
			code: member?.code || "",
			status: member?.status || "active",
			fullName: member?.fullName || "",
			birthDate: member?.birthDate || "",
			paymentGroup: member?.paymentGroup || "grupo1",
			cycle: member?.cycle || "ciclo1",
			contact: {
				email: member?.contact?.email || "",
				phone: member?.contact?.phone || "",
			},
			address: {
				zipCode: member?.address?.zipCode || "",
				state: member?.address?.state || "",
				city: member?.address?.city || "",
				district: member?.address?.district || "",
				street: member?.address?.street || "",
				number: member?.address?.number || "",
				complement: member?.address?.complement || "",
			},
		},
	});
	useEffect(() => {
		if (member) {
			reset({
				...member,
				id: member?.id || "",
				type: "individual",
				cpf: member?.cpf || "",
				code: member?.code || "",
				status: member?.status || "active",
				fullName: member?.fullName || "",
				birthDate: member?.birthDate || "",
				paymentGroup: member?.paymentGroup || "grupo1",
				cycle: member?.cycle || "ciclo1",
				contact: {
					email: member?.contact?.email || "",
					phone: member?.contact?.phone || "",
				},
				address: {
					zipCode: member?.address?.zipCode || "",
					state: member?.address?.state || "",
					city: member?.address?.city || "",
					district: member?.address?.district || "",
					street: member?.address?.street || "",
					number: member?.address?.number || "",
					complement: member?.address?.complement || "",
				},
			});
		}
	}, [member, reset]);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label>Tipo de conta</label>
					<SelectComponent
						disabled
						value="individual"
						onChange={() => {}}
						options={[{ label: "Pessoa Física", value: "individual" }]}
					/>
				</div>

				<div>
					<label>Código</label>
					<Input {...register("code")} />
					{errors.code && <p className="text-red-500">{errors.code.message}</p>}
				</div>

				<div>
					<label>Nome completo</label>
					<Input {...register("fullName")} />
					{errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
				</div>

				<div>
					<label>CPF</label>
					<Input {...register("cpf")} />
					{errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}
				</div>

				<div>
					<label>Data de nascimento</label>
					<Input type="date" {...register("birthDate")} />
					{errors.birthDate && <p className="text-red-500">{errors.birthDate.message}</p>}
				</div>

				<div>
					<label>Email</label>
					<Input {...register("contact.email")} name="contact.email" />
					{errors.contact?.email && <p className="text-red-500">{errors.contact.email.message}</p>}
				</div>

				<div>
					<label>Telefone</label>
					<Input {...register("contact.phone")} name="contact.phone" />
					{errors.contact?.phone && <p className="text-red-500">{errors.contact.phone.message}</p>}
				</div>

				<div>
					<label>Grupo de pagamento</label>
					<Input {...register("paymentGroup")} />
					{errors.paymentGroup && <p className="text-red-500">{errors.paymentGroup.message}</p>}
				</div>

				<div>
					<label>Ciclo</label>
					<Input {...register("cycle")} />
					{errors.cycle && <p className="text-red-500">{errors.cycle.message}</p>}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
				<div>
					<label>CEP</label>
					<Input {...register("address.zipCode")} name="address.zipCode" />
					{errors.address?.zipCode && <p className="text-red-500">{errors.address.zipCode.message}</p>}
				</div>

				<div>
					<label>Estado</label>
					<Input {...register("address.state")} name="address.state" />
					{errors.address?.state && <p className="text-red-500">{errors.address.state.message}</p>}
				</div>

				<div>
					<label>Cidade</label>
					<Input {...register("address.city")} name="address.city" />
					{errors.address?.city && <p className="text-red-500">{errors.address.city.message}</p>}
				</div>

				<div>
					<label>Bairro</label>
					<Input {...register("address.district")} name="address.district" />
					{errors.address?.district && <p className="text-red-500">{errors.address.district.message}</p>}
				</div>

				<div>
					<label>Rua</label>
					<Input {...register("address.street")} name="address.street" />
					{errors.address?.street && <p className="text-red-500">{errors.address.street.message}</p>}
				</div>

				<div>
					<label>Número</label>
					<Input {...register("address.number")} name="address.number" />
					{errors.address?.number && <p className="text-red-500">{errors.address.number.message}</p>}
				</div>

				<div className="md:col-span-2">
					<label>Complemento</label>
					<Input {...register("address.complement")} name="address.complement" />
				</div>
			</div>

			<button type="submit" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
				Salvar Pessoa Física
			</button>
		</form>
	);
}
