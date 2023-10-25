import { useTranslations } from 'next-intl';
import React from 'react';

const Footer = () => {
	const t = useTranslations('Index');
	return (
		<footer className='footer bg-[#222222] text-white '>
			<div className='container footer__container'>
				<div className='footer__info max-w-[287px] w-full mr-6'>
					<h2 className='mb-[10px] text-[30px] font-bold leading-[1.3]'>{t('footer-title')}</h2>
					<p className='leading-[1.5]'>{t('footer-text')}</p>
				</div>
				<form className='footer__form'>
					<div className='max-w-[400px] w-full mb-5'>
						<h2 className='font-extrabold text-[24px] mb-5 leading-[1.5]'>Xabar qoldirish</h2>
						<p className='leading-[1.5]'>{t('footer-text')}</p>
					</div>
					<div className='max-w-[400px] w-full'>
						<input
							className='w-[65%] h-[50px] text-[14px] py-[15px] pl-5 text-black  rounded-tl-[10px] rounded-bl-[10px]  outline-none'
							type='text'
							placeholder={t('Leave a message')}
						/>
						<button
							className='border-transparent w-[35%] h-[50px] text-[16px] font-extrabold leading-[1.25] text-center py-[15px] px-[35px] text-white bg-[#FFC017] rounded-tr-[10px] rounded-br-[10px]'
							type='submit'>
							{t('submit')}
						</button>
					</div>
				</form>
			</div>
		</footer>
	);
};

export default Footer;
