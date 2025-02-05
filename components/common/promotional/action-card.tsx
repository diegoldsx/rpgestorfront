'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionCardProps {
	title: string;
	description: string;
	badge?: {
		text: string;
		color?: 'primary' | 'success' | 'warning' | 'info' | 'destructive';
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
	bgPattern?: boolean;
	className?: string;
}

export const ActionCard = ({
	title,
	description,
	badge,
	actions,
	bgPattern = true,
	className,
}: ActionCardProps) => {
	return (
		<div
			className={cn(
				'xl:col-span-2 2xl:col-span-1 bg-primary/5 dark:bg-primary/10 rounded-sm p-6 relative overflow-hidden',
				className
			)}
		>
			{/* Badge */}
			{badge && (
				<Badge
					variant='soft'
					color={badge.color || 'primary'}
					className='absolute top-4 right-4'
				>
					{badge.text}
				</Badge>
			)}

			{/* Content */}
			<div className='max-w-[200px] relative z-10'>
				<h3 className='text-xl font-semibold text-default-900 dark:text-default-100 mb-2'>
					{title}
				</h3>
				<p className='text-sm text-default-600 dark:text-default-400 mb-4'>
					{description}
				</p>

				{/* Action Buttons */}
				{actions && (
					<div className='flex gap-2'>
						{actions.primary && (
							<Button
								size='sm'
								onClick={actions.primary.onClick}
								asChild={!!actions.primary.href}
							>
								{actions.primary.href ? (
									<a href={actions.primary.href}>{actions.primary.text}</a>
								) : (
									actions.primary.text
								)}
							</Button>
						)}

						{actions.secondary && (
							<Button
								size='sm'
								variant='outline'
								className='border-default-300'
								onClick={actions.secondary.onClick}
								asChild={!!actions.secondary.href}
							>
								{actions.secondary.href ? (
									<a href={actions.secondary.href}>{actions.secondary.text}</a>
								) : (
									actions.secondary.text
								)}
							</Button>
						)}
					</div>
				)}
			</div>

			{/* Background Pattern */}
			{bgPattern && (
				<>
					<div className='absolute right-0 bottom-0 w-32 h-32 bg-primary/10 rounded-tl-full' />
					<div className='absolute right-8 bottom-8 w-16 h-16 bg-primary/20 rounded-tl-full' />
				</>
			)}
		</div>
	);
};
