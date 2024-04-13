/* eslint-disable react/prop-types */
import { Powierzchnia } from "../shared/Powierzchnia";
import { Wykonczenie } from "../shared/Wykonczenie";
import { Drewno } from "../shared/Drewno";
import { ExtraInfo } from "./Extrainfo";
import { FadeIn } from "../../../hook/fadeIn";
import { useRef } from "react";
export const ParkietStepTwo = ({ register, errors }) => {
	const animation = useRef()
	return (
		<FadeIn x={100} duration={1} ref={animation}>
			<div className="flex flex-col justify-between border-2 border-green-600 rounded-lg p-6 gap-5">
				<span className="font-belle text-3xl text-slate-950 brush2 rounded-full w-full xl:w-96 text-center mb-2 self-center">
					Parkiet
				</span>
				<Powierzchnia
					max={200}
					amount={"m2"}
					title={"parkiet"}
					register={register}
					errors={errors}
				/>
				<Wykonczenie title={"parkiet"} register={register} errors={errors} />
				<ExtraInfo register={register} />
				<Drewno title={"parkiet"} register={register} errors={errors} />
			</div>
		</FadeIn>
	);
};
