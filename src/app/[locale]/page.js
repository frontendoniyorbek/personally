import React from 'react';
import { Header, Hero } from '../components';
import { useTranslations } from 'next-intl';

const Page = () => {
	const t = useTranslations('Index');

	return (
		<div>
			<div className='header mb-[70px]'>
				<Header />
				<Hero />
			</div>

			{t('title')}
		</div>
	);
};

export default Page;
