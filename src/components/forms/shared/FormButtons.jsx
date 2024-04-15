import { Stack, Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
export const FormButtons = ({ step, setStep, reset, moveToStep2 }) => {
	return (
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
	);
};
