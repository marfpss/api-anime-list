import React from 'react';
import { ChakraProvider, Container, Center } from '@chakra-ui/react';
import { ModalLogin } from '../../components';

const LoginPage = () => {
  return (
    <ChakraProvider>
      <Container as={Center} height="100vh">
        <ModalLogin />
      </Container>
    </ChakraProvider>
  );
};

export default LoginPage;