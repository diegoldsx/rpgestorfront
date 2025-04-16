'use client';

import { BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { LucideImport, Plus } from 'lucide-react';
import Link from 'next/link';

type HeadingPagesProps = {
	title: string;
	description?: string;
	breadcrumbs: {
		title: string;
		href: string;
	};
	actions?: {
		primary?: {
			text: string;
			onClick?: () => void;
			href?: string;
		};
		secondary?: {
			text: string;
			onClick?: () => void;
			href?: string;
		};
	};
};

export const HeadingPages = ({
	title,
	description,
	breadcrumbs,
	actions,
}: HeadingPagesProps) => {
	return (
		<div>
			<div className="flex flex-wrap mb-4">
				<div className="flex-none">
					<Breadcrumbs>
						<BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
						<BreadcrumbItem href={breadcrumbs.href}>{breadcrumbs.title}</BreadcrumbItem>
					</Breadcrumbs>
				</div>
			</div>

			<div className="flex justify-between  items-center mb-2">
				<div className="flex-1">
					<h2 className="text-2xl font-bold text-default-900">{title}</h2>
					{description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
				</div>

				<div className="flex items-center gap-4">
					{actions?.primary && (
						<Button variant="outline" asChild onClick={actions.primary.onClick}>
							<Link href={actions.primary.href || '#'}>
								<LucideImport className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
								{actions.primary.text}
							</Link>
						</Button>
					)}

					{actions?.secondary && (
						<Button asChild onClick={actions.secondary.onClick}>
							<Link href={actions.secondary.href || '#'}>
								<Plus className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
								{actions.secondary.text}
							</Link>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
