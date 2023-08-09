import React, { useRef, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

const InputFile = ({ label, ...rest }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <Box>
      <Box
        as="label"
        htmlFor="InputFile"
        cursor="pointer"
        border="1px solid var(--input-border)"
        borderRadius="4px"
        padding={{ base: '8px', md: '10px' }}
        display="inline-block"
        background="var(--input)"
      >
        <Text fontSize={{ base: '11px', md: '16px' }}>{fileName || label}</Text>
      </Box>
      <input
        ref={inputRef}
        type="file"
        id="InputFile"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        {...rest}
      />
    </Box>
  );
};

export default InputFile;
