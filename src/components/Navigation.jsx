import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { NavbarList } from "./navbar/navbarList";
import { useActive } from "../hook/useActiveNavigation";
import { useMediaQuery } from "@chakra-ui/react";
import { stack as Menu } from "react-burger-menu";
import { styles } from "../data/navData";
import { useState } from "react";
import { set } from "react-hook-form";
export const Navigation = () => {
	const active = useActive();
	const [isMobile] = useMediaQuery("(max-width: 768px)");
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="w-full flex justify-between place-items-center md:pl-10 lg:mt-8 ">
			<div className="backdrop-blur-xl bg-grayscale1 rounded-full">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						className="ml-6 mt-6 md:ml-0 md:mt-0 h-12 md:h-16 xl:h-20  "
					/>
				</Link>
			</div>
			{isMobile && (
				<Menu right styles={styles} noOverlay isOpen={isOpen}>
					<ul className="flex justify-center">
						<NavbarList active={active} setOpen={setOpen} />
					</ul>
				</Menu>
			)}
			<div className="h-px border-b border-[#979797] z-10 right-[800px] hidden lg:block absolute w-calc"></div>
			{!isMobile && (
				<nav className="hidden md:flex lg:w-207 h-24 bg-grayscale3 backdrop-blur">
					<ul className="flex items-center mx-16 lg:ml-32 lg:mx-0">
						<NavbarList active={active} />
					</ul>
				</nav>
			)}
		</div>
	);
};
