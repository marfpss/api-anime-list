import React, { useState, useEffect } from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMouse, MdTouchApp } from 'react-icons/md';
import './ModalHome.css';
import ButtonProps from '../../button/ButtonProps';

const ModalHome = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [iconsVisible, setIconsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setIconsVisible(scrollTop < 100);  
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box className="modal-container" style={{ height: '100vh' }}>
           <h1 className="modal-container-title">
               Transformando desejos em maratonas!
           </h1>
            <p className="modal-container-text">
                Crie sua wish list de animes favoritos e mergulhe em momentos inesquecíveis.
            </p>
            <ButtonProps className='modal-container-button'>Inscreva-se</ButtonProps>
            <div className="modal-container-icons">
                <span>
                    <Icon as={FaInstagram} boxSize="7" className="icon" marginRight="1rem" />
                    <Icon as={FaGithub} boxSize="7" className="icon" marginRight="1rem" />
                    <Icon as={FaLinkedin} boxSize="7" className="icon" />
                </span>
            </div>
            <div className={`icon-fixed-bottom ${iconsVisible ? 'visible' : 'hidden'} ${!iconsVisible ? 'hide-animation' : ''}`}>
                {isMobile ? (
                    <Icon as={MdTouchApp} boxSize="9" className="touch-icon" />
                ) : (
                    <Icon as={MdMouse} boxSize="8" className="mouse-icon" />
                )}
            </div>
        </Box>
    );
};

export default ModalHome;
