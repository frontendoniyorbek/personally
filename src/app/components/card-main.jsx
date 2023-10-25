import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const CardMain = () => {
	const t = useTranslations('Index');
	return (
		<div className='card  mt-[30px]'>
			<ul className='card__list mb-[70px]'>
				<li className='card__item'>
					<Image
						className='mb-5 w-[180px] h-[120px] rounded-[18px] object-fill'
						src={'/post-thubnail.png'}
						alt="sizga o'zi tell qilasi"
						width={180}
						height={120}
					/>
					<h3 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
						{t('card-main-title')}
					</h3>

					<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
						13.08.2022
					</span>
				</li>

				<li className='card__item'>
					<Image
						className='mb-5 w-[180px] h-[120px] rounded-[18px] object-fill'
						src={'/post-thubnail-one.png'}
						alt="sizga o'zi tell qilasi"
						width={180}
						height={120}
					/>
					<h3 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
						{t('card-main-title')}
					</h3>

					<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
						13.08.2022
					</span>
				</li>

				<li className='card__item'>
					<Image
						className='mb-5 w-[180px] h-[120px] rounded-[18px] object-fill'
						src={'/post-thubnail-thee.png'}
						alt="sizga o'zi tell qilasi"
						width={180}
						height={120}
					/>
					<h3 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
						{t('card-main-title')}
					</h3>

					<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
						13.08.2022
					</span>
				</li>

				<li className='card__item'>
					<Image
						className='mb-5 w-[180px] h-[120px] rounded-[18px] object-fill'
						src={'/post-thubnail-two.png'}
						alt="sizga o'zi tell qilasi"
						width={180}
						height={120}
					/>
					<h3 className='text-[16px] font-extrabold leading-[1.5] mb-[20px] text-[#1E1E1E] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
						{t('card-main-title')}
					</h3>

					<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
						13.08.2022
					</span>
				</li>
			</ul>
		</div>
	);
};

export default CardMain;
