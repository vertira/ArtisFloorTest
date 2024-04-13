import { useState } from "react";
import { Form } from "../../components/Form";
import { ActiveStep } from "../../components/forms/shared/ActiveStep";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export const Wycena = () => {
	const [step, setStep] = useState(0);
	const [heading, setHeading] = useState(null);
	useGSAP(()=> {
		const section = document.querySelector(".animation");
		gsap.fromTo(
			section,
			{ scale: 0.7, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 1 }
		);
	})

	return (
		<section className="grow flex items-center justify-center animation">
			<div className="w-11/12 flex flex-col  lg:flex-row lg:rounded-3xl my-10">
				<div className="p-6 bg-slate-300 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl flex justify-center">
					<ActiveStep step={step} />
				</div>
				<div className="bg-white flex flex-col grow justify-center items-center rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none ">
					<h2 className="text-3xl p-10 font-belle">{heading}</h2>
					<div className="flex justify-center w-full px-5">
						<Form step={step} setHeading={setHeading} setStep={setStep} />
					</div>
				</div>
			</div>
		</section>
	);
};
