import React from 'react';
import { Button } from '@chakra-ui/react';
import '../button/ButtonProps.css';

function ButtonProps(props) {
   
  const { className, colorScheme, size, isLoading, isDisabled, ...restProps } = props;

  return (
    <Button
      className={`ButtonProps ${className}`}  
      size={size || 'md'}  
      isLoading={isLoading || false}  
      isDisabled={isDisabled || false} 
      {...restProps}  
    >
      {props.children}
    </Button>
  );
}

export default ButtonProps;
