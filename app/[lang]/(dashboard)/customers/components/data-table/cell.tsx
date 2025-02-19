import React, { ReactNode } from "react";

type CellValueProps = {
	children: ReactNode;
};

const Cell: React.FC<CellValueProps> = ({ children }) => {
	return children ?? <span>N/A</span>; //
};

export default Cell;
