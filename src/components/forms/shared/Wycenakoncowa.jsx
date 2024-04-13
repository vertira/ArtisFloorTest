/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { renamedKeys, renamedValue } from "../../../data/wycenaData";
import { Divider } from "@chakra-ui/react";
import { useCalculationPrice } from "../../../hook/useCalculationPrice";
import { FadeIn } from "../../../hook/fadeIn";
import { ParkietStepThree } from "../Parkiet/ParkietStepThree";
import { SchodyStepThree } from "../Schody/SchodyStepThree";
export const WycenaKoncowa = ({ formData }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const data = Object.entries(formData);
	const filteredKeys = data.filter(
		(element) => element[1] !== false && element[1] !== null
	);
	const schodyData = filteredKeys.filter(
		(el) => el[0].startsWith("schody") || el[0].startsWith("podstopnice")
	);
	const parkietData = filteredKeys.filter(
		(el) =>
			el[0].startsWith("parkiet") ||
			el[0] === "bejcowanie" ||
			el[0] === "szpachlowanie" ||
			el[0] === "podklejanie"
	);

	const useCalc = useCalculationPrice(filteredKeys, setTotalPrice);
	const animation = useRef();
	return (
		<div className="w-full">
			<ul className="flex justify-around flex-col xl:flex-row gap-10 xl:gap-0">
				{schodyData.length > 0 ? (
					<SchodyStepThree
						schodyData={schodyData}
						renamedKeys={renamedKeys}
						renamedValue={renamedValue}
					/>
				) : (
					""
				)}
				{parkietData.length > 0 ? (
					<ParkietStepThree
						parkietData={parkietData}
						renamedKeys={renamedKeys}
						renamedValue={renamedValue}
					/>
				) : (
					""
				)}
			</ul>
			<Divider className="my-10 " />
			<div className="text-4xl font-belle flex justify-center text-slate-900 ">
				<p className="text-4xl xl:text-5xl">
					Cena końcowa:
					<FadeIn duration={2} scale={0.5} ref={animation}>
						<span className="font-barlow ml-10 border-b-4 border-green-600">
							{totalPrice.toLocaleString("pl-PL", {
								maximumFractionDigits: 0,
							})}
							zł
						</span>
					</FadeIn>
				</p>
			</div>
		</div>
	);
};
