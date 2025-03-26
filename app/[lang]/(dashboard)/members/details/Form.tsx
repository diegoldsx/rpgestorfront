// Updated content with references to member
// Original content from assemblies/details/Form.tsx

"use client";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@radix-ui/react-form";
import { useEffect } from "react";
import { FormFieldComponent } from "@/components/FormFieldComponent";
import { SubmitButton } from "@/components/SubmitButton";
import { columnConfig, defaultValues } from "../components/columnHelper";
import { MemberSchemaType, MemberSchema } from "@/types/member";
import Select from "@/components/Select";

interface Props {
	onSubmit: SubmitHandler<MemberSchemaType>;
	data?: Partial<MemberSchemaType>;
}

export function MemberForm({ onSubmit, data }: Props) {
	const methods = useForm<MemberSchemaType>({
		resolver: zodResolver(MemberSchema),
		defaultValues: data ? { ...defaultValues, ...data } : defaultValues,
	});

	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		reset,
	} = methods;

	useEffect(() => {
		if (data) {
			reset({ ...defaultValues, ...data });
		}
	}, [data, reset]);
	return (
		<FormProvider {...methods}>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit(onSubmit)(event);
				}}
				className="grid grid-cols-1 md:grid-cols-3 gap-5"
			>
				{columnConfig.map(({ id, title, options }) => (
					<FormFieldComponent
						key={id}
						name={id}
						label={title}
						control={control}
						errors={errors}
					>
						{options && <Select options={options} />}
					</FormFieldComponent>
				))}
				<SubmitButton isSubmitting={isSubmitting} isUpdate={!!data} />
			</Form>
		</FormProvider>
	);
}
