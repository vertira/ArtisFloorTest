/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
export const Drewno = ({ title, register, errors }) => {
	const storedValue = localStorage.getItem(`${title}-drewno`);
	const [value, setValue] = useState(
		storedValue ? JSON.parse(storedValue) : ""
	);
	const handleChange = (newValue) => {
		setValue(newValue);
	};
	useEffect(() => {
		localStorage.setItem(`${title}-drewno`, JSON.stringify(value));
	}, [value]);
	return (
		<div>
			<span className="font-belle text-2xl xl:text-3xl mr-10">
				Rodzaj drewna
			</span>
			<RadioGroup
				onChange={handleChange}
				value={value}
				colorScheme="green"
				className="flex flex-col xl:items-center"
			>
				<Stack direction="row" className="w-full flex justify-around">
					<div className="flex flex-col-reverse">
						<img src="assets\wycena\dąb.webp" className="size-20" />
						<Radio
							isInvalid={errors[`${title}-drewno`] ? true : false}
							value="dab"
							{...register(`${title}-drewno`, { required: "*Pole wymagane" })}
						>
							<span className="font-barlow text-xl xl:text-2xl flex justify-center">
								Dąb
							</span>
						</Radio>
					</div>
					<div className="flex flex-col-reverse">
						<img src="\assets\wycena\jesion.webp" className="size-20" />
						<Radio
							isInvalid={errors[`${title}-drewno`] ? true : false}
							value="jesion"
							{...register(`${title}-drewno`, { required: "*Pole wymagane" })}
						>
							<span className="font-barlow text-xl xl:text-2xl flex justify-center">
								Jesion
							</span>
						</Radio>
					</div>
					<div className="flex flex-col-reverse">
						<img src="\assets\wycena\buk.webp" className="size-20" />
						<Radio
							isInvalid={errors[`${title}-drewno`] ? true : false}
							value="buk"
							{...register(`${title}-drewno`, { required: "*Pole wymagane" })}
						>
							<span className="font-barlow text-xl xl:text-2xl flex justify-center">
								Buk
							</span>
						</Radio>
					</div>
					<div className="flex flex-col-reverse">
						<img src="\assets\wycena\sosna.webp" className="size-20" />
						<Radio
							isInvalid={errors[`${title}-drewno`] ? true : false}
							value="sosna"
							{...register(`${title}-drewno`, { required: "*Pole wymagane" })}
						>
							<span className="font-barlow text-xl xl:text-2xl flex justify-center">
								Sosna
							</span>
						</Radio>
					</div>
				</Stack>
			</RadioGroup>
			{value
				? ""
				: errors[`${title}-drewno`] && (
						<p style={{ color: "red" }}>{errors[`${title}-drewno`].message}</p>
				  )}
		</div>
	);
};
