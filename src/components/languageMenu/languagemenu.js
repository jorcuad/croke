import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

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
  const { i18n } = useTranslation();
  const [esp, setEsp] = useState();

  var i18nPath = props.slug.startsWith('/es/')
    ? props.slug.replace('/es/', '/')
    : props.slug.replace('/', '/es/');
  const handleInputChange = lang => {
    i18n.changeLanguage(lang);
    const lantm = lang;
  };

  var browserLanguage = i18n.language;

  useEffect(() => {
    if (browserLanguage === 'es') {
      setEsp(true);
    } else {
      setEsp(false);
    }
  }, browserLanguage);

  return (
    <Wrapper>
      <Link to={esp ? props.slug : i18nPath}>
        <LangIcon
          className={esp ? '' : 'disabled'}
          onClick={() => handleInputChange('es')}
          image={EspIcon}
        />
      </Link>
      <Link to={!esp ? props.slug : i18nPath}>
        <LangIcon
          className={!esp ? '' : 'disabled'}
          onClick={() => handleInputChange('en')}
          image={EngIcon}
        />
      </Link>
    </Wrapper>
  );
};

export default LanguageMenu;
