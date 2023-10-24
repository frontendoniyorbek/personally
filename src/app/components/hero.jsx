import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
	const t = useTranslations('Index');
	return (
		<div className=' pt-[18px]'>
			<div className='relative flex justify-between items-center container'>
				<div className=' lg:max-w-[464px] sm:mb-0 mb-24 max-w-[400px] w-full mr-5'>
					<h1 className='font-bold 2xl:text-[77px] lg:text-[77px] md:text-[60px] sm:text-[50px] text-[40px] uppercase leading-[1.3] mb-[30px]'>
						{t('avatar')}
					</h1>
					<p className='text-[17px] leading-[1.5] mb-[30px]'>{t('hero-info')}</p>
					<button className='p-5 font-extrabold text-[18px] leading-[1.33] rounded-[14px]  border border-transparent border-solid bg-black text-center text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black transition duration-200 ease-out hover:ease-in'>
						{t('about me')}
					</button>
				</div>
				<div className='relative z-50'>
					<Image className='absolute top-0 left-0 -z-10 hero__img' src={'/hero-bg.png'} alt='hero-bg' width={426} height={638} />
					<Image className=' z-20 hero__img-avatar' src={'/avatar.png'} alt='hero-bg' width={694} height={661} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
