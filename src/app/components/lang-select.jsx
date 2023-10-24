'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

export const sliceStringBySubstrings = (string, substrings) => {
	const substringPositions = [];
	for (const substring of substrings) {
		let start = 0;
		while (true) {
			const position = string.indexOf(substring, start);
			if (position === -1) {
				break;
			}
			substringPositions.push([position, position + substring.length]);
			start = position + 1;
		}
	}

	substringPositions.sort((a, b) => a[0] - b[0]);

	const slices = [];
	let prevEnd = 0;
	for (const [start, end] of substringPositions) {
		if (start > prevEnd) {
			slices.push(string.substring(prevEnd, start));
		}
		prevEnd = end;
	}

	slices.push(string.substring(prevEnd));

	return slices.join('');
};

const LangSelect = ({ menuShow }) => {
	const locales = [
		{ value: 'uz', title: "O'zbek", img: '/uzb.svg' },
		{ value: 'ru', title: 'Русский', img: '/ru.svg' },
		{ value: 'en', title: 'English', img: '/eng.svg' },
	];
	const router = useRouter();
	const [_, startTransition] = useTransition();
	const locale = useLocale();
	const pathname = sliceStringBySubstrings(usePathname(), ['uz', 'ru', 'en']);

	const handleSelect = local => {
		startTransition(() => {
			router.replace(`/${local}/${pathname}`);
		});
	};

	const [selected, setSelected] = useState(locales.filter(l => l.value === locale)[0]);
	const [show, setShow] = useState(false);

	return (
		<div className='relative'>
			{!menuShow && (
				<div
					onClick={() => {
						setShow(!show);
					}}
					className='flex gap-3 items-center cursor-pointer relative ml-2'>
					{selected.title}
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
						<path
							d='M21 9L14.2083 15.8897C13.4062 16.7034 12.0938 16.7034 11.2917 15.8897L4.5 9'
							stroke='black'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>{' '}
				</div>
			)}
			{menuShow && (
				<div
					onClick={() => {
						setShow(!show);
					}}
					className='flex gap-3 items-center cursor-pointer relative py-[14px] px-5 bg-[#F6F7F8] rounded-[20px] text-2xl leading-[1.5] font-semibold hover:opacity-80 active:opacity-60 transition-all ease-in'>
					{selected.title}
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
						<path
							d='M21 9L14.2083 15.8897C13.4062 16.7034 12.0938 16.7034 11.2917 15.8897L4.5 9'
							stroke='black'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>{' '}
				</div>
			)}
			<div
				className={`cursor-pointer  z-[9999] absolute ${menuShow ? 'top-24' : 'top-12'} ${
					menuShow ? 'left-[-10%]' : 'left-[-40%]'
				}  w-52 rounded-xl ${show ? 'opacity-100' : 'opacity-0'}`}>
				{locales.map((local, i) => (
					<div
						key={i}
						className={
							locale === local.value
								? 'text-black bg-[#FFC017] rounded-xl mb-2  py-3 px-5 text-2xl font-semibold  transition duration-150 ease-out hover:ease-in flex justify-between items-center'
								: 'hover:bg-[#FFC017] bg-[#F6F7F8] text-2xl rounded-xl mb-2 py-3 px-5 font-semibold  transition duration-150 ease-out hover:ease-in flex justify-between items-center'
						}
						onClick={() => handleSelect(local.value)}>
						<div className='mr-3'>
							<Image className='local-img' src={local.img} width={40} height={30} alt='uzb icon' />
						</div>
						<div>{local.title}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LangSelect;
