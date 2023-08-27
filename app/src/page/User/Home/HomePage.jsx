import React from 'react';
import { ChakraProvider, Container, Center } from '@chakra-ui/react';
import { Header , Footer , ModalHome} from '../../../components';


const HomePage = () => {
  return (
    <div>
     <Header />
     <ModalHome />
     <Footer />
    </div>
  );
};

export default HomePage;
