'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';
import Image from 'next/image';

const formSchema = z.object({
	email: z
		.string()
		.min(1, 'E-mail é obrigatório')
		.email('Formato de e-mail inválido'),
});

type ForgotFormValues = z.infer<typeof formSchema>;

const ForgotForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<ForgotFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (data: ForgotFormValues) => {
		setIsLoading(true);
		try {
			// Simulação de chamada à API
			await new Promise((resolve) => setTimeout(resolve, 1500));

			toast.success('Link de recuperação enviado!', {
				description: 'Verifique seu e-mail para redefinir sua senha',
			});

			setTimeout(() => {
				router.push('/auth/login');
			}, 2000);
		} catch (error) {
			toast.error('Erro ao processar solicitação', {
				description: 'Tente novamente mais tarde',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='w-full max-w-[480px] p-6 sm:p-8'>
			<Link href='/' className='mb-8 inline-block'>
				<Image
					src='/logo.png'
					alt='RPGestor'
					width={120}
					height={30}
					className='h-auto w-auto'
					priority
				/>
			</Link>

			<div>
				<h4 className='text-2xl font-semibold text-default-900 mb-1'>
					Esqueceu sua senha?
				</h4>
				<p className='text-default-500 text-base mb-7'>
					Não se preocupe, nós te enviaremos instruções de recuperação.
				</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										className='h-11'
										placeholder='Digite seu e-mail'
										type='email'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type='submit'
						className='w-full h-11 text-base'
						disabled={isLoading}
					>
						{isLoading ? 'Enviando...' : 'Enviar Instruções'}
					</Button>

					<div className='text-center'>
						<Link
							href='/auth/login'
							className='text-sm font-medium text-primary hover:text-primary/90 transition-colors'
						>
							← Voltar para o Login
						</Link>
					</div>
				</form>
			</Form>

			<div className='mt-6 pt-6 border-t border-default-200'>
				<div className='flex items-center justify-center gap-2 text-sm text-default-500'>
					<span>Ainda não tem uma conta?</span>
					<Link
						href='/auth/register'
						className='font-medium text-primary hover:text-primary/90 transition-colors'
					>
						Cadastre-se
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ForgotForm;
