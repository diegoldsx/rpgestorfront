"use client";

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
	return (
		<div className="border rounded-md mb-6">
			<div className="bg-gray-100 p-4">
				<h2 className="text-lg font-semibold text-slate-700">{title}</h2>
			</div>
			<div className="p-4 flex flex-col gap-2">{children}</div>
		</div>
	);
}
