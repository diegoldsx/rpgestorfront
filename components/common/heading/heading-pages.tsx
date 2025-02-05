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
			<div className='flex flex-wrap mb-4'>
				<div className='flex-none'>
					<Breadcrumbs>
						<BreadcrumbItem href='/dashboard'>Dashboard</BreadcrumbItem>
						<BreadcrumbItem href={breadcrumbs.href}>
							{breadcrumbs.title}
						</BreadcrumbItem>
					</Breadcrumbs>
				</div>
			</div>

			<div className='flex   justify-between items-center  mb-6'>
				<h2 className='text-xl font-medium text-default-900 flex-1'>{title}</h2>

				<div className='flex items-center gap-4'>
					{actions?.primary && (
						<Button variant='outline' asChild>
							<Link href={actions?.primary?.href || '#'}>
								<LucideImport className='w-5 h-5 ltr:mr-2 rtl:ml-2' />
								{actions?.primary?.text}
							</Link>
						</Button>
					)}

					{actions?.secondary && (
						<Button asChild>
							<Link href={actions?.secondary?.href || '#'}>
								<Plus className='w-5 h-5 ltr:mr-2 rtl:ml-2' />
								{actions?.secondary?.text}
							</Link>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
