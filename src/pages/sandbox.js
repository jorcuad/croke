import React from 'react';
import { SectionTitle, SectionWrapper, SectionText } from '../components/section';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import useTranslations from '../components/useTranslations';

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const SandboxPage = props => {
  const t = useTranslations();

  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header={t.sandbox.title} />
        <SectionText content={t.sandbox.description} />
        <img src="https://media.giphy.com/media/4oHyOIBIt57ag/giphy.gif" alt="Working on it." />
      </SectionWrapper>
    </Wrapper>
  );
};

export default SandboxPage;
