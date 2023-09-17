import React, { useState } from 'react';
import { Box, Flex, Input, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'; 
import './Header.css';
import { Logo } from '../../components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Flex className="header" align="center" justify="space-between">
      <Logo />
      <Box className="search">
        <Input placeholder="Search For Anime" _placeholder={{ color: 'black' }} variant="filled" background="brand.orange" />
        <IconButton icon={<SearchIcon />} background="brand.orange" />
      </Box>

      <Menu>
        <MenuButton
          as={IconButton}
          className="menu-icon"
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          background="brand.orange"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
        <MenuList>
          <MenuItem>Login</MenuItem>
          <MenuItem>Registre-se</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;