import React from 'react';
import { Box, Center, Button, HStack, Icon } from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMouse } from 'react-icons/md';
import './ModalHome.css';
import ButtonProps from '../../button/ButtonProps';

const ModalHome = () => {
    return (
        <Box className="modal-container" style={{ height: '100vh' }}>
           <h1 className="modal-container-title">
               Transformando desejos em maratonas!
           </h1>
            <Center>
                <p className="modal-container-text">
                    Crie sua wish list de animes favoritos e mergulhe em momentos inesquecíveis.
                </p>
            </Center>
            <Center mt="4">
                <ButtonProps  className='modal-container-button'>Inscreva-se</ButtonProps>
            </Center>
            <Center mt="6">
                <HStack spacing="4">
                    <Icon as={FaInstagram} boxSize="6" />
                    <Icon as={FaGithub} boxSize="6" />
                    <Icon as={FaLinkedin} boxSize="6" />
                </HStack>
            </Center>
            <Center mt="20">
  <Icon as={MdMouse} boxSize="8" className="mouse-icon" />
</Center>

        </Box>
    );
};

export default ModalHome;
