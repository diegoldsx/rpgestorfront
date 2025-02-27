'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

interface Associado {
	id: number;
	regiao: string;
	total: string;
}

interface AssociadosDataTableProps {
	associados: Associado[];
}

const AssociadosDataTable = ({ associados }: AssociadosDataTableProps) => {
	return (
		<div className='h-[250px]'>
			<ScrollArea className='h-full'>
				<Table className='border border-default-200'>
					<TableHeader>
						<TableRow className='border-b border-default-200'>
							<TableHead className='text-sm h-10 font-medium text-default-800'>
								Região
							</TableHead>
							<TableHead className='text-sm h-10 font-medium text-default-800 text-right'>
								Total
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{associados.map((item) => (
							<TableRow key={item.id} className='border-b border-default-200'>
								<TableCell className='text-xs text-default-600 py-2'>
									{item.regiao}
								</TableCell>
								<TableCell className='text-xs text-default-600 text-right pr-6 py-2'>
									{item.total}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</ScrollArea>
		</div>
	);
};

export default AssociadosDataTable;
