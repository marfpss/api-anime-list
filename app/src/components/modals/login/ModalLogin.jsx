import React, { useState } from "react";
import {
  Box,
  ChakraProvider,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import ButtonProps from "../../button/ButtonProps";
import "./ModalLogin.css";

const ModalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  return (
    <ChakraProvider>
      <Box className="box">
        <VStack spacing={5} className="form-container">
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
          <Checkbox
            colorScheme="orange"
            defaultChecked={rememberPassword}
            onChange={() => setRememberPassword(!rememberPassword)}
          >
            Lembrar Senha
          </Checkbox>
          <ButtonProps /* Login */>Login</ButtonProps>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ModalLogin;
