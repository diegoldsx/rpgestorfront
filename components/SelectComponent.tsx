import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import React from "react";

interface SelectProps {
	options: { value: string; label: string }[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
}

export const SelectComponent = React.forwardRef<HTMLButtonElement, SelectProps & React.ComponentPropsWithRef<"button">>(
	({ options, value, onChange, placeholder, disabled = false, ...rest }, ref) => {
		return (
			<Select.Root value={value} onValueChange={onChange} disabled={disabled}>
				<Select.Trigger
					{...rest}
					disabled={disabled}
					className={`flex items-center justify-between w-full  px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition ${
						disabled
							? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-300"
							: "border-gray-300 focus:ring-blue-500 bg-white"
					}`}
				>
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
									disabled={disabled}
									className={`flex items-center px-3 py-2 text-sm rounded-md focus:outline-none ${
										disabled ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100 focus:bg-gray-100"
									}`}
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
);

SelectComponent.displayName = "SelectComponent";
