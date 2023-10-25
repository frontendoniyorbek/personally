import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const MainTopLeft = () => {
	const t = useTranslations('Index');
	return (
		<ul className='main__top-list mb-[70px]'>
			<li className='main__top-item'>
				<Image
					className='mb-6 w-[300px] h-[297px] object-fill'
					src={'/avatar-main.png'}
					alt='avatar-motivation-img'
					width={300}
					height={297}
				/>
				<h2 className='text-[20px] font-extrabold leading-[1.5] mb-[10px]'>{t('main-top-title')}</h2>
				<p className='leading-[1.5] mb-[10px]'>{t('main-top-text')}</p>
				<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px]'>
					13.08.2022
				</span>
			</li>

			<li className='main__top-item'>
				<Image
					className='mb-6 w-[300px] h-[297px] object-fill'
					src={'/sessiya-img.png'}
					alt='avatar-motivation-img'
					width={300}
					height={297}
				/>
				<h2 className='text-[20px] font-extrabold leading-[1.5] mb-[10px]'>{t('main-top-title')}</h2>
				<p className='leading-[1.5] mb-[10px]'>{t('main-top-text')}</p>
				<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px]'>
					13.08.2022
				</span>
			</li>

			<li className=' max-w-[300px] w-full main__top-item'>
				<Image
					className='mb-6 w-[300px] h-[297px] object-fill'
					src={'/cinema.png'}
					alt='avatar-motivation-img'
					width={300}
					height={297}
				/>
				<h2 className='text-[20px] font-extrabold leading-[1.5] mb-[10px]'>{t('main-top-title')}</h2>
				<p className='leading-[1.5] mb-[10px]'>{t('main-top-text')}</p>
				<div className='main__info-top'>
					<h2 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E]'>
						Portugal and I are very much in Love - is here are 5 reasons why? What is
					</h2>
				</div>
				<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px]'>
					13.08.2022
				</span>
			</li>
		</ul>
	);
};

export default MainTopLeft;
