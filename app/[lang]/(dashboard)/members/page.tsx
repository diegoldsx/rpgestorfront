import { DataTable } from "@/components/common/data-table/data-table";
import { PageLayout } from "@/components/common/page/PageLayout";
import { fakeMembers } from "@/types/Member";
import { memberCols } from "./components/columnSchema";

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
			{fakeMembers && <DataTable data={fakeMembers} columns={memberCols} />}
		</PageLayout>
	);
};

export default Page;
