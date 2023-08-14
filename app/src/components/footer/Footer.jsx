import React from "react";
import { Box , Text , Flex, Link, Center } from '@chakra-ui/react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaDiscord, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
     <Box pb="80px" className="footer-container">
     <Box className="logo">
            D<span className="colored-letter"></span>EB<span className="colored-letter">V</span>ER
          </Box>
        <p>Sobre nos</p>
        <Center>
        <Flex className="social-icons">
            <Link href="#">
               <FaInstagram />
            </Link>
            <Link href="#">
               <FaTwitter />
            </Link>
            <Link href="#">
               <FaDiscord />
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