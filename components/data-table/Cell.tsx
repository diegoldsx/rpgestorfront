import React, { ReactNode } from "react";

type CellValueProps = {
	children: string | ReactNode;
	className?: string;
	title?: string;
};

const Cell: React.FC<CellValueProps> = ({ children, className, title }) => {
	return <div className={className} >{children ?? "N/A"}</div>; //
};

export default Cell;
