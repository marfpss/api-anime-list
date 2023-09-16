import React from 'react';
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Button,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt, FaCity, FaSortNumericUp,FaTelegramPlane } from 'react-icons/fa'; 
import ButtonProps from '../../button/ButtonProps';

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="2xl">Inscreva-se</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} isFullWidth>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaUser} color="gray.300" />
                </InputLeftElement>
                <Input type="text" placeholder="Nome" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaEnvelope} color="gray.300" />
                </InputLeftElement>
                <Input type="email" placeholder="Email" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaLock} color="gray.300" />
                </InputLeftElement>
                <Input type="password" placeholder="Senha" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaSortNumericUp} color="gray.300" />
                </InputLeftElement>
                <Input type="text" placeholder="CEP" size="sm" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaSortNumericUp} color="gray.300" />
                </InputLeftElement>
                <Input type="text" placeholder="Número" size="sm" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaMapMarkerAlt} color="gray.300" />
                </InputLeftElement>
                <Input type="text" placeholder="Cidade" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={FaCity} color="gray.300" />
                </InputLeftElement>
                <Input type="text" placeholder="Rua" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <Checkbox>
                Concordo com os termos e condições
              </Checkbox>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="flex-start">
          <ButtonProps>Inscrever-se</ButtonProps>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
