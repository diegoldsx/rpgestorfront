"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Column } from "@tanstack/react-table";

interface DataTableFacetedFilterProps {
	column: Column<any, unknown>;
	title: string;
	options: { value: string; label: string }[];
}

export function DataTableFacetedFilter({
	column,
	title,
	options,
}: DataTableFacetedFilterProps) {
	const selectedValues = new Set(column.getFilterValue() as string[]);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" size="sm" className="w-full">
					{title}
					{selectedValues.size > 0 && (
						<>
							<Separator orientation="vertical" className="mx-2 h-4" />
							<Badge variant="outline" className="rounded-sm px-1 font-normal">
								{selectedValues.size} selecionado(s)
							</Badge>
						</>
					)}
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
											column.setFilterValue(
												filterValues.length ? filterValues : undefined
											);
										}}
									>
										<div
											className={`mr-2 h-4 w-4 rounded-sm border ${
												isSelected ? "bg-primary text-primary-foreground" : ""
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
										onSelect={() => column.setFilterValue(undefined)}
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
