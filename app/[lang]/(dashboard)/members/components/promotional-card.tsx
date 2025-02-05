'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PromotionalCard = () => {
	return (
		<div className='xl:col-span-2 2xl:col-span-1 bg-primary/5 dark:bg-primary/10 rounded-sm p-6 relative overflow-hidden'>
			<Badge variant='soft' color='primary' className='absolute top-4 right-4'>
				Novo
			</Badge>

			<div className='max-w-[200px] relative z-10'>
				<h3 className='text-xl font-semibold text-default-900 mb-2'>
					Importe seus Associados
				</h3>
				<p className='text-sm text-default-600 mb-4'>
					Importe uma lista de associados usando nossa planilha modelo
				</p>
				<div className='flex gap-2'>
					<Button size='sm'>Baixar Modelo</Button>
					<Button size='sm' variant='outline' className='border-default-300'>
						Importar
					</Button>
				</div>
			</div>

			{/* Background decoration */}
			<div className='absolute right-0 bottom-0 w-32 h-32 bg-primary/10 rounded-tl-full' />
			<div className='absolute right-8 bottom-8 w-16 h-16 bg-primary/20 rounded-tl-full' />
		</div>
	);
};

export default PromotionalCard;
