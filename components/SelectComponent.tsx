"use client";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";

interface SelectProps {
	options: { value: string; label: string }[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export function SelectComponent({ options, value, onChange, placeholder }: SelectProps) {
	return (
		<Select.Root value={value} onValueChange={onChange}>
			<Select.Trigger className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
				<Select.Value placeholder={placeholder || "Selecione..."} />
				<Select.Icon>
					<ChevronDown className="h-4 w-4 text-gray-500" />
				</Select.Icon>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content className="bg-white border border-gray-300 rounded-md shadow-lg">
					<Select.Viewport className="p-2">
						{options.map((option) => (
							<Select.Item
								key={option.value}
								value={option.value}
								className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
							>
								<Select.ItemText>{option.label}</Select.ItemText>
								<Select.ItemIndicator className="ml-auto">
									<Check className="h-4 w-4 text-blue-500" />
								</Select.ItemIndicator>
							</Select.Item>
						))}
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
}
