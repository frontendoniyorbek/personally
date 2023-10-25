import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, CardMain, MainForm, MainRightBottom, MainTopLeft } from '.';
import { useTranslations } from 'next-intl';

const MainInfo = () => {
	const t = useTranslations('Index');
	return (
		<div className='main__respnsive'>
			<div className='flex flex-col items-center justify-center mb-[70px] container'>
				<ul className='mb-[80px] main__infoList-bottom'>
					<li className='flex justify-between items-center mb-[30px]'>
						<div className='max-w-[362px] w-full mr-5'>
							<h3 className='font-extrabold text-[20px] leading-[1.5] mb-[10px] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
								{t('main-info-title')}
							</h3>

							<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
								13.08.2022
							</span>
						</div>

						<div className=''>
							<Image
								className='w-[200px] h-[120px] rounded-[18px] object-fill'
								src={'/main-img.png'}
								alt="sizga o'zi tell qilasi"
								width={200}
								height={120}
							/>
						</div>
					</li>

					<li className='flex justify-between items-center '>
						<div className='max-w-[362px] w-full mr-5'>
							<h3 className='font-extrabold text-[20px] leading-[1.5] mb-[10px] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
								{t('main-info-title')}
							</h3>

							<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
								13.08.2022
							</span>
						</div>

						<div>
							<Image
								className='w-[200px] h-[120px] rounded-[18px] object-fill'
								src={'/main-img-two.png'}
								alt="sizga o'zi tell qilasi"
								width={200}
								height={120}
							/>
						</div>
					</li>
				</ul>

				<div className='main__info-top'>
					<Card />
				</div>

				<iframe
					className='main__youtube'
					src='https://www.youtube.com/embed/Sc_FJckymbc'
					title='Sherzod Kayumov | Foydali uchrashuv  #interview #интервью'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen></iframe>

				<div className='main__info-top'>
					<CardMain />
				</div>

				<ul className='mt-[80px] mb-[40px] main__infoList-bottom'>
					<li className='flex justify-between items-center mb-[30px]'>
						<div className='max-w-[362px] w-full mr-5'>
							<h3 className='font-extrabold text-[20px] leading-[1.5] mb-[10px] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
								{t('main-info-title')}
							</h3>

							<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
								13.08.2022
							</span>
						</div>

						<div className=''>
							<Image
								className='w-[200px] h-[120px] rounded-[18px] object-fill'
								src={'/main-img-four.png'}
								alt="sizga o'zi tell qilasi"
								width={200}
								height={120}
							/>
						</div>
					</li>

					<li className='flex justify-between items-center '>
						<div className='max-w-[362px] w-full mr-5'>
							<h3 className='font-extrabold text-[20px] leading-[1.5] mb-[10px] hover:text-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'>
								{t('main-info-title')}
							</h3>

							<span className='main__top-span py-3 px-[10px] flex items-center justify-center rounded-lg bg-[#F6F7F8] max-w-[88px] w-full font-medium leading-[1.2] uppercase text-[13px]'>
								13.08.2022
							</span>
						</div>

						<div>
							<Image
								className='w-[200px] h-[120px] rounded-[18px] object-fill'
								src={'/main-img-three.png'}
								alt="sizga o'zi tell qilasi"
								width={200}
								height={120}
							/>
						</div>
					</li>
				</ul>

				<button className='p-5 font-extrabold text-[18px] leading-[1.33] rounded-[14px]  border border-transparent border-solid bg-black text-center text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black transition duration-200 ease-out hover:ease-in'>
					{t('more-info')}
				</button>
			</div>

			<MainForm />

			<div className='md:hidden block'>
				<MainRightBottom />
			</div>
		</div>
	);
};

export default MainInfo;
