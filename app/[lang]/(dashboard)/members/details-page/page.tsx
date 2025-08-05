"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { GenericForm } from "@/components/form/GenericForm";
import { fakeMembers, MemberType } from "@/types/Member";
import {
	fields as individualFields,
	individualDefaultValues,
	individualSchema,
	type IndividualType,
} from "../components/individualFormFields";
import {
	fields as companyFields,
	companyDefaultValues,
	companySchema,
	type CompanyType,
} from "../components/companyFormFields";

export default function DetailsPage() {
	const memberId = useSearchParams().get("id");
	const [selectedType, setSelectedType] = useState<"individual" | "company">("individual");
	const [member, setMember] = useState<MemberType | null>(null);
	const router = useRouter();

	useEffect(() => {
		if (!memberId) return;
		const found = fakeMembers.find((m) => m.id === memberId) ?? null;
		setMember(found);
		if (found) setSelectedType(found.type);
	}, [memberId]);

	const handleSubmit: SubmitHandler<IndividualType | CompanyType> = (data) => {
		console.log("Enviado", data);
		router.push("/members");
	};

	const options = [
		{ value: "individual", label: "Pessoa Física" },
		{ value: "company", label: "Pessoa Jurídica" },
	] as const;

	return (
		<div className="max-w-5xl mx-auto p-6 space-y-8">
			<h1 className="text-2xl font-bold text-center">Cadastro de Associado</h1>

			<div className="flex justify-center gap-4">
				{options.map(({ value, label }) => {
					const disabled = member?.type && member.type !== value;
					return (
						<label
							key={value}
							className={cn(
								"flex items-center px-4 py-2 rounded-lg border cursor-pointer select-none",
								selectedType === value
									? "bg-blue-600 text-white border-blue-600"
									: "bg-white text-gray-700 border-gray-300 hover:bg-gray-100",
								disabled && "opacity-50 cursor-not-allowed"
							)}
						>
							<input
								type="radio"
								name="memberType"
								value={value}
								className="hidden"
								checked={selectedType === value}
								onChange={() => setSelectedType(value)}
								disabled={disabled}
							/>
							{label}
						</label>
					);
				})}
			</div>

			{selectedType === "individual" ? (
				<GenericForm<IndividualType>
					schema={individualSchema}
					defaultValues={individualDefaultValues}
					fields={individualFields}
					onSubmit={handleSubmit}
					data={(member as Partial<IndividualType>) ?? undefined}
				/>
			) : (
				<GenericForm<CompanyType>
					schema={companySchema}
					defaultValues={companyDefaultValues}
					fields={companyFields}
					onSubmit={handleSubmit}
					data={(member as Partial<CompanyType>) ?? undefined}
				/>
			)}
		</div>
	);
}
