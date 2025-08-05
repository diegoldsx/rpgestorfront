"use client";

import React, { useEffect } from "react";
import { useForm, FormProvider, SubmitHandler, useFormContext, Path, PathValue, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodObject, ZodRawShape, ZodTypeAny, infer as zInfer, ZodType } from "zod";

import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import Select from "@/components/Select";
import { Checkbox } from "@/components/Checkbox";
import { DatePicker } from "@/components/date-picker";

type AnyZodSchema = ZodObject<ZodRawShape>;
type ZodAnySchema = ZodType<any, any, any>;
type ZodSchemaShape = Record<string, ZodTypeAny>;
interface NewFormProps<S extends AnyZodSchema> {
	schema: S;
	data?: Partial<zInfer<S>>;
	onSubmit: SubmitHandler<zInfer<S>>;
	submitLabel?: string;
}

export function NewForm<S extends AnyZodSchema>({ schema, data, onSubmit, submitLabel = "Salvar" }: NewFormProps<S>) {
	const defaultValues = (data || {}) as DefaultValues<zInfer<S>>;

	const methods = useForm<zInfer<S>>({
		resolver: zodResolver(schema),
		defaultValues,
	});

	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
		watch,
		setValue,
	} = methods;

	useEffect(() => {
		reset(defaultValues);
	}, [data, reset]);

	let shape: ZodSchemaShape = {};

	if ("shape" in schema) {
		// schema é ZodObject
		shape = (schema as ZodObject<any>).shape;
	} else if ((schema as any)._def?.typeName === "ZodDiscriminatedUnion") {
		// junta os shapes dos membros da union
		const options = (schema as any)._def.options as ZodObject<any>[];
		for (const option of options) {
			shape = { ...shape, ...option.shape };
		}
	} else {
		throw new Error("Schema não suportado no GenericForm.");
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{Object.entries(shape).map(([key, field]) => {
					const fieldType = (field as ZodTypeAny)._def?.typeName;
					let fieldComponent: React.ReactElement | null = null;

					if (fieldType?.includes("ZodString")) {
						if (key.toLowerCase().includes("email")) {
							fieldComponent = <Input type="email" />;
						} else if (key.toLowerCase().includes("date")) {
							const value = watch(key as Path<zInfer<S>>) as string | undefined;
							fieldComponent = (
								<DatePicker
									displayFormat="dd/MM/yyyy"
									selectedDate={value ? new Date(value) : undefined}
									onDateChange={(date) =>
										setValue(
											key as Path<zInfer<S>>,
											(date?.toISOString() || "") as PathValue<zInfer<S>, Path<zInfer<S>>>
										)
									}
								/>
							);
						} else {
							fieldComponent = <Input type="text" />;
						}
					}

					if (fieldType?.includes("ZodEnum")) {
						const options = (field as any)._def?.values || [];
						fieldComponent = <Select options={options} />;
					}

					if (fieldType?.includes("ZodBoolean")) {
						fieldComponent = (
							<Checkbox
								checked={watch(key as Path<zInfer<S>>)}
								onCheckedChange={(val) => {
									if (typeof val === "boolean") {
										setValue(key as Path<zInfer<S>>, val as PathValue<zInfer<S>, Path<zInfer<S>>>);
									}
								}}
							/>
						);
					}

					if (!fieldComponent) return null;

					return (
						<FormFieldComponent key={key} name={key} label={key} control={control} errors={errors}>
							{fieldComponent}
						</FormFieldComponent>
					);
				})}

				<div className="w-full md:col-span-2 flex justify-end mt-4">
					<SubmitButton isSubmitting={isSubmitting} label={submitLabel} />
				</div>
			</form>
		</FormProvider>
	);
}
