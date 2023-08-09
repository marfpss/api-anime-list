import React, { useState } from 'react';
import { Box, Button, ChakraProvider, Checkbox, VStack, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import ButtonProps from '../../button/ButtonProps';
import './ModalLogin.css';
import InputProps from '../../input/InputProps';

function PasswordInput() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup  size='md'>
      <Input
      
        pr='4.5rem'
        type={show ? 'text' : 'password' }
        placeholder='Senha'
        variant='filled'
      />
      <InputRightElement width='4.5rem'>
        {/* <Button h='1.75rem' size='sm' onClick={handleClick} >
          {show ? 'Hide' : 'Show'}
        </Button> */}
      </InputRightElement>
    </InputGroup>
  );
}

const ModalLogin = () => {
  return (
    <ChakraProvider>
      <Box className="box">
        <VStack spacing={5} className="form-container">
          <InputProps placeholder="Email" variant='filled'/>
          <PasswordInput />
          <Checkbox>Lembrar Senha</Checkbox>
          <ButtonProps>Login</ButtonProps>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ModalLogin;
