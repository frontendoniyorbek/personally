import { useTranslations } from 'next-intl';
import React from 'react';

const MainRightTop = () => {
	const t = useTranslations('Index');
	return (
		<div className='mb-[70px] '>
			<ul className='max-w-[203px] w-full'>
				<li>
					<h3 className='mb-5 font-extrabold text-[20px] leading-[1.2]'>{t('maqolalar')}</h3>
					<span className='hover:text-[#FFC017] leading-[1.5] font-semibold cursor-pointer transition duration-200 ease-out hover:ease-in mb-[10px] inline-block'>
						{t('main-right-text')}
					</span>
					<button className='cursor-pointer main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px] hover:scale-110 transition duration-200 ease-out hover:ease-in'>
						13.08.2022
					</button>
					<span className='inline-block border-[0.4px] border-solid border-[#D2D2D2] w-full gap-[10px]'></span>
				</li>

				<li>
					<span className='hover:text-[#FFC017] leading-[1.5] font-semibold cursor-pointer transition duration-200 ease-out hover:ease-in mb-[10px] inline-block'>
						{t('main-right-title')}
					</span>
					<button className='cursor-pointer main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px] hover:scale-110 transition duration-200 ease-out hover:ease-in'>
						13.08.2022
					</button>
					<span className='inline-block border-[0.4px] border-solid border-[#D2D2D2] w-full gap-[10px]'></span>
				</li>

				<li>
					<span className='hover:text-[#FFC017] leading-[1.5] font-semibold cursor-pointer transition duration-200 ease-out hover:ease-in mb-[10px] inline-block'>
						{t('main-right-title-two')}
					</span>
					<button className='cursor-pointer main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px] hover:scale-110 transition duration-200 ease-out hover:ease-in'>
						13.08.2022
					</button>
					<span className='inline-block border-[0.4px] border-solid border-[#D2D2D2] w-full gap-[10px]'></span>
				</li>

				<li>
					<span className='hover:text-[#FFC017] leading-[1.5] font-semibold cursor-pointer transition duration-200 ease-out hover:ease-in mb-[10px] inline-block'>
						{t('main-right-title-three')}
					</span>
					<button className='cursor-pointer main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[12px] hover:scale-110 transition duration-200 ease-out hover:ease-in'>
						13.08.2022
					</button>
				</li>
			</ul>
		</div>
	);
};

export default MainRightTop;
