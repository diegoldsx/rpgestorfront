import React, { ReactNode } from "react";

type CellValueProps = {
	children: string | ReactNode;
	className?: string;
};

const Cell: React.FC<CellValueProps> = ({ children, className }) => {
	return <span className={className}>{children ?? "N/A"}</span>;
};

export default Cell;
