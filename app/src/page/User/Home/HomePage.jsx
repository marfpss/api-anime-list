import React from 'react';
import { ChakraProvider, Container, Center } from '@chakra-ui/react';
import { Header , Footer , ModalHome , Faqs } from '../../../components';


const HomePage = () => {
  return (
    <div>
     <Header />
     <ModalHome />
     <Faqs />
     <Footer />
    </div>
  );
};

export default HomePage;
