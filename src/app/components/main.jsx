import React from 'react';
import { MainBottom, MainInfo, MainRight, MainTopLeft } from '.';
import Link from 'next/link';
import Image from 'next/image';

const Main = () => {
	return (
		<div className='main'>
			<div className='container main__container'>
				<div className='main__left'>
					<MainTopLeft />
					<Link
						className='max-w-[1051px] inline-block w-full max-h-[473px] h-full mb-[30px]'
						href={'https://www.youtube.com/watch?v=Sc_FJckymbc'}
						target='_blank'>
						<Image className='yotube-img' src={'/youtube.png'} width={1051} height={473} alt='youtube link' />
					</Link>
					<MainBottom />
				</div>
				<div className='main__right'>
					<MainRight />
				</div>
			</div>
			<MainInfo />
		</div>
	);
};

export default Main;
