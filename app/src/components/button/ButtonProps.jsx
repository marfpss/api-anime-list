import React from 'react';
import { Button } from '@chakra-ui/react';
import '../button/ButtonProps.css';

function ButtonProps(props) {
  return (
    <Button className="ButtonProps" {...props}>
      {props.children}
    </Button>
  );
}

export default ButtonProps;