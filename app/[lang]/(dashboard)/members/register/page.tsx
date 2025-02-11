"use client";

import { useState } from "react";
import CPFMemberForm from "./components/CPFForm";
import CNPJMemberForm from "./components/CNPJForm";

export default function MemberRegistration() {
	const [formType, setFormType] = useState<"cpf" | "cnpj">("cpf");

	return (
		<div className="max-w-7xl mx-auto p-6 shadow-md bg-white">
			<h1 className="text-center text-xl font-bold text-gray-800">
				Cadastro de Membros
			</h1>

			<div className="flex justify-center space-x-6 mb-6">
				<label className="flex items-center space-x-2 cursor-pointer">
					<input
						type="radio"
						value="cpf"
						checked={formType === "cpf"}
						onChange={() => setFormType("cpf")}
						className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
					/>
					<span className="text-gray-700">CPF</span>
				</label>

				<label className="flex items-center space-x-2 cursor-pointer">
					<input
						type="radio"
						value="cnpj"
						checked={formType === "cnpj"}
						onChange={() => setFormType("cnpj")}
						className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
					/>
					<span className="text-gray-700">CNPJ</span>
				</label>
			</div>

			{formType === "cpf" ? <CPFMemberForm /> : <CNPJMemberForm />}
		</div>
	);
}
