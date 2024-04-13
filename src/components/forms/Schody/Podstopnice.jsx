/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Checkbox,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
export const Podstopnice = ({ register, errors }) => {
	const storedValueInput = localStorage.getItem("podstopnice-ilosc");
	const storedValueSelect = localStorage.getItem("podstopnice-wybor");
	const storedCheckedItem = localStorage.getItem("podstopnice");
	const [valueInput, setValueInput] = useState(
		storedValueInput ? JSON.parse(storedValueInput) : ""
	);
	const [valueSelect, setValueSelect] = useState(
		storedValueInput ? JSON.parse(storedValueSelect) : ""
	);
	const [checkedItem, setCheckedItem] = useState(
		storedValueInput ? JSON.parse(storedCheckedItem) : false
	);
	const handleChange = (value) => setValueInput(value);
	const handleSelectChange = (e) => setValueSelect(e.target.value);
	useEffect(() => {
		localStorage.setItem("podstopnice", JSON.stringify(checkedItem));
		localStorage.setItem("podstopnice-ilosc", JSON.stringify(valueInput));
		localStorage.setItem("podstopnice-wybor", JSON.stringify(valueSelect));
	}, [checkedItem, valueInput, valueSelect]);

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center mb-2">
				<span
					className={`font-belle text-2xl xl:text-3xl mr-5 xl:mr-10  ${
						checkedItem ? "text-[#020617]" : "text-slate-400"
					}
					}`}
				>
					Podstopnice
				</span>
				<Checkbox
					{...register(`podstopnice`)}
					isChecked={checkedItem}
					onChange={(e) => setCheckedItem(e.target.checked)}
					colorScheme="green"
					name="podstopnice"
				></Checkbox>
			</div>
			{checkedItem && (
				<>
					<div className="flex flex-row items-center">
						<span className="font-belle text-2xl mr-5 xl:mr-10 ml-3 xl:ml-5">
							Ilość podstopnic
						</span>
						<NumberInput
							{...register(`podstopnice-ilosc`, {
								required: "*Pole wymagane",
								min: 1,
								max: 50,
							})}
							className={
								valueInput <= 0 && errors[`podstopnice-ilosc`]
									? "border-px border-red-500 rounded-lg"
									: ""
							}
							maxW="100px"
							mr="2rem"
							min={1}
							max={50}
							value={valueInput}
							onChange={handleChange}
							name="podstopnice-ilosc"
						>
							<NumberInputField />
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
						{valueInput > 0
							? ""
							: errors[`podstopnice-ilosc`] && (
									<p style={{ color: "red" }}>
										{errors[`podstopnice-ilosc`].message}
									</p>
							  )}
					</div>
					<div>
						<span className="font-belle text-2xl mr-5 xl:mr-10 ml-3 xl:ml-5">
							Wykończenie
						</span>
						<Select
							{...register(`podstopnice-wybor`, { required: "*Pole wymagane" })}
							placeholder="Wybierz docelowy efekt podstopnic"
							borderColor={`${
								!valueSelect && errors[`podstopnice-wybor`]
									? "tomato"
									: "inherit"
							}`}
							className="mt-2"
							onChange={handleSelectChange}
							defaultValue={valueSelect}
							name="podstopnice-wybor"
						>
							<option value="brak">
								Cyklinowanie do samodzielnego wykończenia (50 zł/szt)
							</option>
							<option value="farba">Szlif + Farba (80 zł/szt)</option>
							<option value="lakier">
								Szlif + Lakier jednoskładnikowy (80 zł/szt)
							</option>
							<option value="lakier2">
								Szlif + Lakier dwuskładnikowy (90 zł/szt)
							</option>
							<option value="olej">Szlif + olej (80 zł/szt)</option>
							<option value="renowacja">
								Matowienie + warstwa lakieru (30 zł/szt)
							</option>
						</Select>
						{!valueSelect && errors[`podstopnice-wybor`] && (
							<p style={{ color: "red" }}>
								{errors[`podstopnice-wybor`].message}
							</p>
						)}
					</div>
				</>
			)}
		</div>
	);
};
