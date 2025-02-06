import React from "react";

interface StatusBadgeProps {
	status: "ATIVO" | "INATIVO" | "PENDENTE";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
	const statusStyles: Record<StatusBadgeProps["status"], string> = {
		ATIVO: "bg-green-600 text-white",
		INATIVO: "bg-red-600 text-white",
		PENDENTE: "bg-orange-600 text-white",
	};

	return (
		<span className={`px-2 py-1 rounded text-xs  ${statusStyles[status]}`}>
			{status}
		</span>
	);
};
