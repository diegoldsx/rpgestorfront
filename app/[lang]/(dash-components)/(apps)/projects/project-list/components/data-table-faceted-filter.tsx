import * as React from "react";
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
import { Separator } from "@/components/ui/separator";

export function DataTableFacetedFilter({
	column,
	title,
	options,
}: {
	column: any;
	title: string;
	options: { value: string; label: string }[];
}) {
	const selectedValues = new Set(column?.getFilterValue() ?? []);

	const selectedLabels = options
		.filter((option) => selectedValues.has(option.value))
		.map((option) => option.label);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" size="sm" className="w-full">
					{title}
					{selectedLabels.length > 0 ? (
						<div className="ml-2 flex flex-wrap items-center gap-1">
							{selectedLabels.slice(0, 2).map((label) => (
								<Badge key={label} className="rounded-sm px-1 font-normal">
									{label}
								</Badge>
							))}
							{selectedLabels.length > 2 && (
								<Badge className="rounded-sm px-1 font-normal">
									+{selectedLabels.length - 2}
								</Badge>
							)}
						</div>
					) : null}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="max-w-[200px] p-0">
				<Command>
					<CommandInput placeholder={`Filtrar ${title}`} />
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
