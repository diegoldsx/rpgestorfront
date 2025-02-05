'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';

const schema = z
	.object({
		password: z
			.string()
			.min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
			.regex(/[A-Z]/, {
				message: 'A senha deve conter pelo menos uma letra maiúscula',
			})
			.regex(/[a-z]/, {
				message: 'A senha deve conter pelo menos uma letra minúscula',
			})
			.regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas não conferem',
		path: ['confirmPassword'],
	});

const CreatePasswordForm = () => {
	const [isPending, startTransition] = React.useTransition();
	const [showPassword, setShowPassword] = React.useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] =
		React.useState<boolean>(false);
	const isDesktop2xl = useMediaQuery('(max-width: 1530px)');
	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const onSubmit = (data: any) => {
		startTransition(async () => {
			try {
				// Simula chamada à API
				await new Promise((resolve) => setTimeout(resolve, 1500));

				toast.success('Senha cadastrada com sucesso!', {
					description: 'Sua conta foi ativada. Você já pode fazer login.',
				});

				reset();
				router.push('/auth/login');
			} catch (error) {
				toast.error('Erro ao cadastrar senha', {
					description: 'Tente novamente ou entre em contato com o suporte.',
				});
			}
		});
	};

	return (
		<div className='w-full max-w-[480px] p-6 sm:p-8'>
			<Link href='/' className='inline-block mb-8'>
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
					Ative sua conta
				</h4>
				<p className='text-default-500 text-base mb-7'>
					Crie uma senha segura para acessar a plataforma
				</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
				<div>
					<Label
						htmlFor='password'
						className='mb-2 font-medium text-default-600'
					>
						Senha
					</Label>
					<div className='relative'>
						<Input
							disabled={isPending}
							{...register('password')}
							type={showPassword ? 'text' : 'password'}
							id='password'
							size={!isDesktop2xl ? 'xl' : 'lg'}
							className={cn('h-11', {
								'border-destructive': errors.password,
							})}
						/>
						<button
							type='button'
							className='absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4'
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? (
								<Icon
									icon='heroicons:eye'
									className='w-5 h-5 text-default-400'
								/>
							) : (
								<Icon
									icon='heroicons:eye-slash'
									className='w-5 h-5 text-default-400'
								/>
							)}
						</button>
					</div>
					{errors.password && (
						<div className='text-destructive text-sm mt-2'>
							{errors.password.message as string}
						</div>
					)}
				</div>

				<div>
					<Label
						htmlFor='confirmPassword'
						className='mb-2 font-medium text-default-600'
					>
						Confirme a senha
					</Label>
					<div className='relative'>
						<Input
							disabled={isPending}
							{...register('confirmPassword')}
							type={showConfirmPassword ? 'text' : 'password'}
							id='confirmPassword'
							className={cn('h-11', {
								'border-destructive': errors.confirmPassword,
							})}
							size={!isDesktop2xl ? 'xl' : 'lg'}
						/>
						<button
							type='button'
							className='absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4'
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						>
							{showConfirmPassword ? (
								<Icon
									icon='heroicons:eye'
									className='w-5 h-5 text-default-400'
								/>
							) : (
								<Icon
									icon='heroicons:eye-slash'
									className='w-5 h-5 text-default-400'
								/>
							)}
						</button>
					</div>
					{errors.confirmPassword && (
						<div className='text-destructive text-sm mt-2'>
							{errors.confirmPassword.message as string}
						</div>
					)}
				</div>

				<div className='flex items-center gap-2'>
					<Checkbox id='terms' className='border-default-300' />
					<Label htmlFor='terms' className='text-sm text-default-600'>
						Li e aceito os{' '}
						<Link href='/terms' className='text-primary hover:underline'>
							Termos de Uso
						</Link>{' '}
						e{' '}
						<Link href='/privacy' className='text-primary hover:underline'>
							Política de Privacidade
						</Link>
					</Label>
				</div>

				<Button
					type='submit'
					className='w-full h-11 text-base'
					disabled={isPending}
				>
					{isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
					{isPending ? 'Ativando conta...' : 'Ativar Conta'}
				</Button>

				<div className='text-center text-sm text-default-500'>
					Já tem uma conta?{' '}
					<Link href='/auth/login' className='text-primary hover:underline'>
						Faça login
					</Link>
				</div>
			</form>
		</div>
	);
};

export default CreatePasswordForm;
