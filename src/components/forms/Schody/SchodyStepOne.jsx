/* eslint-disable react/prop-types */
import { Checkbox } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { FadeIn } from "../../../hook/fadeIn";
export const SchodyStepOne = ({ register }) => {
	const [checkedItems, setCheckedItems] = useState(
		JSON.parse(localStorage.getItem("schody"))
			? JSON.parse(localStorage.getItem("schody"))
			: false
	);

	useEffect(() => {
		localStorage.setItem("schody", JSON.stringify(checkedItems));
	}, [checkedItems]);
	const animation = useRef();
	return (
		<FadeIn x={100} duration={1} ref={animation}>
			<div className="flex justify-center lg:mx-0 p-5 rounded-3xl border-2 border-green-600">
				<Checkbox
					{...register(`schody`, { required: true })}
					isChecked={checkedItems}
					onChange={(e) => {
						setCheckedItems(e.target.checked);
					}}
					className="flex flex-col-reverse mr-2"
					colorScheme="green"
					name="schody"
				>
					<img src="src\assets\wycena\stairs.jpg" className="size-52"></img>
					<span className="font-bold font-barlow text-2xl flex justify-center">
						Schody drewniane
					</span>
				</Checkbox>
			</div>
		</FadeIn>
	);
};
