"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

interface InputFieldProps {
	label: string;
	name: string;
	control: any;
	placeholder?: string;
	type: "text" | "number" | "textarea" | "date" | "select";
	rules?: object;
}

export default function InputField({
	label,
	name,
	control,
	placeholder = "",
	type = "text",
	rules,
}: InputFieldProps) {
	return (
		<div className="space-y-2">
			<Label htmlFor={name}>{label}</Label>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field, fieldState: { error } }) => (
					<>
						<Input
							id={name}
							type={type}
							{...field}
							placeholder={placeholder}
							className="border border-gray-300 rounded-md p-2 w-full focus:ring-blue-500 focus:border-blue-500"
						/>
						{error && (
							<p className="text-red-500 text-sm mt-1">{error.message}</p>
						)}
					</>
				)}
			/>
		</div>
	);
}
