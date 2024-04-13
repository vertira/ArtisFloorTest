/* eslint-disable react/prop-types */
import { Powierzchnia } from "../shared/Powierzchnia";
import { Podstopnice } from "./Podstopnice";
import { Wykonczenie } from "../shared/Wykonczenie";
import { Drewno } from "../shared/Drewno";
import { FadeIn } from "../../../hook/fadeIn";
import { useRef } from "react";
export const SchodyStepTwo = ({ register, errors }) => {
	const animation = useRef()
	return (
		<FadeIn x={-100} duration={1} ref={animation}>
			<div className="flex flex-col justify-between border-2 border-green-600 rounded-lg p-6 gap-5">
				<span className="font-belle text-3xl text-slate-950 brush2 rounded-full w-full xl:w-96 text-center mb-2 self-center">
					Schody
				</span>
				<Powierzchnia
					max={50}
					amount={"stopni"}
					title={"schody"}
					register={register}
					errors={errors}
				/>
				<Podstopnice register={register} errors={errors} />
				<Wykonczenie title={"schody"} register={register} errors={errors} />
				<Drewno title={"schody"} register={register} errors={errors} />
			</div>
		</FadeIn>
	);
};
