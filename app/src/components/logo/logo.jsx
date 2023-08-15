import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import './Logo.css';

function Logo() {
  return (
    <div className='logo-bg'>
      <Link to="/">
        <Box className="logo">
          D<span className="colored-letter"></span>EB<span className="colored-letter">V</span>ER
        </Box>
      </Link>
    </div>
  );
}

export default Logo;
