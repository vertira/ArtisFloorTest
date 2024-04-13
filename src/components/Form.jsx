import { useForm } from "react-hook-form";
import { useState } from "react";
import { Steps } from "./forms/Steps";
import { Stack, Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
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
			<div className="flex justify-center">
				<Stack direction="row" spacing={4} className="my-10">
					{step > 0 && (
						<Button
							leftIcon={<ArrowLeftIcon />}
							colorScheme="green"
							variant="outline"
							onClick={() => {
								setStep(step - 1);
								reset();
							}}
						>
							Do tyłu
						</Button>
					)}
					{step === 0 && (
						<Button
							rightIcon={<ArrowRightIcon />}
							colorScheme="green"
							variant="outline"
							onClick={moveToStep2}
						>
							Dalej
						</Button>
					)}
					{step === 1 && (
						<Button
							rightIcon={<ArrowRightIcon />}
							colorScheme="green"
							variant="outline"
							type="submit"
						>
							Wyceń
						</Button>
					)}
					{step === 2 && (
						<Button
							colorScheme="green"
							variant="outline"
							type="submit"
							onClick={() => {
								setStep(0);
								localStorage.clear();
								reset();
							}}
						>
							Reset formularza
						</Button>
					)}
				</Stack>
			</div>
		</form>
	);
};
