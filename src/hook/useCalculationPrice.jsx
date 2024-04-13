/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
export const useCalculationPrice = (filteredKeys, setTotalPrice) => {
	const [priceParkiet, setPriceParkiet] = useState(0);
	const [priceSchody, setPriceSchody] = useState(0);

	useEffect(() => {
		const calculatePriceParkiet = () => {
			const quantity =
				filteredKeys.find((el) => el[0] === "parkiet-ilosc")?.[1] || 0;
			let price = 0;

			switch (filteredKeys.find((el) => el[0] === "parkiet-wybor")?.[1]) {
				case "brak":
					price = 70;
					break;
				case "lakier":
					price = 90;
					break;
				case "olej":
					price = 80;
					break;
				case "lakier2":
					price = 110;
					break;
				default:
					break;
			}
			filteredKeys.find((el) => el[0] === "bejcowanie")?.[1]
				? (price += 10)
				: "";
			filteredKeys.find((el) => el[0] === "szpachlowanie")?.[1]
				? (price += 10)
				: "";
			filteredKeys.find((el) => el[0] === "podklejanie")?.[1]
				? (price += 10)
				: "";
			setPriceParkiet(quantity * price);
		};
		const calculatePriceSchody = () => {
			const quantity =
				filteredKeys.find((el) => el[0] === "schody-ilosc")?.[1] || 0;
			const quantityPodstopnice =
				filteredKeys.find((el) => el[0] === "podstopnice-ilosc")?.[1] || 0;
			let price = 0;
			let pricePodstopnice = 0;

			switch (filteredKeys.find((el) => el[0] === "schody-wybor")?.[1]) {
				case "brak":
					price = 100;
					break;
				case "lakier":
					price = 140;
					break;
				case "olej":
					price = 130;
					break;
				case "lakier2":
					price = 150;
					break;
				default:
					break;
			}
			switch (filteredKeys.find((el) => el[0] === "podstopnice-wybor")?.[1]) {
				case "brak":
					pricePodstopnice = 50;
					break;
				case "farba":
					pricePodstopnice = 80;
					break;
				case "olej":
					pricePodstopnice = 80;
					break;
				case "lakier":
					pricePodstopnice = 80;
					break;
					case "lakier2":
					pricePodstopnice = 90;
					break;
				case "renowacja":
					pricePodstopnice = 30;
					break;
				default:
					break;
			}
			setPriceSchody(quantity * price + quantityPodstopnice * pricePodstopnice);
		};
		setTotalPrice(priceParkiet + priceSchody);
		calculatePriceParkiet();
		calculatePriceSchody();
	}, [priceParkiet, priceSchody]);
};
