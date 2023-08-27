import React from "react";
import { Box , Text , Flex, Link, Center } from '@chakra-ui/react';
import './Footer.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Logo} from "../../components";

const Footer = () => {
  return (
    <footer>
     <Box pb="80px" className="footer-container">
      <Logo />
        <p>Sobre nos</p>
        <Center>
        <Flex className="social-icons">
            <Link href="#">
               <FaInstagram />
            </Link>
            <Link href="#">
               <FaGithub />
            </Link>
            <Link href="#">
               <FaLinkedin />
            </Link>
        </Flex>
        </Center>
        <Text className="copyright"> © 2023 DEBVER. Todos os direitos reservados. </Text>
     </Box>
    </footer>
  );
};

export default Footer;