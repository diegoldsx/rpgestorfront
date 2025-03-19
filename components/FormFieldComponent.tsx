import React from "react";
import { Controller } from "react-hook-form";
import {
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from "@radix-ui/react-form";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";

interface FormFieldComponentProps {
	name: string;
	label: string;
	control: any;
	errors: any;
	placeholder?: string;
	type?: string;
	children?: ReactNode;
}

export const FormFieldComponent: React.FC<FormFieldComponentProps> = ({
	name,
	label,
	control,
	errors,
	placeholder,
	type = "text",
	children,
}) => {
	if (["id", "actions"].includes(name)) return;
	return (
		<FormField name={name}>
			<FormLabel>{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<FormControl asChild>
						{children ? (
							React.cloneElement(children as React.ReactElement, { ...field })
						) : (
							<Input {...field} placeholder={placeholder} type={type} />
						)}
					</FormControl>
				)}
			/>
			{errors[name] && (
				<FormMessage className="text-red-500">
					{errors[name].message}
				</FormMessage>
			)}
		</FormField>
	);
};
