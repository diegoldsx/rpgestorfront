import Select from "../Select";
import { useForm, Path, FormProvider, Controller, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { Option } from "@/app/types/FieldConfig";

import { FieldConfig } from "@/app/types/FieldConfig";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";

interface FormProps<T extends Record<string, z.ZodTypeAny>, U> {
	schema: z.ZodObject<T>;
	onSubmit: (data: z.infer<z.ZodObject<T>>) => void;
	fields: FieldConfig<U>[];
	initialValues?: z.infer<z.ZodObject<T>>;
}

const Form = <T extends Record<string, z.ZodTypeAny>, U>({ schema, onSubmit, fields, initialValues }: FormProps<T, U>) => {
	type FormData = z.infer<z.ZodObject<T>>;

	const methods = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: initialValues as DefaultValues<FormData> | undefined, // Garantia de tipo correta
	});

	useEffect(() => {
		if (initialValues) {
			methods.reset(initialValues);
		}
	}, [initialValues, methods]);

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = methods;

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{fields.map((field) => (
					<div key={String(field.id)} className="space-y-2">
						<Label htmlFor={String(field.id)}>{field.title}:</Label>

						{field.type === "select" && field.options ? (
							<Controller
								name={String(field.id) as Path<FormData>}
								control={control}
								render={({ field: { onChange, value } }) => (
									<Select
										id={String(field.id)}
										name={String(field.id) as Path<FormData>}
										options={(field.options ?? []) as Option<string>[]}
										placeholder="Selecione uma opção"
										onChange={(val) => onChange(val as string)}
										value={typeof value === "string" ? value : ""}
									/>
								)}
							/>
						) : (
							<Input type="text" size="lg" id={String(field.id)} {...methods.register(String(field.id) as Path<FormData>)} />
						)}

						{errors[String(field.id)] && <p className="text-red-500 mt-1">{String(errors[String(field.id)]?.message) ?? ""}</p>}
					</div>
				))}

				<div className="md:col-span-2 mt-4">
					<Button type="submit" className="w-full md:w-auto">
						{initialValues ? "Atualizar" : "Salvar"}
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default Form;
