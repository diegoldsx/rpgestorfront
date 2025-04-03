import React, { ReactNode } from "react";

type CellValueProps = {
	children: string | ReactNode;
	className?: string;
	title?: string;
};

const Cell: React.FC<CellValueProps> = ({ children, className, title }) => {
	return (
		<p title={title} className={className}>
			{children ?? "N/A"}
		</p>
	); //
};

export default Cell;
