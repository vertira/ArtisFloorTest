/* eslint-disable react/prop-types */
import { Switch, Tooltip } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export const ExtraInfo = ({ register }) => {
	const storedValue1 = JSON.parse(localStorage.getItem(`szpachlowanie`));
	const storedValue2 = JSON.parse(localStorage.getItem(`bejcowanie`));
	const storedValue3 = JSON.parse(localStorage.getItem(`podklejanie`));
	const [checkedItems, setCheckedItems] = useState([
		storedValue1 ? storedValue1 : false,
		storedValue2 ? storedValue2 : false,
		storedValue3 ? storedValue3 : false,
	]);
	useEffect(() => {
		localStorage.setItem(`szpachlowanie`, JSON.stringify(checkedItems[0]));
		localStorage.setItem(`bejcowanie`, JSON.stringify(checkedItems[1]));
		localStorage.setItem(`podklejanie`, JSON.stringify(checkedItems[2]));
	}, [checkedItems]);
	return (
		<div className="font-belle text-xl xl:text-2xl flex flex-col space-y-3">
			<div className="flex items-center gap-10">
				<Tooltip label="Wypełnianie szczelin w podłodze" aria-label="A tooltip">
					Szpachlowanie
				</Tooltip>
				<Switch
					{...register("szpachlowanie")}
					id="szpachlowanie"
					size="md"
					colorScheme="green"
					name="szpachlowanie"
					isChecked={checkedItems[0]}
					onChange={(e) => {
						setCheckedItems([
							e.target.checked,
							checkedItems[1],
							checkedItems[2],
						]);
					}}
				/>
			</div>
			<div className="flex items-center gap-10">
				<Tooltip
					label="Nadawanie drewnu pożądanego koloru"
					aria-label="A tooltip"
				>
					Bejcowanie
				</Tooltip>
				<Switch
					{...register(`bejcowanie`)}
					id="bejcowanie"
					size="md"
					colorScheme="green"
					name="bejcowanie"
					isChecked={checkedItems[1]}
					onChange={(e) => {
						setCheckedItems([
							checkedItems[0],
							e.target.checked,
							checkedItems[2],
						]);
					}}
				/>
			</div>
			<div className="flex items-center gap-10">
				<Tooltip
					label="Przyklejanie luźnych klepek do podłoża"
					aria-label="A tooltip"
				>
					Podklejanie
				</Tooltip>
				<Switch
					{...register(`podklejanie`)}
					id="podklejanie"
					size="md"
					colorScheme="green"
					name="podklejanie"
					isChecked={checkedItems[2]}
					onChange={(e) => {
						setCheckedItems([
							checkedItems[0],
							checkedItems[1],
							e.target.checked,
						]);
					}}
				/>
			</div>
		</div>
	);
};
