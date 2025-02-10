"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

interface InputTextProps {
	label: string;
	name: string;
	control: any;
	rules?: object;
	placeholder?: string;
	type?: string;
}

export default function InputText({
	label,
	name,
	control,
	rules,
	placeholder,
	type = "text",
}: InputTextProps) {
	return (
		<div>
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
