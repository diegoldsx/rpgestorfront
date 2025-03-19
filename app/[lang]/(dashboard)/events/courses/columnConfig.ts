import { FieldConfig as Field } from "@/app/types/FieldConfig";

import { VisibilityState } from "@tanstack/react-table";
import { Assembly } from "@/types/assembly/assembly";

export const options = {
	status: [
		{ value: "active", label: "Ativo" },
		{ value: "inactive", label: "Inativo" },
	],
};

export const columnConfig: Field<Assembly>[] = [
	{ id: "id", title: "ID" },
	{ id: "name", title: "Nome" },
	{ id: "status", title: "Status", options: [...options.status] },
	{ id: "startDate", title: "Data início" },
	{ id: "endDate", title: "Data final" },
	{ id: "resultDate", title: "Data resultado" },
	{ id: "description", title: "Descrição" },
	{ id: "type", title: "Tipo" },
	{ id: "allowChangeVote", title: "Permite mudar voto" },
	{ id: "displayMode", title: "Modo de display" },
	{ id: "videoConference", title: "Vídeo Conferência" },
];

export const facetedFilters = columnConfig.filter(({ options }) => !!options);

const visibleColumns: ReadonlyArray<string> = ["*"];

export const visibilityState: VisibilityState = Object.fromEntries(
	columnConfig.map(({ id }) => [id, visibleColumns.includes(id) || visibleColumns[0] === "*"])
);
