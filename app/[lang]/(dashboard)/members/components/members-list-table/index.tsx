'use client';
import { Fragment } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { data } from '../../data/data';

export default function MembersListTable() {
	return (
		<Fragment>
			<DataTable data={data} columns={columns} />
		</Fragment>
	);
}
