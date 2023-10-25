import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainRightBottom = () => {
	const t = useTranslations('Index');

	return (
		<div className='main__right-bottom'>
			<h2 className='font-extrabold text-[20px] leading-[1.2] mb-5'>{t('social networks')}</h2>
			<ul className='main__right-bottomList'>
				<li className='md:mb-[10px] mb-0'>
					<Link
						className='flex text-[18px] font-medium leading-[1.33] py-5 px-10 bg-[#F6F7F8] rounded-xl items-center justify-center hover:bg-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'
						href={'https://www.facebook.com/profile.php?id=100003274826765'}
						target='_blank'>
						<Image className=' mr-[10px]' src={'/facebook.svg'} alt='facebook-icon' width={24} height={24} />
						Facebook
					</Link>
				</li>

				<li className='md:mb-[10px] mb-0'>
					<Link
						className='flex text-[18px] font-medium leading-[1.33] py-5 px-10 bg-[#F6F7F8] rounded-xl items-center justify-center hover:bg-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'
						href={'https://t.me/alisher_rustamov'}
						target='_blank'>
						<Image className=' mr-[10px]' src={'/telegram.svg'} alt='telegram-icon' width={24} height={24} />
						Telegram
					</Link>
				</li>

				<li className='md:mb-[10px] mb-0'>
					<Link
						className='flex text-[18px] font-medium leading-[1.33] py-5 px-10 bg-[#F6F7F8] rounded-xl items-center justify-center hover:bg-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'
						href={'https://www.instagram.com/alisher.rustam.expert/'}
						target='_blank'>
						<Image className=' mr-[10px]' src={'/instagram.svg'} alt='instagram-icon' width={24} height={24} />
						Instagram
					</Link>
				</li>

				<li className='md:mb-[10px] mb-0'>
					<Link
						className='flex text-[18px] font-medium leading-[1.33] py-5 px-10 bg-[#F6F7F8] rounded-xl items-center justify-center hover:bg-[#FFC017] cursor-pointer transition duration-200 ease-out hover:ease-in'
						href={'https://www.youtube.com/@alisherrustamov8925/featured'}
						target='_blank'>
						<Image className=' mr-[10px]' src={'/youtube.svg'} alt='youtube-icon' width={24} height={24} />
						Youtube
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MainRightBottom;
