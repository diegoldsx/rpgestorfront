import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { SelectComponent } from "@/components/SelectComponent";

export const companySchema = z.object({
	id: z.string().uuid().optional(),
	type: z.literal("company"),
	status: z.enum(["active", "inactive"]),
	code: z.string(),
	corporateName: z.string(),
	cnpj: z
		.string()
		.min(14)
		.max(18)
		.regex(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/),
	stateRegistration: z.string(),
	municipalRegistration: z.string(),
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

export function FormPessoaJuridica({ onSubmit }: { onSubmit: (data: any) => void }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof companySchema>>({
		resolver: zodResolver(companySchema),
		defaultValues: {
			type: "company",
			status: "active",
		},
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
			<div className="grid grid-cols-2 gap-4">
				<div>
					<label>Tipo de conta</label>
					<SelectComponent
						{...register("type")}
						disabled
						value="company"
						onChange={() => {}}
						options={[{ label: "Pessoa Jurídica", value: "company" }]}
					/>
				</div>

				<div>
					<label>Código</label>
					<Input className="Input" {...register("code")} />
					{errors.code && <p className="text-red-500">{errors.code.message}</p>}
				</div>

				<div>
					<label>Razão Social</label>
					<Input className="Input" {...register("corporateName")} />
					{errors.corporateName && <p className="text-red-500">{errors.corporateName.message}</p>}
				</div>

				<div>
					<label>CNPJ</label>
					<Input className="Input" {...register("cnpj")} />
					{errors.cnpj && <p className="text-red-500">{errors.cnpj.message}</p>}
				</div>

				<div>
					<label>Inscrição Estadual</label>
					<Input className="Input" {...register("stateRegistration")} />
					{errors.stateRegistration && <p className="text-red-500">{errors.stateRegistration.message}</p>}
				</div>

				<div>
					<label>Inscrição Municipal</label>
					<Input className="Input" {...register("municipalRegistration")} />
					{errors.municipalRegistration && <p className="text-red-500">{errors.municipalRegistration.message}</p>}
				</div>

				<div>
					<label>CEP</label>
					<Input className="Input" {...register("address.zipCode")} />
					{errors.address?.zipCode && <p className="text-red-500">{errors.address.zipCode.message}</p>}
				</div>

				<div>
					<label>Estado</label>
					<Input className="Input" {...register("address.state")} />
					{errors.address?.state && <p className="text-red-500">{errors.address.state.message}</p>}
				</div>

				<div>
					<label>Cidade</label>
					<Input className="Input" {...register("address.city")} />
					{errors.address?.city && <p className="text-red-500">{errors.address.city.message}</p>}
				</div>

				<div>
					<label>Bairro</label>
					<Input className="Input" {...register("address.district")} />
					{errors.address?.district && <p className="text-red-500">{errors.address.district.message}</p>}
				</div>

				<div>
					<label>Rua</label>
					<Input className="Input" {...register("address.street")} />
					{errors.address?.street && <p className="text-red-500">{errors.address.street.message}</p>}
				</div>

				<div>
					<label>Número</label>
					<Input className="Input" {...register("address.number")} />
					{errors.address?.number && <p className="text-red-500">{errors.address.number.message}</p>}
				</div>

				<div>
					<label>Complemento</label>
					<Input className="Input" {...register("address.complement")} />
				</div>
			</div>

			<button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
				Salvar Pessoa Jurídica
			</button>
		</form>
	);
}
