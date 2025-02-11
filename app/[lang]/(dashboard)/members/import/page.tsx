"use client";

import FileUpload from "@/components/FileUpload"; // Importando o componente FileUpload

const ImportPage = () => {
	return (
		<div className="max-w-7xl mx-auto p-6  bg-white">
			<h1 className="text-center text-xl font-bold text-gray-800 mb-4">
				Importar Associados
			</h1>
			<FileUpload />
		</div>
	);
};

export default ImportPage;
