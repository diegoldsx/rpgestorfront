"use client";
import { Fragment } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { generateFakeMembers } from "../../data/data";

const data = generateFakeMembers();
export default function MembersListTable() {
	return (
		<Fragment>
			<DataTable data={data} columns={columns} />
		</Fragment>
	);
}
