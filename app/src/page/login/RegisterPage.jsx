import React from 'react';
import { ChakraProvider, Container, Center } from '@chakra-ui/react';
import { ModalRegister } from '../../components';

const RegisterPage = () => {
  return (
    <ChakraProvider>
      <Container as={Center} height="100vh">
        <ModalRegister />
      </Container>
    </ChakraProvider>
  );
};

export default RegisterPage;