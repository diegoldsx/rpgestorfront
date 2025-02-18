import React, { ReactNode } from "react";

type CellRendererProps = {
	children: ReactNode;
};

const Cell: React.FC<CellRendererProps> = ({ children }) => {
	return <span>{children ?? "N/A"}</span>; //
};

export default Cell;
