"use client";

import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from "@/components/ui/select";

interface SelectProps {
	label: string;
	name: string;
	control: any;
	options: { value: string; label: string }[];
	placeholder?: string;
	rules?: object;
}

export default function SelectField({
	label,
	name,
	control,
	options,
	placeholder = "Selecione...",
	rules,
}: SelectProps) {
	return (
		<div>
			<Label htmlFor={name}>{label}</Label>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field, fieldState: { error } }) => (
					<>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<SelectTrigger className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
							<SelectContent>
								{options.map((option) => (
									<SelectItem key={option.value} value={option.value}>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{error && (
							<p className="text-red-500 text-sm mt-1">{error.message}</p>
						)}
					</>
				)}
			/>
		</div>
	);
}
