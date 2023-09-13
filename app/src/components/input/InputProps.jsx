import React from 'react';
import { Input } from '@chakra-ui/react';
import '../input/InputProps.css';

const InputProps = ({ placeholder, size, variant, isDisabled, ...rest }) => {
  return (
    <Input
      className={`InputProps ${rest.className || ''}`}
      placeholder={placeholder}
      size={size || 'lg'}
      variant={variant || 'outline'}
      isDisabled={isDisabled || false}
      {...rest}
    />
  );
};

export default InputProps;
