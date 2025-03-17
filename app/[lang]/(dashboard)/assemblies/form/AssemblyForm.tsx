"use client";

import { z } from "zod";
import { useForm, SubmitHandler, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@radix-ui/react-form";
import Select from "@/components/Select";
import { useEffect } from "react";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { AssemblySchema, AssemblySchemaType } from "@/schemas/assemblySchema";
import { options } from "../columnConfig";

interface Props {
	onSubmit: SubmitHandler<AssemblySchemaType>;
	data?: Partial<AssemblySchemaType>;
}

export function AssemblyForm({ onSubmit, data }: Props) {
	const methods = useForm<AssemblySchemaType>({
		resolver: zodResolver(AssemblySchema),
		defaultValues: data
			? {
					id: data.id,
					name: data.name || "",
					status: data.status || "active",
					endDate: data.endDate || "",
					startDate: data.startDate || "",
					allowChangeVote: data.allowChangeVote || "",
					description: data.description || "",
					displayMode: data.displayMode || "",
					resultDate: data.resultDate || "",
					type: data.type || "",
					videoConference: data.videoConference || "",
			  }
			: {
					id: undefined,
					name: "",
					status: "active",
					allowChangeVote: "false",
					videoConference: "false",
					displayMode: "",
					type: "",
					description: "",
					startDate: "",
					endDate: "",
					resultDate: "",
			  },
	});

	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
	} = methods;

	useEffect(() => {
		if (data) {
			reset(data);
		}
	}, [data, reset]);

	return (
		<FormProvider {...methods}>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit(onSubmit)(event);
				}}
				className="grid grid-cols-1 md:grid-cols-2 gap-4"
			>
				<FormFieldComponent name="name" label="Nome" control={control} errors={errors} />

				<FormFieldComponent name="status" label="Status" control={control} errors={errors} placeholder="Selecione o status">
					<Select options={options.status} />
				</FormFieldComponent>
				<FormFieldComponent name="startDate" label="Data início" control={control} errors={errors} />
				<FormFieldComponent name="endDate" label="Data fim" control={control} errors={errors} />
				<FormFieldComponent name="resultDate" label="Data resultado" control={control} errors={errors} />
				<FormFieldComponent name="description" label="Descrição" control={control} errors={errors} />
				<FormFieldComponent name="type" label="Tipo" control={control} errors={errors} />
				<FormFieldComponent name="displayMode" label="Modo display" control={control} errors={errors} />
				<FormFieldComponent name="allowChangeVote" label="Mudar voto" control={control} errors={errors} />
				<FormFieldComponent name="videoConference" label="Vídeo Conferencia" control={control} errors={errors} />

				<div className="md:col-span-2 mt-6 flex justify-end">
					<SubmitButton isSubmitting={isSubmitting} isUpdate={!!data} />
				</div>
			</Form>
		</FormProvider>
	);
}
