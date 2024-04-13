/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import {
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
export const Powierzchnia = ({ register, title, amount, max, errors }) => {
	const storedValue = localStorage.getItem(`${title}-ilosc`);
	const [value, setValue] = useState(
		storedValue ? JSON.parse(storedValue) : ""
	);

	const handleChange = (value) => {
		setValue(value);
	};
	useEffect(() => {
		localStorage.setItem(`${title}-ilosc`, JSON.stringify(value));
	}, [value]);
	return (
		<div className="flex flex-row items-center">
			<h2 className="font-belle text-2xl xl:text-3xl mr-5 xl:mr-10">
				Ilość {amount}
			</h2>
			<NumberInput
				{...register(`${title}-ilosc`, {
					required: "*Pole wymagane",
					min: 1,
					max: 200,
				})}
				maxW="100px"
				mr="2rem"
				className={
					value <= 0 && errors[`${title}-ilosc`]
						? "border-px border-red-500 rounded-lg"
						: ""
				}
				value={value}
				onChange={handleChange}
				min={1}
				max={max}
				name={`${title}-ilosc`}
			>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			{value > 0
				? ""
				: errors[`${title}-ilosc`] && (
						<p style={{ color: "red" }}>{errors[`${title}-ilosc`].message}</p>
				  )}
		</div>
	);
};
