"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { HeadingPages } from "@/components/common/heading/heading-pages";

import { fakeData } from "./data";
import { CustomersDataTable } from "./components/data-table/customer-data-table";

const data = fakeData();

const CustomerPage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Clientes"
				breadcrumbs={{ title: "Clientes", href: "/customers" }}
				actions={{
					primary: { text: "Importar", href: "/customers/import" },
					secondary: { text: "Cadastrar cliente", href: "/customers/create" },
				}}
			/>

			<div>
				<Card>
					<CardContent className="p-0">
						<CustomersDataTable data={data} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default CustomerPage;
