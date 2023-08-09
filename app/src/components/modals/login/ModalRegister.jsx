import React from 'react';
import { Box, ChakraProvider, Checkbox, VStack } from '@chakra-ui/react';
import ButtonProps from '../../button/ButtonProps';
import InputProps from '../../input/InputProps';
import InputFile from '../../input/InputFile';
import './ModalRegister.css'; 

const ModalRegister = () => {
  return (
    <ChakraProvider>
      <Box className="box">
        <VStack spacing={5} className="form-container">
          <InputFile label="Escolher Foto de Perfil" variant="filled" />
          <InputProps placeholder="Nome Completo" variant="filled" />
          <InputProps placeholder="Email" variant="filled" type="email" />
          <InputProps placeholder="Senha" variant="filled" type="password" />
          <InputProps
            placeholder="Confirmação de Senha"
            variant="filled"
            type="password"
          />
          <InputProps placeholder="Número (Não Obrigatório)" variant="filled" type="tel" />
          <InputProps placeholder="Data de Nascimento" variant="filled" type="date" />
          <ButtonProps>Cadastra-se</ButtonProps>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ModalRegister;
