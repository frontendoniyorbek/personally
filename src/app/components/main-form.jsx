import { useTranslations } from 'next-intl';
import React from 'react';

const MainForm = () => {
	const t = useTranslations('Index');
	return (
		<form className='flex flex-col items-center justify-center py-[54px] bg-[#F6F7F8] mb-[70px] main__form'>
			<div className='max-w-[361px] w-full text-center mb-5'>
				<h2 className='font-extrabold text-[20px] mb-5 leading-[1.5]'>{t('Leave a message')}</h2>
				<p className='leading-[1.5]'>{t('form-description')}</p>
			</div>
			<div className='max-w-[400px] w-full'>
				<input
					className='w-[65%] h-[50px] text-[14px] py-[15px] pl-5 border-[0.5px] rounded-tl-[10px] rounded-bl-[10px] border-solid border-black outline-none'
					type='text'
					placeholder={t('Leave a message')}
				/>
				<button
					className='w-[35%] h-[50px] text-[16px] font-extrabold leading-[1.25] text-center py-[15px] px-[35px] text-white bg-black rounded-tr-[10px] rounded-br-[10px]'
					type='submit'>
					{t('submit')}
				</button>
			</div>
		</form>
	);
};

export default MainForm;
