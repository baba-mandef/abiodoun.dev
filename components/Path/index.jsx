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
  useColorModeValue,
  background,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function Path() {
  const steps = [
    { title: "Développeur web - Rezolusoft", description: "Février 2024 - maintenant" },
    { title: "Formateur en Informatique – Enseignement supérieur", description: "Depuis Mars 2023" },
    { title: "Développeur web Backend - Quatro", description: "Janvier 2023 - Décembre 2023" },
    { title: "Developpeur web Frontend - Izicone Sarl", description: "Juillet 2022 - Janvier 2023" },
    { title: "Developpeur Web - KASDIGIT", description: "Avril 2022 - Juillet 2022" },
    { title: "Responsable technique - Olanike ONG", description: "Depuis Octobre 2020" },
    { title: "Développeur web fullstack (Stage) - Chipdeals", description: "Mars 2020 - Septembre 2020" },
    { title: "Nasa Space App Challenge (Hackaton)", description: "Octobre 2019" },
    { title: "Formation en UI/Ux design - Sewema", description: "Août 2019" },
    { title: "Google Hash code", description: "Février 2019" },
    { title: '"Hello World"', description: "Janvier 2016" },
  ];

  const { activeStep, setActiveStep } = useSteps();

  useEffect(() => {
    setActiveStep(12);
  }, [setActiveStep]);

  // Définir toutes les valeurs de couleur en dehors du JSX
  const glassBg = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(0, 10, 64, 0.5)');
  const glassBorder = useColorModeValue(
    '1px solid rgba(255, 255, 255, 0.3)',
    '1px solid rgba(255, 255, 255, 0.1)'
  );
  const glassShadow = useColorModeValue(
    '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
  );
  const stepBg = useColorModeValue('rgba(255,255,255,0.3)', 'rgba(0,0,0,0.2)');
  const hoverBg = useColorModeValue('rgba(255,255,255,0.5)', 'rgba(0,0,0,0.3)');
  const titleColor = useColorModeValue('brand_second.500', 'whiteAlpha.900');
  const descColor = useColorModeValue('gray.600', 'gray.300');
  const separatorColor = useColorModeValue('brand', 'whiteAlpha');
  const pinColor = useColorModeValue('brand.500', 'brand.200');

  const glassStyle = {
    background: glassBg,
    borderRadius: '10px',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: glassBorder,
    boxShadow: glassShadow,
    p: 6,
    maxW: { base: '90%', md: '80%', lg: '700px' },
  };

  const stepIndicatorStyle = {
    complete: {
      content: '📍',
      color: pinColor,
      fontSize: 'xl',
      filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
    },
    active: {
      borderColor: 'brand.500',
      bg: 'transparent',
    },
  };

  return (
    <Center py={10}>
      <Box sx={glassStyle}>
        <Stepper 
          index={activeStep} 
          colorScheme={separatorColor}
          orientation="vertical"
        
          gap="0"
        >
          {steps.map((step, index) => (
            <Step key={index} style={{ position: 'relative' }}>
              <StepIndicator>
                <StepStatus 
                  complete={stepIndicatorStyle.complete.content} 
                  active={<StepIcon />}
                />
              </StepIndicator>

              <Box 
                ml={4} 
                mb={6}
                p={3}
                borderRadius="md"
                bg={stepBg}
                _hover={{
                  bg: hoverBg,
                  transform: 'translateX(5px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <StepTitle 
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={titleColor}
                >
                  {step.title}
                </StepTitle>
                <StepDescription 
                  fontSize={{ base: 'sm', md: 'md' }}
                  color={descColor}
                >
                  {step.description}
                </StepDescription>
              </Box>

              <StepSeparator 
                bg={separatorColor}
                color={separatorColor}
                opacity={0.8} // Augmenté l'opacité pour mieux voir
                height="20px" // Augmenté la hauteur
                // Décalé pour s'aligner avec le pin
              />
            </Step>
          ))}
        </Stepper>
      </Box>
    </Center>
  );
}