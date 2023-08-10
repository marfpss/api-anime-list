import React from 'react';
import { Box,  ChakraProvider, Checkbox,  VStack } from '@chakra-ui/react';
import ButtonProps from '../../button/ButtonProps';
import './ModalLogin.css';
import InputProps from '../../input/InputProps';

const ModalLogin = () => {
    return (
        <ChakraProvider>
          <Box className="box">
            <VStack spacing={5} className="form-container">
              <InputProps placeholder="Email" variant='filled' type='email'/>
              <InputProps placeholder="Senha" variant='filled'  type='password'/> 
              <Checkbox  colorScheme='orange' defaultChecked>Lembrar Senha</Checkbox>
              <ButtonProps>Login</ButtonProps>
            </VStack>
          </Box>
        </ChakraProvider>
    );
};

export default ModalLogin;
