import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { FiHelpCircle } from 'react-icons/fi'; // Importe o ícone de ajuda

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'O que é DEBVER?',
      answer: 'DEBVER é uma plataforma de gerenciamento de projetos online que ajuda as equipes a colaborarem e acompanharem o progresso de seus projetos de maneira eficaz.',
    },
    {
      question: 'Quais recursos DEBVER oferece?',
      answer: 'DEBVER oferece recursos como gerenciamento de tarefas, calendário, compartilhamento de documentos, acompanhamento de tempo e muito mais para facilitar a gestão de projetos.',
    },
    {
      question: 'Como posso me inscrever no DEBVER?',
      answer: 'Você pode se inscrever no DEBVER visitando nosso site oficial e preenchendo o formulário de inscrição. Após a inscrição, você terá acesso à plataforma e poderá começar a usar nossos recursos.',
    },
    {
      question: 'Existe uma versão gratuita do DEBVER?',
      answer: 'Sim, oferecemos uma versão gratuita do DEBVER com recursos básicos. Você também pode optar por atualizar para nossa versão premium para acessar recursos avançados.',
    },
    {
      question: 'Como faço para entrar em contato com o suporte?',
      answer: 'Você pode entrar em contato com nossa equipe de suporte através do nosso formulário de contato no site ou enviando um e-mail para support@debver.com. Estamos aqui para ajudar com qualquer dúvida ou problema que você possa ter.',
    },
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Accordion allowMultiple>
      {faqData.map((faq, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton
              onClick={() => toggleAccordion(index)}
              bg="gray.100"
              _hover={{ bg: 'gray.200' }}
            >
              <Box flex="1" textAlign="left">
                <FiHelpCircle className="help-icon" /> {/* Use o ícone de ajuda */}
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <p>{faq.answer}</p>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faqs;
