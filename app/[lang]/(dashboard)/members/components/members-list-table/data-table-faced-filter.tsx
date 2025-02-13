import * as React from "react";
import { Icon } from "@iconify/react";
import { Check } from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DataTableFacetedFilter({
	column,
	title,
	options,
	iconName,
}: {
	column: any;
	title: string;
	options: { value: string; label: string }[];
	iconName: string;
}) {
	const selectedValues = new Set(column?.getFilterValue() ?? []);

	const selectedLabels = options
		.filter((option) => selectedValues.has(option.value))
		.map((option) => option.label);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					size="sm"
					className="w-full flex items-center rounded-sm justify-between  hover:text-white transition-colors"
				>
					<div className="flex items-center">
						<Icon icon={iconName} className="h-5 w-5 mr-2" />
						<span>{title}</span>
					</div>
					{selectedValues.size > 0 && (
						<span className="text-xs ml-1">{`(${selectedValues.size})`}</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="max-w-[200px] p-2">
				<Command>
					<CommandList>
						<CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
						<CommandGroup>
							{options.map((option) => {
								const isSelected = selectedValues.has(option.value);
								return (
									<CommandItem
										key={option.value}
										onSelect={() => {
											if (isSelected) {
												selectedValues.delete(option.value);
											} else {
												selectedValues.add(option.value);
											}
											const filterValues = Array.from(selectedValues);
											column?.setFilterValue(
												filterValues.length ? filterValues : undefined
											);
										}}
									>
										<div
											className={`mr-2 flex h-4 w-4 items-center justify-center rounded-sm border ${
												isSelected
													? "bg-primary text-primary-foreground"
													: "opacity-50"
											}`}
										>
											{isSelected && <Check className="h-4 w-4" />}
										</div>
										<span>{option.label}</span>
									</CommandItem>
								);
							})}
						</CommandGroup>
						{selectedValues.size > 0 && (
							<>
								<CommandSeparator />
								<CommandGroup>
									<CommandItem
										onSelect={() => column?.setFilterValue(undefined)}
										className="justify-center"
									>
										Limpar filtros
									</CommandItem>
								</CommandGroup>
							</>
						)}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
