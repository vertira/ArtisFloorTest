/* eslint-disable react/prop-types */
import { FadeIn } from "../../../hook/fadeIn";
import { useRef } from "react";
export const ParkietStepThree = ({
	parkietData,
	renamedKeys,
	renamedValue,
}) => {
	const animation = useRef();
	return (
		<FadeIn scale={0.8} duration={1} ref={animation}>
			<div className="flex flex-col justify-between border-2 border-green-600 rounded-lg p-6 gap-5">
				{parkietData.map((el) => (
					<li key={el[0]} className="text-2xl font-belle ">
						{renamedKeys[el[0]] || el[0]} : {renamedValue[el[1]] || el[1]}
					</li>
				))}
			</div>
		</FadeIn>
	);
};
