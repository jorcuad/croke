import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Layout from "../components/layout/layout"
import Popular from "../components/popular";
import Areas from "../components/areas";


import styled from 'styled-components';
import tw from 'tailwind.macro';

const thanks = "Thank you for you interest and support, this simple interactions encourage me to continue this and other projects. I will try to contact you back soon. Meanwhile, you can take a look in the rest of the webpage, I will try to continue upgrading and updating the content so stay tuned."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
export default () => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="The email has been sended. Thanks for your support."/>
        <SectionText content={thanks}/>
        <Areas/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header="Most Popular Posts"/>
        <Popular/>
      </SectionWrapper>
    </Wrapper>
  </Layout>
)
