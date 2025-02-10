"use client";
import { useState } from "react";
import CPFMemberForm from "./register/components/CPFForm";
import CNPJMemberForm from "./register/components/CNPJForm";

const FormSwitcher = () => {
	const [formType, setFormType] = useState("cpf");

	return (
		<div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
			<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
				Selecione o Tipo de Cadastro
			</h2>

			{/* Radio Button Group */}
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

			{/* Renderiza CPF ou CNPJ Form */}
			<div className="mt-8">
				{formType === "cpf" ? <CPFMemberForm /> : <CNPJMemberForm />}
			</div>
		</div>
	);
};

export default FormSwitcher;
