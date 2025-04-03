import React, { ReactNode } from "react";

type CellValueProps = {
	children: string | ReactNode;
	className?: string;
	title?: any;
};

const Cell: React.FC<CellValueProps> = ({ children, className, title }) => {
	return (
		<p title={title} className={className + " w-full outline"}>
			{children ?? "N/A"}
		</p>
	); //
};

export default Cell;
