import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const useBackground = () => {
	const [background, setBackground] = useState(null);
	const location = useLocation();
	const path = location.pathname;
	const changeBackground = () => {
		if (location.pathname === "/") {
			setBackground(null);
		} else {
			setBackground("bg-firma");
		}
	};
	useEffect(() => {
		changeBackground();
	}, [path]);
	return background;
};
