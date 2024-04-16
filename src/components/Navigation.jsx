import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { NavbarList } from "./navbar/navbarList";
import { useActive } from "../hook/useActiveNavigation";
import { useMediaQuery } from "@chakra-ui/react";
import loadable from "@loadable/component";
const MobileMenu = loadable(() => import("./navbar/MobileMenu"), {
	resolveComponent: (components) => components.MobileMenu,
});

export const Navigation = () => {
	const active = useActive();
	const [isMobile] = useMediaQuery("(max-width: 768px)");

	return (
		<div className="w-full flex justify-between place-items-center md:pl-10 lg:mt-8 ">
			<div>
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						width="64"
						height="64"
						className="ml-6 mt-6 md:ml-0 md:mt-0 h-12 w-auto md:h-16 xl:h-20 aspect-auto"
					/>
				</Link>
			</div>
			{isMobile && <MobileMenu />}
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
