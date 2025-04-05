import React, { ReactNode } from "react";

type CellValueProps = {
	children: string | ReactNode;
	className?: string;
	title?: any;
};

const Cell: React.FC<CellValueProps> = ({ children, className, title }) => {
	return (
		<span title={title} className={className + " w-full"}>
			{children ?? "N/A"}
		</span>
	); 
};

export default Cell;
