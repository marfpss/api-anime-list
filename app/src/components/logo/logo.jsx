import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import './Logo.css';

function Logo({ textColor, backgroundColor, fontSize, borderColor }) {
  const logoStyle = {
    background: backgroundColor || 'transparent',  
    fontSize: fontSize || '24px',  
    border: `2px solid ${borderColor || 'transparent'}`, 
  };
  return (
    <div className='logo-bg'>
      <Link to="/">
        <Box className="logo" style={logoStyle}>
          D<span className="colored-letter"></span>EB<span className="colored-letter">V</span>ER
        </Box>
      </Link>
    </div>
  );
}

export default Logo;
