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
    { title: "Développeur web à Quatro", description: "Mai 2023 - Décembre 2023" },

    {
      title: "Formateur en Développement web - E4africa",
      description: "Mars 2023 - Mai 2023",
    },
    {
      title: "Developpeur web Frontend - Izicone Sarl",
      description: "Juillet 2022 - Janvier 2023",
    },
    { title: "Developpeur Web (stage) - LiftStore",
      description: "Avril 2022 - Juin 2022"
    },
    {
      title: "Licence en Systèmes Informatique et Logiciels",
      description: "Juin 2021",
    },
    {
      title: "Chef technique - Olanike Fondation",
      description: "Depuis Octobre 2020",
    },
    {
      title: "Dévéloppeur web - Bouqinez Bénin",
      description: "Septembre 2020 - Octobre 2020",
    },
    { title: "Développeur web fullstack (Stage) - Chipdeals", description: "Mars 2020 - Mai 2020" },
    { title: "Nasa Space App Challenge (Hackaton)", description: "Octobre 2019" },
    { title: "Formation en UI/Ux design - Sewema", description: "Août 2019" },
    { title: "Google Hash code (Hackaton)", description: "Février 2019" },
    { title: '"Hello World"', description: " Janvier 2016" },
  ];

  const { activeStep, setActiveStep } = useSteps();

  useEffect(() => {
    setActiveStep(12);
  });

  return (
    <Center >
      <Stepper mt={"30px"} index={activeStep} colorScheme="telegram" orientation="vertical" height="700px" gap="0">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={"📍"} />
            </StepIndicator>

            <Box >
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
