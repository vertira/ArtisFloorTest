/* eslint-disable react/prop-types */
import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export const Wykonczenie = ({ title, register, errors }) => {
	const storedValue = localStorage.getItem(`${title}-wybor`);
	const [valueSelect, setValueSelect] = useState(
		storedValue ? JSON.parse(storedValue) : ""
	);
	const handleSelectChange = (e) => {
		setValueSelect(e.target.value);
	};

	useEffect(() => {
		localStorage.setItem(`${title}-wybor`, JSON.stringify(valueSelect));
	});

	return (
		<div className="flex flex-col gap-2">
			<div>
				<span className="font-belle text-2xl xl:text-3xl">Wykończenie</span>
				<Select
					{...register(`${title}-wybor`, { required: "*Pole wymagane" })}
					placeholder="Wybierz docelowy efekt"
					borderColor={`${
						!valueSelect && errors[`${title}-wybor`] ? "tomato" : "inherit"
					}`}
					onChange={handleSelectChange}
					defaultValue={valueSelect}
					name={`${title}-wybor`}
				>
					<option value="brak">
						Cyklinowanie do samodzielnego wykończenia{" "}
						{title === "schody" ? "(100 zł/stopień)" : "(70 zł/m2)"}
					</option>
					<option value="olej">
						Olej / Olejowosk{" "}
						{title === "schody" ? "(130 zł/stopień)" : "(80 zł/m2)"}
					</option>
					<option value="lakier">
						Ekologiczny lakier jednoskładnikowy{" "}
						{title === "schody" ? "(140 zł/stopień)" : "(90 zł/m2)"}
					</option>
					<option value="lakier2">
						Ekologiczny lakier dwuskładnikowy{" "}
						{title === "schody" ? "(150 zł/stopień)" : "(110 zł/m2)"}
					</option>
				</Select>
				{!valueSelect && errors[`${title}-wybor`] && (
					<p style={{ color: "red" }}>{errors[`${title}-wybor`].message}</p>
				)}
			</div>
		</div>
	);
};
