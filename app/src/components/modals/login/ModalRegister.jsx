import React, { useState } from "react";
import {
  Box,
  ChakraProvider,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, AddIcon } from "@chakra-ui/icons";
import ButtonProps from "../../button/ButtonProps";
import "./ModalRegister.css";

const ModalRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleRegister = () => {
    
    if (fullName && email && password && password === confirmPassword && acceptTerms) {
   
      setRegistrationStatus("success");
    } else {
     
      setRegistrationStatus("error");
    }
  };

  return (
    <ChakraProvider>
      <Box className="box">
        <VStack spacing={5} className="form-container">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AddIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Nome Completo"
              variant="filled"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Email"
              variant="filled"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Senha"
              variant="filled"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Confirmação de Senha"
              variant="filled"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputGroup>
          <Checkbox
            colorScheme="orange"
            isChecked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          >
            Aceitar termos de uso
          </Checkbox>
          <ButtonProps onClick={handleRegister}>Cadastrar</ButtonProps>
          {registrationStatus === "success" && (
            <Text color="green">Registro bem-sucedido!</Text>
          )}
          {registrationStatus === "error" && (
            <Text color="red">
              Erro ao efetuar o registro. Por favor, tente novamente.
            </Text>
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ModalRegister;
