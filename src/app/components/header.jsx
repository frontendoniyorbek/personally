import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LangSelect, Menu } from '.';

const Header = () => {
	const t = useTranslations('Index');

	return (
		<header className='md:py-[18px] py-[28px]'>
			<div className=' flex items-center container header__container'>
				<h2 className='hover:opacity-80 active:opacity-60 cursor-pointer md:mr-[60px] sm:mr-[30px] mr-7'>
					<Image className='w-[134] h-[24] object-cover' src={'/logo.svg'} alt='logo' width={134} height={24} />
				</h2>
				<ul className='ml-1 flex items-center mr-auto header__list'>
					<li className='mr-5'>
						<a className='hover:text-red-600 cursor-pointer transition duration-150 ease-out hover:ease-in header__link'>
							{t('headerMaqola')}
						</a>
					</li>
					<li>
						<a className='hover:text-red-600 cursor-pointer transition duration-150 ease-out hover:ease-in header__link'>
							{t('headerSocil')}
						</a>
					</li>
				</ul>

				<div className='md:mr-[30px] mr-0 md:ml-0 ml-3 header__local'>
					<LangSelect />
				</div>

				<Menu />

				<button className='whitespace-nowrap md:block hidden font-bold rounded-[10px] py-3 px-5  border border-transparent border-solid bg-black text-center text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black transition duration-200 ease-out hover:ease-in'>
					{t('Leave a message')}
				</button>
			</div>
		</header>
	);
};

export default Header;
