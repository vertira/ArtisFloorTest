import { stack as Menu } from "react-burger-menu";
import { useState } from "react";
import { styles } from "../../data/navData";
import { NavbarList } from "./navbarList";
import { useActive } from "../../hook/useActiveNavigation";
export const MobileMenu = () => {
	const [isOpen, setOpen] = useState(false);
	const active = useActive();
	return (
		<Menu right styles={styles} noOverlay isOpen={isOpen}>
			<ul className="flex justify-center">
				<NavbarList active={active} setOpen={setOpen} />
			</ul>
		</Menu>
	);
};
