"use client";

import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HeadingPages } from "@/components/common/heading/heading-pages";
import { columns } from "./columns";
import { FAKE_DATA } from "./data";
import { SimpleTable } from "@/components/common/simple-table";

const ServicePage = () => {
	return (
		<Fragment>
			<HeadingPages
				title="Tipos de serviço"
				breadcrumbs={{
					title: "Convênio",
					href: "/partnership/",
				}}
			/>

			<div className="mt-3">
				<Card>
					<CardContent>
						<SimpleTable data={FAKE_DATA} columns={columns} />
					</CardContent>
				</Card>
			</div>
		</Fragment>
	);
};

export default ServicePage;
