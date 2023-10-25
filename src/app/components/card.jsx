import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Card = () => {
	const t = useTranslations('Index');
	return (
		<div className='card'>
			<ul className='card__list mb-[70px]'>
				<li className='card__item'>
					<Image
						className='mb-5 w-[180px] h-[169px] object-fill'
						src={'/avatar-main.png'}
						alt='avatar-motivation-img'
						width={180}
						height={169}
					/>
					<h2 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E]'>{t('card-title')}</h2>

					<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px]'>
						13.08.2022
					</span>
				</li>

				<li className='card__item'>
					<Image
						className='mb-5 w-[180px] h-[169px] object-fill'
						src={'/sessiya-img.png'}
						alt='avatar-motivation-img'
						width={180}
						height={169}
					/>
					<h2 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E]'>{t('card-title')}</h2>

					<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px]'>
						13.08.2022
					</span>
				</li>

				<li className='card__item'>
					<Image
						className='mb-5 w-[180px] h-[169px] object-fill'
						src={'/cinema.png'}
						alt='avatar-motivation-img'
						width={180}
						height={169}
					/>
					<h2 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E]'>{t('card-title')}</h2>

					<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px]'>
						13.08.2022
					</span>
				</li>

				<li className='card__item'>
					<Image
						className='mb-5 w-[180px] h-[169px] object-fill'
						src={'/avatar-main.png'}
						alt='avatar-motivation-img'
						width={180}
						height={169}
					/>
					<h2 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E]'>{t('card-title')}</h2>

					<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px]'>
						13.08.2022
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Card;
