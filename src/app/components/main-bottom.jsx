import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainBottom = () => {
	const t = useTranslations('Index');
	return (
		<div>
			<ul>
				<li className='flex justify-between items-center mb-[30px]'>
					<div className='max-w-[523px] w-full mr-5'>
						<h3 className='font-extrabold text-[20px] leading-[1.5] mb-[10px] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
							{t('card-main-title')}
						</h3>
						<p className='leading-[1.5] mb-[10px]'>{t('main-button-text')}</p>
						<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
							13.08.2022
						</span>
					</div>

					<div className=''>
						<Image
							className='w-[318px] h-[202px] rounded-[18px] object-fill'
							src={'/post-thubnail.png'}
							alt="sizga o'zi tell qilasi"
							width={318}
							height={202}
						/>
					</div>
				</li>

				<li className='flex justify-between items-center mb-[30px]'>
					<div className='max-w-[523px] w-full mr-5'>
						<h3 className='font-extrabold text-[20px] leading-[1.5] mb-[10px] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
							{t('card-main-title')}
						</h3>
						<p className='leading-[1.5] mb-[10px]'>{t('main-button-text')}</p>
						<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
							13.08.2022
						</span>
					</div>

					<div>
						<Image
							className='w-[318px] h-[202px] rounded-[18px] object-fill'
							src={'/post-thubnail-one.png'}
							alt="sizga o'zi tell qilasi"
							width={318}
							height={202}
						/>
					</div>
				</li>

				<li className='flex justify-between items-center mb-[30px]'>
					<div className='max-w-[523px] w-full mr-5'>
						<h3 className='font-extrabold text-[20px] leading-[1.5] mb-[10px] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
							{t('card-main-title')}
						</h3>
						<p className='leading-[1.5] mb-[10px]'>{t('main-button-text')}</p>
						<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
							13.08.2022
						</span>
					</div>

					<div>
						<Image
							className='w-[318px] h-[202px] rounded-[18px] object-fill'
							src={'/post-thubnail-thee.png'}
							alt="sizga o'zi tell qilasi"
							width={318}
							height={202}
						/>
					</div>
				</li>

				<li className='flex justify-between items-center'>
					<div className='max-w-[523px] w-full mr-5'>
						<h3 className='font-extrabold text-[20px] leading-[1.5] mb-[10px] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
							{t('card-main-title')}
						</h3>
						<p className='leading-[1.5] mb-[10px]'>{t('main-button-text')}</p>
						<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
							13.08.2022
						</span>
					</div>

					<div>
						<Image
							className='w-[318px] h-[202px] rounded-[18px] object-fill'
							src={'/post-thubnail-two.png'}
							alt="sizga o'zi tell qilasi"
							width={318}
							height={202}
						/>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default MainBottom;
