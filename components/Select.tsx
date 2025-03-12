import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";

interface SelectProps {
	options: { value: string; label: string }[];
	value?: string; // 🔹 Permite que o valor inicial seja indefinido
	onChange: (value: string) => void;
	placeholder?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(({ options, value, onChange, placeholder }, ref) => {
	return (
		<RadixSelect.Root value={value} onValueChange={onChange}>
			<RadixSelect.Trigger
				ref={ref}
				className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
				<RadixSelect.Value placeholder={placeholder || "Selecione..."} />
				<RadixSelect.Icon>
					<ChevronDown className="h-4 w-4 text-gray-500" />
				</RadixSelect.Icon>
			</RadixSelect.Trigger>

			<RadixSelect.Portal>
				<RadixSelect.Content className="bg-white border border-gray-300 rounded-md shadow-lg" position="popper">
					<RadixSelect.Viewport className="p-2">
						{options.map((option) => (
							<RadixSelect.Item
								key={option.value}
								value={option.value}
								className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
							>
								<RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
								<RadixSelect.ItemIndicator className="ml-auto">
									<Check className="h-4 w-4 text-blue-500" />
								</RadixSelect.ItemIndicator>
							</RadixSelect.Item>
						))}
					</RadixSelect.Viewport>
				</RadixSelect.Content>
			</RadixSelect.Portal>
		</RadixSelect.Root>
	);
});

Select.displayName = "Select"; // 🔹 Importante para debugging com ForwardRef

export default Select;
