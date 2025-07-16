import { Button, MenuButton, MenuItem, Menu, Icon, MenuList, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaEllipsisV, FaSun, FaMoon, FaGlobe } from "react-icons/fa";

export default function SettingsMenu() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  // Couleurs adaptatives
  const menuBg = useColorModeValue(
    'rgba(255, 255, 255, 0.91)',
    'rgba(0, 10, 64, 0.91)'
  );
  const menuBorder = useColorModeValue(
    '1px solid rgba(255, 255, 255, 0.2)',
    '1px solid rgba(255, 255, 255, 0.1)'
  );

  return (
    <Menu>
      <MenuButton 
        as={Button} 
        size="sm" 
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
      >
        <Icon
          as={FaEllipsisV}
          color="brand.500"
          boxSize={15}
        />
      </MenuButton>
      <MenuList 
        bg={menuBg}
        backdropFilter="blur(20px)"
        border={menuBorder}
        boxShadow={useColorModeValue(
          '0 4px 30px rgba(0, 0, 0, 0.1)',
          '0 4px 30px rgba(0, 0, 0, 0.3)'
        )}
        minW="120px"
      >
        <MenuItem 
          icon={colorMode === 'light' ? <FaMoon color="brand.500" /> : <FaSun color="brand.500" />}
          onClick={toggleColorMode}
          closeOnSelect={false}
          _hover={{ bg: useColorModeValue('rgba(0, 10, 64, 0.1)', 'rgba(255, 255, 255, 0.1)') }}
        >
          {colorMode === 'light' ? 'Mode Sombre' : 'Mode Clair'}
        </MenuItem>
        <MenuItem
          icon = {<FaGlobe color="brand.500" />}
          _hover={{ bg: useColorModeValue('rgba(0, 10, 64, 0.1)', 'rgba(255, 255, 255, 0.1)') }}
        >
          Français
        </MenuItem>
      </MenuList>
    </Menu>
  );
}