import { useForm } from "react-hook-form";
import { useState } from "react";
import { Steps } from "./forms/Steps";
import { FormButtons } from "./forms/shared/FormButtons";

export const Form = ({ step, setHeading, setStep }) => {
	const [isChecked, setChecked] = useState(true);
	const [formData, setFormData] = useState(null);
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		setStep(step + 1);
		setFormData(data);
	};
	const moveToStep2 = () => {
		if (getValues("parkiet") || getValues("schody")) {
			setStep(step + 1);
			setChecked(true);
		} else setChecked(false);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col justify-between w-full"
		>
			<div className="flex justify-around">
				<Steps
					step={step}
					register={register}
					setHeading={setHeading}
					formData={formData}
					errors={errors}
					setChecked={setChecked}
				/>
			</div>
			{!isChecked && (
				<p className="text-red-500 mx-auto">*Jedno z pól wymagane</p>
			)}
			<FormButtons
				step={step}
				setStep={setStep}
				reset={reset}
				moveToStep2={moveToStep2}
			/>
		</form>
	);
};
