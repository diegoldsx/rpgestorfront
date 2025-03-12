import { FieldConfig } from "@/app/types/FieldConfig";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Path, FieldValues } from "react-hook-form";

export function renderField<T extends FieldValues>(field: FieldConfig<T>) {
	if (field.id === "id") return null;

	return (
		<FormField<T>
			key={String(field.id)}
			name={field.id as Path<T>}
			render={({ field: fieldProps }) => (
				<FormItem>
					<FormLabel>{field.title}</FormLabel>
					<FormControl>
						{field.type === "select" && field.options ? (
							<Select
								onValueChange={(val) => fieldProps.onChange(val)}
								value={fieldProps.value ?? ""} // ✅ Garante que `value` sempre tenha um valor inicial
							>
								<SelectTrigger>
									<SelectValue placeholder="Selecione uma opção" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="" disabled className="text-gray-400">
										Selecione uma opção
									</SelectItem>

									{field.options.map((option) => (
										<SelectItem key={String(option.value)} value={String(option.value)}>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						) : (
							<Input type={field.type === "number" ? "number" : "text"} {...fieldProps} />
						)}
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
