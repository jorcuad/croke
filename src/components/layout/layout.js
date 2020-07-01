import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './layout.css';
import Header from '../header/header';
import Footer from '../footer';

import withI18next from '../../i18n/withI18next';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`flex w-screen mb-auto pb-32`}
`;

const Container = styled.div`
  ${tw`flex flex-col justify-between h-screen`};
`;

const Layout = ({ children, location, pageContext: { locale } }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [location, i18n, locale]);

  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default withI18next()(Layout);
