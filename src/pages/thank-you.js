import React from 'react';
import { SectionTitle, SectionWrapper, SectionText } from '../components/section';
import Popular from '../components/popular';
import Areas from '../components/areas';
import SEO from '../components/seo';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import useTranslations from '../components/useTranslations';

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
const ThanksPage = ({ pageContext, data, location }) => {
  const t = useTranslations();

  return (
    <Wrapper>
      <SEO lang={pageContext.locale} pathname={location.pathname} title={t.thanks.title} />
      <SectionWrapper>
        <SectionTitle header={t.thanks.title} />
        <SectionText content={t.thanks.description} />
        <Areas />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header={t.thanks.popular} />
        <Popular />
      </SectionWrapper>
    </Wrapper>
  );
};

export default ThanksPage;
