'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { LangSelect } from '.';
import { useTranslations } from 'next-intl';

const Menu = () => {
	const t = useTranslations('Index');
	const [show, setShow] = useState(false);
	return (
		<div>
			<button
				onClick={() => setShow(!show)}
				className='w-[50px] h-[39px] rounded-xl cursor-pointer p-[13px] bg-white flex items-center justify-center header__menu'>
				{!show && <Image src={'/menu.svg'} width={24} height={13} alt='menu-icon' />}
				{show && (
					<Image
						style={{ objectFit: 'cover', width: '24px', height: '13px' }}
						src={'/close.svg'}
						width={16}
						height={16}
						alt='menu-icon'
					/>
				)}
			</button>

			{show && (
				<div className='header__menuActive container flex items-center justify-center flex-col relative'>
					<button
						onClick={() => setShow(!show)}
						className='absolute right-7 top-7 w-[50px] h-[39px] rounded-xl cursor-pointer p-[13px] bg-[#FFC017] flex items-center justify-center header__menu float-right'>
						{show && (
							<Image
								style={{ objectFit: 'cover', width: '24px', height: '13px' }}
								src={'/close.svg'}
								width={16}
								height={16}
								alt='menu-icon'
							/>
						)}
					</button>
					<div className='flex flex-col items-center justify-center'>
						<button className='mb-[50px] py-[14px] px-5 bg-[#F6F7F8] rounded-[20px] text-2xl leading-[1.5] font-semibold hover:opacity-80 active:opacity-60 transition-all ease-in'>
							{t('articles')}
						</button>
						<button className='mb-10 py-[14px] px-5 bg-[#F6F7F8] rounded-[20px] text-2xl leading-[1.5] font-semibold hover:opacity-80 active:opacity-60 transition-all ease-in'>
							{t('social networks')}
						</button>
						<LangSelect menuShow={show} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Menu;
