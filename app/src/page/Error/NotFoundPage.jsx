import React from "react";
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import './NotFoundPage.css';
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
     <Box className="error-container" display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Heading fontSize="3rem" color="orange">Erro 404</Heading>
        <Text fontSize="1.5rem" color="white.600" textAlign="center">A página que você está procurando não foi encontrada.</Text>
        <Button as={Link} to="/" mt={4} >Home</Button>
     </Box>
    );
};

export default NotFoundPage;