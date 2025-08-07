import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./components/columns";
import { PageLayout } from "@/components/common/page/PageLayout";
import { fakeMembers } from "@/types/Member";

const Page = () => {
	return (
		<PageLayout
			title="Associados"
			headerActions={{
				secondary: {
					text: "Registrar associado",
					href: "members/details-page",
				},
			}}
		>
			{fakeMembers && <DataTable data={fakeMembers} columns={columns} />}
		</PageLayout>
	);
};

export default Page;
