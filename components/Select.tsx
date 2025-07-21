import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { Option } from "@/types/options/Option";

interface SelectProps {
	options: Option[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	name?: string;
	label?: string;
	id?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
	({ options, value, onChange, placeholder, name, label, id, ...props }, ref) => {
		const generatedId = React.useId();
		const selectId = id || generatedId;

		return (
			<RadixSelect.Root value={value} onValueChange={onChange} name={name}>
				<div>
					{label && (
						// Removido a tag <p> aqui. Aplicar classes diretamente na label.
						<label
							htmlFor={selectId}
							className="block text-sm font-medium text-gray-700 mb-1" // Usando mb-1 para um pequeno espaçamento
						>
							{label}
						</label>
					)}
					<RadixSelect.Trigger
						ref={ref}
						id={selectId}
						className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						aria-label={label || placeholder || "Selecione uma opção"}
						{...props}
					>
						<RadixSelect.Value className="text-gray-800" placeholder={placeholder || "Selecione..."} />
						<RadixSelect.Icon>
							<ChevronDown className="h-4 w-4 text-gray-500" />
						</RadixSelect.Icon>
					</RadixSelect.Trigger>

				</div>


				<RadixSelect.Portal>
					<RadixSelect.Content
						className="bg-white border border-gray-300 rounded-md shadow-lg z-50"
						position="popper"
						sideOffset={5}
					>
						<RadixSelect.Viewport className="p-2 max-h-[300px] overflow-y-auto">
							{options.map((option) => (
								<RadixSelect.Item
									key={option.value}
									value={option.value}
									className="flex items-center px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none data-[state=checked]:font-semibold data-[state=checked]:text-blue-600"
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
	}
);

Select.displayName = "Select";

export default Select;
