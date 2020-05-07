import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Layout from "../components/layout/layout"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const publications = "One of my interest is pointed in share my knowledge and experiences. In these years, I had the opportunity and the honor to be accepted in several congresses as speaker. Here, you can find the slides, videos, demos, papers and other press clipping that maybe can be of your interest."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
export default () => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Publications"/>
        <SectionText content={publications}/>
      </SectionWrapper>
    </Wrapper>
  </Layout>
)
