import React from 'react';
import { Box, Button, ChakraProvider, Checkbox, Input, VStack } from '@chakra-ui/react';
import ButtonProps from '../../button/ButtonProps';
import './ModalLogin.css';

const ModalLogin = () => {
    return (
        <ChakraProvider>
          <Box className="box">
            <VStack spacing={5} className="form-container">
              <input className="input" type="email" name="email" id="email" placeholder="Email"/>
              <Input className="input" type="password" placeholder="Senha" />
              <Checkbox>Lembrar Senha</Checkbox>
              <ButtonProps>Login</ButtonProps>
            </VStack>
          </Box>
        </ChakraProvider>
    );
};

export default ModalLogin;
