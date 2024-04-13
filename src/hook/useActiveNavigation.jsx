import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const useActive = () => {
	const [active, setActive] = useState(null);
	const location = useLocation();
	const path = location.pathname;
	const chnangeActive = () => {
		if (location.pathname === "/") {
			setActive("0");
		} else if (location.pathname === "/firma") {
			setActive("1");
		} else if (location.pathname === "/wycena") {
			setActive("2");
		} else if (location.pathname === "/technology") {
			setActive("3");
		}
	};
	useEffect(() => {
		chnangeActive();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [path]);
	return active;
};
