import React, { useState } from "react";

const FileUpload: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setFile(event.target.files[0]);
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {};

			reader.readAsText(file);
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center p-4  bg-white"
		>
			<label
				className="mb-2 text-lg font-semibold text-gray-700"
				htmlFor="file-upload"
			>
				Selecione um arquivo CSV:
			</label>
			<div className="">
				<input
					id="file-upload"
					type="file"
					onChange={handleFileChange}
					accept=".csv"
					className="mb-4 mr-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600 transition duration-200"
				>
					Enviar
				</button>
			</div>
		</form>
	);
};

export default FileUpload;
