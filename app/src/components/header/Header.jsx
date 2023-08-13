import React from 'react';
import { Box, Flex, Input, Button, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import './Header.css';

const Header = () => {
  return (
    <Flex className="header" align="center" justify="space-between">
      <div className='logo-bg'> <Box className="logo">DEBVER</Box></div>

      <Box className="search">
      <Input placeholder="Search" _placeholder={{ color: 'black' }} variant="filled" background="brand.orange" />
        <IconButton icon={<SearchIcon />} background="brand.orange" />
      </Box>

      <Menu>
      <MenuButton as={IconButton} className="menu-icon" icon={<HamburgerIcon />} background="brand.orange" />
        <MenuList>
          <MenuItem>Login</MenuItem>
          <MenuItem>Registre-se</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
