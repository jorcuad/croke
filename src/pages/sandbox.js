import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Press from "../components/press";
import Layout from "../components/layout/layout"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const sandbox = "Sometimes I develop little proofs of concept with different technologies. If any of them is interesting and suitable to be public, I will let the code here ready to test. Right now I have nothing prepared, but, in a not so far future I will release some of them."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

export default () => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Sandbox"/>
        <SectionText content={sandbox}/>
        <img src="https://media.giphy.com/media/4oHyOIBIt57ag/giphy.gif" alt="Working on it."/>
      </SectionWrapper>
    </Wrapper>
  </Layout>
)
