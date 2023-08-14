import React, { useState } from "react";
import {
  Box,
  ChakraProvider,
  VStack,
  Flex,
  Spacer,
  Checkbox,
  Text,
  Input,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import ButtonProps from "../../button/ButtonProps";
import "./ModalLogin.css";
import InputProps from "../../input/InputProps";
import axios from "axios";

const ModalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://ec2-18-191-223-138.us-east-2.compute.amazonaws.com:8080/anime-api/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.status === 200) {
        const { token } = response.data;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("Login bem-sucedido");
        setErrorMessage("");
      } else {
        console.error("Erro ao efetuar login");
        setErrorMessage("Erro ao efetuar login");
      }
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
      setErrorMessage("Erro ao efetuar login");
    }
  };

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
          <ButtonProps onClick={handleLogin}>Login</ButtonProps>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default ModalLogin;
