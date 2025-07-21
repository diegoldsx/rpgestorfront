"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { FaFont, FaAlignLeft, FaList, FaCalendarAlt, FaTrash } from "react-icons/fa";
import { DatePicker } from "@/components/date-picker";

interface Field {
	id: string;
	label: string;
	type: "text" | "textarea" | "select" | "date";
	placeholder?: string;
	required?: boolean;
	maxLines?: number;
	options?: string[];
}

const fieldTypes: {
	type: "text" | "textarea" | "select" | "date";
	label: string;
	icon: JSX.Element;
}[] = [
	{ type: "text", label: "Texto", icon: <FaFont /> },
	{ type: "textarea", label: "Área de Texto", icon: <FaAlignLeft /> },
	{ type: "select", label: "Seleção Única", icon: <FaList /> },
	{ type: "date", label: "Data", icon: <FaCalendarAlt /> },
];

export default function FormBuilder() {
	const [fields, setFields] = useState<Field[]>([]);
	const [selectedType, setSelectedType] = useState<string | null>(null);
	const [newField, setNewField] = useState<Field>({
		id: "",
		label: "",
		type: "text",
		placeholder: "",
		required: false,
		options: [],
	});
	const [newOption, setNewOption] = useState<string>("");

	const addField = () => {
		if (!newField.id || !newField.label) {
			alert("Preencha o ID e o Nome do Campo!");
			return;
		}

		setFields([...fields, newField]);
		setNewField({
			id: "",
			label: "",
			type: "text",
			placeholder: "",
			required: false,
			options: [],
		});
		setSelectedType(null);
	};

	const removeField = (id: string) => {
		setFields(fields.filter((field) => field.id !== id));
	};

	const addOption = () => {
		if (newOption.trim()) {
			setNewField({
				...newField,
				options: [...(newField.options || []), newOption.trim()],
			});
			setNewOption("");
		}
	};

	return (
		<div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
			<h2 className="text-2xl font-bold text-gray-800 mb-4">Construtor de Formulário</h2>

			<div className="grid grid-cols-2 gap-4 mb-6">
				{fieldTypes.map((field) => (
					<Card
						key={field.type}
						onClick={() => {
							setSelectedType(field.type);
							setNewField({ ...newField, type: field.type });
						}}
						className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-all"
					>
						<span className="text-2xl">{field.icon}</span>
						<span className="mt-2 text-sm font-medium">{field.label}</span>
					</Card>
				))}
			</div>

			{selectedType && (
				<div className="border p-4 rounded-md bg-gray-50 mb-6">
					<h3 className="text-lg font-semibold mb-2">
						Adicionar {fieldTypes.find((f) => f.type === selectedType)?.label}
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<Label>ID do Campo</Label>
							<Input
								value={newField.id}
								onChange={(e) => setNewField({ ...newField, id: e.target.value })}
								placeholder="Ex: campo_nome"
							/>
						</div>
						<div>
							<Label>Nome do Campo</Label>
							<Input
								value={newField.label}
								onChange={(e) => setNewField({ ...newField, label: e.target.value })}
								placeholder="Nome visível do campo"
							/>
						</div>
						<div>
							<Label>Placeholder</Label>
							<Input
								value={newField.placeholder}
								onChange={(e) => setNewField({ ...newField, placeholder: e.target.value })}
								placeholder="Texto do placeholder"
							/>
						</div>
						<div>
							<Label>Campo Obrigatório</Label>
							<input
								type="checkbox"
								checked={newField.required}
								onChange={(e) => setNewField({ ...newField, required: e.target.checked })}
							/>
						</div>

						{newField.type === "textarea" && (
							<div>
								<Label>Número Máximo de Linhas</Label>
								<Input
									type="number"
									value={newField.maxLines || ""}
									onChange={(e) =>
										setNewField({
											...newField,
											maxLines: Number(e.target.value),
										})
									}
									placeholder="Ex: 5"
								/>
							</div>
						)}

						{newField.type === "select" && (
							<div>
								<Label>Opções</Label>
								<div className="flex gap-2">
									<Input
										value={newOption}
										onChange={(e) => setNewOption(e.target.value)}
										placeholder="Adicionar opção"
									/>
									<Button onClick={addOption}>Adicionar</Button>
								</div>
								<ul className="mt-2 list-disc pl-6">
									{newField.options?.map((option, index) => (
										<li key={index}>{option}</li>
									))}
								</ul>
							</div>
						)}
					</div>

					<div className="flex justify-between mt-4">
						<Button onClick={addField}>Adicionar Campo</Button>
						<Button variant="outline" onClick={() => setSelectedType(null)}>
							Cancelar
						</Button>
					</div>
				</div>
			)}

			{fields.length > 0 && (
				<div className="space-y-4 mt-6">
					<h3 className="text-lg font-semibold mb-2">Campos Adicionados</h3>
					{fields.map((field) => (
						<div key={field.id} className="border p-4 rounded-md relative">
							<Label htmlFor={field.id}>
								{field.label} {field.required && <span className="text-red-500">*</span>}
							</Label>

							{field.type === "text" && (
								<Input id={field.id} placeholder={field.placeholder} required={field.required} />
							)}
							{field.type === "textarea" && (
								<Textarea
									id={field.id}
									rows={field.maxLines || 3}
									placeholder={field.placeholder}
									required={field.required}
								/>
							)}
							{field.type === "select" && (
								<Select>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Selecione uma opção" />
									</SelectTrigger>
									<SelectContent>
										{field.options?.map((option, index) => (
											<SelectItem key={index} value={option}>
												{option}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							)}
							{field.type === "date" && <DatePicker name={field.id} />}

							<button
								type="button"
								onClick={() => removeField(field.id)}
								className="absolute top-2 right-2 text-red-500 flex items-center gap-1"
							>
								<FaTrash /> Remover
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
