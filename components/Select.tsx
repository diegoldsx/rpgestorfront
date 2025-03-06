// components/Select.tsx
import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef } from "react";
import { Path, useFormContext } from "react-hook-form";
import { ChevronDown } from "lucide-react"; // Importe o ícone
import { Option } from "@/app/types/FieldConfig";

interface SelectProps<T> {
	id: string;
	name: Path<T>;
	options: Option<string>[];
	placeholder?: string;
}

const Select = forwardRef<HTMLButtonElement, SelectProps<any>>(({ id, name, options, placeholder = "Selecione uma opção" }, ref) => {
	const {
		register,
		setValue,
		watch,
		formState: { errors },
	} = useFormContext();
	const value = watch(name);

	return (
		<SelectPrimitive.Root onValueChange={(newValue) => setValue(name, newValue)} defaultValue={value}>
			<SelectPrimitive.Trigger
				ref={ref}
				id={id}
				aria-label={id}
				className="inline-flex items-center justify-between rounded-sm px-4 py-2 text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[placeholder]:text-muted-foreground w-full bg-white border border-gray-300  hover:bg-gray-50 transition-all duration-200"
			>
				<SelectPrimitive.Value placeholder={placeholder} className="text-black" />
				<SelectPrimitive.Icon asChild>
					<ChevronDown className="w-4 h-4 text-black transition-transform duration-200 group-data-[state=open]:rotate-180" />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					className="overflow-hidden rounded-md bg-white text-black shadow-lg border border-gray-200 min-w-[var(--radix-select-trigger-width)]"
					sideOffset={5}
				>
					<SelectPrimitive.Viewport className="p-1">
						{options.map((option) => (
							<SelectPrimitive.Item
								key={option.value}
								value={option.value}
								textValue={option.label}
								className="relative flex cursor-default select-none items-center rounded-sm px-3 py-2 text-sm outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-black data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-50 transition-colors duration-200"
							>
								<SelectPrimitive.ItemText className="flex-1">{option.label}</SelectPrimitive.ItemText>
							</SelectPrimitive.Item>
						))}
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
});

Select.displayName = "Select";

export default Select;
