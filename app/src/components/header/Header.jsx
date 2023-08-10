import React from 'react';
import { Box, Flex, IconButton, Input, Button, Spacer, Checkbox, chakra, useMediaQuery } from '@chakra-ui/react';
import { SettingsIcon , SearchIcon} from '@chakra-ui/icons'; 
import '../header/Header.css';
import InputProps from '../input/InputProps';
import ButtonProps from '../button/ButtonProps';


const Header = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box bg="gray.100" py="2" px="2">
      <Flex align="center">
        <chakra.img src="https://cdn.discordapp.com/attachments/901945232529162250/1139054139100364921/A.png" alt="Logo" w="44px" h="44px" mr="4" />
        {isLargerThan768 && (
          <React.Fragment>
            <IconButton
              icon={<SearchIcon />} 
              variant="ghost"
              aria-label="Configurações"
              />
            <InputProps variant='filled' placeholder="Search"  htmlSize={3} width='auto'/>
            
            <Spacer />
            <IconButton
              icon={<SettingsIcon />} 
              variant="ghost"
              aria-label="Configurações"
            />
            <ButtonProps  ml="2">
              Login
            </ButtonProps>
            <ButtonProps  ml="2">
              Registrar
            </ButtonProps>
          </React.Fragment>
        )}
      </Flex>
    </Box>
  );
};

export default Header;