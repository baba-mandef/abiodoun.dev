import {
  Center,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";

import { useEffect } from "react";

export default function Path() {
  const steps = [
    { title: "Développeur web à Unicore", description: "Depuis Mai 2023" },
    {
      title: "Développeur web en freelance",
      description: "Depuis decembre 2021",
    },
    {
      title: "Développeur web à Wabo",
      description: "Depuis Octobre 2021",
    },
    {
      title: "Chef technique à Olanike Fondation",
      description: "Depuis Octobre 2020",
    },
    {
      title: "Formateur en Développement web à E4africa",
      description: "Mars 2023 - Mai 2023",
    },
    {
      title: "Développeur et Designer à Izicone",
      description: "Juillet 2022 - Février 2023",
    },
    { title: "Stagiaire a LiftStore", description: "Avril 2022 - Juin 2022" },
    {
      title: "Licence en Systèmes Informatique et Logiciels",
      description: "Juin 2021",
    },
    { title: "Stagiaire a CheapDeals", description: "Avril 2020 - Juin 2022" },
    { title: "Nasa Space App Challenge", description: "Octobre 2019" },
    { title: "Formation en UI/Ux design - Sewema", description: "Août 2019" },
    { title: "Google Hash code", description: "Février 2019" },
    { title: '"Hello World"', description: " Janvier 2016" },
  ];

  const { activeStep, setActiveStep } = useSteps();

  useEffect(() => {
    setActiveStep(13);
  });

  return (
    <Center mt={"30px"}>
      <Stepper index={activeStep} colorScheme="telegram" orientation="vertical" height="650px" gap="0">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={"📍"} />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Center>
  );
}
