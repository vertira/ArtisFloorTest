/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { ParkietStepOne } from "./Parkiet/ParkietStepOne";
import { SchodyStepOne } from "./Schody/SchodyStepOne";
// import { Taras } from "./Taras/Taras";
import { WycenaKoncowa } from "./shared/Wycenakoncowa";
import { SchodyStepTwo } from "./Schody/SchodyStepTwo";
import { ParkietStepTwo } from "./Parkiet/ParkietStepTwo";

export const Steps = ({ step, register, setHeading, formData, errors }) => {
	switch (step) {
		case 0:
			useEffect(() => {
				setHeading("Wybierz rodzaj renowacji!");
			}, [step]);
			return (
				<div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-around w-full">
					<ParkietStepOne register={register} />
					<SchodyStepOne register={register} />
				</div>
			);
		case 1:
			useEffect(() => {
				setHeading("Dodatkowe informacje");
			}, [step]);
			return (
				<div className="flex flex-col xl:flex-row w-full justify-around mx-0 xl:mx-10 gap-10">
					{JSON.parse(localStorage.getItem("schody")) && (
						<SchodyStepTwo register={register} errors={errors} />
					)}
					{JSON.parse(localStorage.getItem("parkiet")) && (
						<ParkietStepTwo register={register} errors={errors} />
					)}
				</div>
			);

		case 2:
			useEffect(() => {
				setHeading("Wycena");
			}, [step]);
			return (
				<>
					<WycenaKoncowa formData={formData} />
				</>
			);
		default:
			return null;
	}
};
