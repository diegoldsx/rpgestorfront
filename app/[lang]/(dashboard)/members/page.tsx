import { DataTable } from "@/components/common/data-table/data-table";
import { PageLayout } from "@/components/common/page/PageLayout";
import { fakeMembers } from "@/types/Member";
import { memberCols } from "./components/columnSchema";

const Page = () => {
	const total = Array.isArray(fakeMembers) ? fakeMembers.length : 0;

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
			<div>
				<div className="relative mb-4">
					<div className="absolute right-0 top-0">
						<div className="">
							<div>Total de associados: {total.toLocaleString("pt-BR")}</div>
						</div>
					</div>
				</div>

				{fakeMembers && <DataTable data={fakeMembers} columns={memberCols} />}
			</div>
		</PageLayout>
	);
};

export default Page;
