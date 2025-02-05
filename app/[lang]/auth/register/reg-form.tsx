'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { addUser } from '@/action/auth-action';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { Checkbox } from '@/components/ui/checkbox';
import { SiteLogo } from '@/components/svg';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';

const schema = z.object({
	name: z
		.string()
		.min(3, { message: 'Nome deve ter pelo menos 3 caracteres.' }),
	email: z.string().email({ message: 'Email inválido.' }),
	password: z
		.string()
		.min(6, { message: 'Senha deve ter pelo menos 6 caracteres.' }),
	cpf: z.string().min(11, { message: 'CPF inválido' }),
	phone: z.string().min(10, { message: 'Telefone inválido' }),
});

const RegForm = () => {
	const [isPending, startTransition] = React.useTransition();
	const [passwordType, setPasswordType] = useState<string>('password');
	const isDesktop2xl = useMediaQuery('(max-width: 1530px)');

	const togglePasswordType = () => {
		setPasswordType(passwordType === 'text' ? 'password' : 'text');
	};

	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		mode: 'all',
	});

	const onSubmit = (data: any) => {
		startTransition(async () => {
			let response = await addUser(data);
			if (response?.status === 'success') {
				toast.success('Cadastro realizado com sucesso!');
				reset();
				router.push('/');
			} else {
				toast.error(response?.message || 'Erro ao realizar cadastro');
			}
		});
	};

	return (
		<div className='w-full'>
			<Link href='/dashboard' className='inline-block'>
				<Image
					src='/logo.png'
					alt='RPGestor'
					width={120}
					height={30}
					className='h-auto w-auto'
				/>
			</Link>

			<div className='2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900'>
				Bem-vindo ao RPGestor 👋
			</div>

			<div className='2xl:text-lg text-base text-default-600 mt-2 leading-6'>
				Crie sua conta para começar a usar o RPGestor
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='mt-5 xl:mt-7'>
				<div className='space-y-4'>
					<div>
						<Label htmlFor='name' className='mb-2 font-medium text-default-600'>
							Nome Completo
						</Label>
						<Input
							disabled={isPending}
							{...register('name')}
							type='text'
							id='name'
							className={cn('', { 'border-destructive': errors.name })}
							size={!isDesktop2xl ? 'xl' : 'lg'}
						/>
						{errors.name && (
							<div className='text-destructive mt-2 mb-4'>
								{errors.name.message as string}
							</div>
						)}
					</div>

					<div>
						<Label htmlFor='cpf' className='mb-2 font-medium text-default-600'>
							CPF
						</Label>
						<Input
							disabled={isPending}
							{...register('cpf')}
							type='text'
							id='cpf'
							className={cn('', { 'border-destructive': errors.cpf })}
							size={!isDesktop2xl ? 'xl' : 'lg'}
						/>
						{errors.cpf && (
							<div className='text-destructive mt-2 mb-4'>
								{errors.cpf.message as string}
							</div>
						)}
					</div>

					<div>
						<Label
							htmlFor='phone'
							className='mb-2 font-medium text-default-600'
						>
							Telefone
						</Label>
						<Input
							disabled={isPending}
							{...register('phone')}
							type='tel'
							id='phone'
							className={cn('', { 'border-destructive': errors.phone })}
							size={!isDesktop2xl ? 'xl' : 'lg'}
						/>
						{errors.phone && (
							<div className='text-destructive mt-2 mb-4'>
								{errors.phone.message as string}
							</div>
						)}
					</div>

					<div>
						<Label
							htmlFor='email'
							className='mb-2 font-medium text-default-600'
						>
							Email
						</Label>
						<Input
							disabled={isPending}
							{...register('email')}
							type='email'
							id='email'
							className={cn('', { 'border-destructive': errors.email })}
							size={!isDesktop2xl ? 'xl' : 'lg'}
						/>
						{errors.email && (
							<div className='text-destructive mt-2 mb-4'>
								{errors.email.message as string}
							</div>
						)}
					</div>

					<div>
						<Label
							htmlFor='password'
							className='mb-2 font-medium text-default-600'
						>
							Senha
						</Label>
						<div className='relative'>
							<Input
								type={passwordType}
								id='password'
								size={!isDesktop2xl ? 'xl' : 'lg'}
								disabled={isPending}
								{...register('password')}
								className={cn('', { 'border-destructive': errors.password })}
							/>
							<div
								className='absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer'
								onClick={togglePasswordType}
							>
								<Icon
									icon={
										passwordType === 'password'
											? 'heroicons:eye'
											: 'heroicons:eye-slash'
									}
									className='w-5 h-5 text-default-400'
								/>
							</div>
						</div>
						{errors.password && (
							<div className='text-destructive mt-2'>
								{errors.password.message as string}
							</div>
						)}
					</div>
				</div>

				<div className='mt-5 flex items-center gap-1.5 mb-8'>
					<Checkbox
						size='sm'
						className='border-default-300 mt-[1px]'
						id='terms'
					/>
					<Label
						htmlFor='terms'
						className='text-sm text-default-600 cursor-pointer whitespace-nowrap'
					>
						Aceito os Termos e Condições
					</Label>
				</div>

				<Button
					className='w-full'
					disabled={isPending}
					size={!isDesktop2xl ? 'lg' : 'md'}
				>
					{isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
					{isPending ? 'Cadastrando...' : 'Criar Conta'}
				</Button>
			</form>

			<div className='mt-5 2xl:mt-8 text-center text-base text-default-600'>
				Já tem uma conta?{' '}
				<Link href='/auth/login' className='text-primary'>
					Entrar
				</Link>
			</div>
		</div>
	);
};

export default RegForm;
