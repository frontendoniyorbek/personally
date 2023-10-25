import React from 'react';
import { Footer, Header, Hero, Main } from '../components';
import { useTranslations } from 'next-intl';

const Page = () => {
	const t = useTranslations('Index');

	return (
		<div>
			<div className='header mb-[70px]'>
				<Header />
				<Hero />
			</div>

			<Main />
			<Footer />
		</div>
	);
};

export default Page;
