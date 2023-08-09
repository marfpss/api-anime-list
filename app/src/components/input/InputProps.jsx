import React from 'react';
import { Input } from '@chakra-ui/react';
import '../input/InputProps.css';

const InputProps = ({ placeholder, ...rest }) => {
  return (
    <Input
      className="InputProps"
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default InputProps;
