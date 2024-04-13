/* eslint-disable react/prop-types */
import {
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	Box,
	useMediaQuery,
} from "@chakra-ui/react";

const steps = [
	{ title: "Krok 1", description: "Wybór renowacji" },
	{ title: "Krok 2", description: "Dodatkowe infromację" },
	{ title: "Krok 3", description: "Wycena" },
];
export const ActiveStep = (props) => {
	const [orientation] = useMediaQuery('(max-width: 1024px)')

	return (
		<Stepper
			index={props.step}
			orientation={orientation? 'horizontal': 'vertical'}
			className="w-full"
			gap="0"
			colorScheme="green"
		>
			{steps.map((step, index) => (
				<Step key={index}>
					<StepIndicator>
						<StepStatus
							complete={<StepIcon />}
							incomplete={<StepNumber />}
							active={<StepNumber />}
						/>
					</StepIndicator>

					<Box>
						<StepTitle>{step.title}</StepTitle>
						<StepDescription>{step.description}</StepDescription>
					</Box>

					<StepSeparator />
				</Step>
			))}
		</Stepper>
	);
};
