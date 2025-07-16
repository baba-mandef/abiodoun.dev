import { Box, Center, Image, useColorModeValue } from "@chakra-ui/react";

export default function Tech({ name, img }) {
  // Style de glassmorphism réaliste avec adaptation light/dark
  const glassStyle = {
    background: useColorModeValue(
      'rgba(255, 255, 255, 0.25)', // light mode
      'rgba(0, 10, 64, 0.23)'     // dark mode
    ),
    borderRadius: '12px',
    backdropFilter: 'blur(12px) saturate(180%)',
    WebkitBackdropFilter: 'blur(12px) saturate(180%)',
    border: useColorModeValue(
      '1px solid rgba(255, 255, 255, 0.18)', // light mode
      '1px solid rgba(255, 255, 255, 0.1)'   // dark mode
    ),
    boxShadow: useColorModeValue(
      '0 8px 32px 0 rgba(31, 38, 135, 0.29)', // light mode
      '0 8px 32px 0 rgba(104, 104, 104, 0.3)'      // dark mode
    ),
    transition: 'all 0.3s ease',
    padding: '8px',
    _hover: {
      transform: 'scale(1.05)',
      boxShadow: useColorModeValue(
        '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
        '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
      )
    }
  };

  return (
    <Box 
      boxSize="60px" 
      sx={glassStyle}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image 
        src={img} 
        alt={name} 
        boxSize="40px"
        objectFit="contain"
        filter={useColorModeValue('none', 'brightness(1.1)')}
      />
    </Box>
  );
}