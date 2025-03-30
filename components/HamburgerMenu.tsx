"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isRotated, setIsRotated] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prevState) => !prevState);
		setIsRotated((prevState) => !prevState);
	};

	return (
		<>
			<Image
				src="menu.svg"
				alt="menu"
				width={32}
				height={32}
				className={`inline-block cursor-pointer lg:hidden z-30 transition-transform duration-800 ease-in-out ${
					isRotated ? "rotate-[180deg]" : ""
				}`}
				onClick={toggleMenu}
			/>
			<div
				className={`fixed top-0 right-0 z-20 w-full h-full bg-teal-600 text-white p-5 transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex items-center justify-center h-full">
					<ul className="flex flex-col gap-10 text-center">
						{NAV_LINKS.map((link) => (
							<li key={link.key}>
								<Link
									href={link.href}
									className="bold-24 text-gray-900 hover:text-black"
									onClick={() => {setIsOpen(false); setIsRotated(false)}}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default HamburgerMenu;
