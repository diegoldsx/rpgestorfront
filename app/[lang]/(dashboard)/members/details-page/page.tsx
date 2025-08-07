"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { GenericForm } from "@/components/form/GenericForm";
import { fakeMembers } from "@/types/Member";
import { Tabs, TabList, Tab, TabPanel } from "@/components/Tabs";
import { Home, FileIcon, Paperclip, DollarSign } from "lucide-react";
import { RadioGroup } from "@/components/RadioButton";
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

type MemberFormData = IndividualType | CompanyType;
type MemberKind = "individual" | "company";

const tabItems = [
	{ value: "insert", label: "Home", icon: Home },
	{ value: "dependents", label: "Dependentes", icon: FileIcon },
	{ value: "occurrences", label: "Ocorrências", icon: Paperclip },
	{ value: "finance", label: "Financeiro", icon: DollarSign },
] as const;

export default function DetailsPage() {
	const router = useRouter();
	const memberId = useSearchParams().get("id");
	const [selectedType, setSelectedType] = useState<MemberKind>("individual");
	const [member, setMember] = useState<MemberFormData | null>(null);

	useEffect(() => {
		if (!memberId) return;
		const found = fakeMembers.find((m) => m.id === memberId) ?? null;
		setMember(found);
		if (found) setSelectedType(found.type);
	}, [memberId]);

	const handleSubmit: SubmitHandler<MemberFormData> = (data) => {
		console.log("Enviado", data);
		router.push("/members");
	};

	return (
		<div className="max-w-5xl mx-auto p-6 space-y-8">
			<h1 className="text-2xl font-bold text-center">Cadastro de Associado</h1>
			<Tabs defaultValue="insert">
				<TabList>
					{tabItems.map((tab) => (
						<Tab key={tab.value} value={tab.value} icon={tab.icon}>
							{tab.label}
						</Tab>
					))}
				</TabList>

				<TabPanel value="insert">
					<div className="space-y-6">
						<fieldset className="flex items-center gap-6">
							<legend className="sr-only">Tipo de Associado</legend>
							<RadioGroup
								name="memberType"
								value={selectedType}
								onValueChange={setSelectedType}
								options={[
									{ value: "individual", label: "Pessoa Física" },
									{ value: "company", label: "Pessoa Jurídica" },
								]}
								disabledValues={member?.type ? [member.type] : []}
							/>
						</fieldset>

						{selectedType === "individual" ? (
							<GenericForm<IndividualType>
								key="individual"
								schema={individualSchema}
								defaultValues={individualDefaultValues}
								fields={individualFields}
								onSubmit={handleSubmit}
								data={member as Partial<IndividualType> | undefined}
							/>
						) : (
							<GenericForm<CompanyType>
								key="company"
								schema={companySchema}
								defaultValues={companyDefaultValues}
								fields={companyFields}
								onSubmit={handleSubmit}
								data={member as Partial<CompanyType> | undefined}
							/>
						)}
					</div>
				</TabPanel>

				<TabPanel value="dependents">
					<p>Implementar Dependentes</p>
				</TabPanel>
				<TabPanel value="occurrences">
					<p>Implementar Ocorrências</p>
				</TabPanel>
				<TabPanel value="finance">
					<p>Implementar Financeiro</p>
				</TabPanel>
			</Tabs>
		</div>
	);
}
