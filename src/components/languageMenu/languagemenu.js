import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import EspIcon from '../../../static/esp.png';
import EngIcon from '../../../static/eng.png';

const Wrapper = styled.div`
  ${tw`w-8 md:w-40 h-auto cursor-pointer flex flex-col md:flex-row pt-0 sm:pt-3 md:pt-0`};
`;

const LangIcon = styled.div`
  ${tw`w-8 md:w-20 h-8 md:h-20`};
  background-image: url(${props => props.image});
  background-size: cover;

  &.disabled {
    opacity: 0.4;
  }
`;

const LanguageMenu = props => {
  const { t, i18n } = useTranslation();

  console.log('PRECARGA DEL COMPONENTE DE LENGUAJE');
  console.log(i18n.language);

  const handleInputChange = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <Wrapper>
      <LangIcon
        className={`${i18n.language !== 'es' ? 'disabled' : ''}`}
        onClick={() => handleInputChange('es')}
        image={EspIcon}
      />
      <LangIcon
        className={`${i18n.language !== 'en' ? 'disabled' : ''}`}
        onClick={() => handleInputChange('en')}
        image={EngIcon}
      />
    </Wrapper>
  );
};

export default LanguageMenu;
