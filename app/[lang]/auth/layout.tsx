'use client';
import Image from 'next/image';
import background from '@/public/images/auth/line.png';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='min-h-screen bg-background flex items-center overflow-hidden w-full'>
			<div className='min-h-screen basis-full flex flex-wrap w-full justify-center overflow-y-auto'>
				<div className='basis-1/2 bg-[#51a8b1] w-full relative hidden xl:flex justify-center items-center bg-gradient-to-br from-[#51a8b1] via-[#00a1b4] to-[#005670]'>
					<Image
						src={background}
						alt='background'
						className='absolute top-0 left-0 w-full h-full'
					/>
					<div className='relative text-white z-10 backdrop-blur bg-primary-foreground/20 py-14 px-16 2xl:py-[84px] 2xl:pl-[50px] 2xl:pr-[136px] rounded max-w-[640px]'>
						<div>
							<div className='text-4xl leading-[50px] 2xl:text-6xl 2xl:leading-[52px] font-semibold mt-2.5'>
								<span className='text-white text-4xl dark:text-default-300'>
									Plataforma Digital para
									<br />
								</span>
								<span className='text-white dark:text-default-50'>
									Associações e Sindicatos.
								</span>
							</div>
							<div className='mt-5 2xl:mt-8 text-white dark:text-default-200 text-2xl font-medium'>
								Simplifique a gestão da sua organização com o RPGestor
							</div>
						</div>
					</div>
				</div>

				<div className='min-h-screen basis-full md:basis-1/2 w-full px-4 py-5 flex justify-center items-center'>
					<div className='lg:w-[480px]'>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
