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
import { EmailIcon, LockIcon, AddIcon } from "@chakra-ui/icons";
import ButtonProps from "../../button/ButtonProps";
import "./ModalRegister.css";
import axios from "axios";

const ModalRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://ec2-18-191-223-138.us-east-2.compute.amazonaws.com:8080/anime-api/v1/auth/register",
        {
          name: fullName,
          email,
          password,
          profile: {
            bio,
            img_url: profileImageUrl,
          },
          role: "role_client",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.status === 201) {
        setRegistrationStatus("success");
      } else {
        setRegistrationStatus("error");
      }
    } catch (error) {
      console.error("Erro ao efetuar o registro:", error);
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
          <Flex align="center">
            <Checkbox
              colorScheme="brand.orange"
              isChecked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            <Box ml="2">Aceitar termos de uso</Box>
            <Spacer />
          </Flex>
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
