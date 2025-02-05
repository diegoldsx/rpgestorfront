// app/dashboard/agenda/components/draggable-evento.tsx
import { cn } from '@/lib/utils';

interface DraggableEventoProps {
	event: {
		title: string;
		id: string;
		tag: string;
	};
}

const DraggableEvento = ({ event }: DraggableEventoProps) => {
	const { title, id, tag } = event;

	return (
		<div
			title={title}
			data-id={id}
			className={cn(
				'fc-event px-4 py-1.5 bg-default-100 rounded text-sm flex items-center gap-2 shadow-sm cursor-move',
				{
					'bg-primary/10': tag === 'reuniao',
					'bg-warning/10': tag === 'evento',
					'bg-destructive/10': tag === 'atividade',
					'bg-info/10': tag === 'compromisso',
				}
			)}
		>
			<span
				className={cn('h-2 w-2 rounded-full block', {
					'bg-primary': tag === 'reuniao',
					'bg-warning': tag === 'evento',
					'bg-destructive': tag === 'atividade',
					'bg-info': tag === 'compromisso',
				})}
			/>
			<span className='text-sm font-medium text-default-900'>{title}</span>
		</div>
	);
};

export default DraggableEvento;
