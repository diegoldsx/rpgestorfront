import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAnnouncementsAction } from "@/action/email-marketing/getAnncouncements";
import { EmailType, STATUS_LABEL_MAP } from "@/types/Email";
import DonutChart from "@/components/charts/DonutChart";

export default function AnnouncementsStatusChart() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["announcements"],
		queryFn: () => getAnnouncementsAction(),
	});

	const labels = STATUS_LABEL_MAP ? Object.values(STATUS_LABEL_MAP) : ["Ativo", "Inativo", "Pendente"];

	console.log(data);
	return (
		<>
			<DonutChart series={[1, 2, 3]} labels={labels} height={320} innerSizePercent={70} />
		</>
	);
}
