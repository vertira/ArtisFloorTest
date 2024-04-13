import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
export const Taras = () => {
	const [checkedItems, setCheckedItems] = useState(
		JSON.parse(localStorage.getItem("taras"))
	);

	useEffect(() => {
		localStorage.setItem("taras", JSON.stringify(checkedItems));
	}, [checkedItems]);

	return (
		<>
			<div className="p-8 rounded-3xl border-2 border-green-600">
				<Checkbox
					isChecked={checkedItems}
					onChange={(e) => setCheckedItems(e.target.checked)}
					className="flex flex-col-reverse"
					colorScheme="green"
					name="taras"
				>
					<img src="assets\wycena\taras.webp" className="size-52"></img>
					<span className="font-bold font-barlow text-2xl flex justify-center">
						Taras drewniany
					</span>
				</Checkbox>
			</div>
		</>
	);
};
