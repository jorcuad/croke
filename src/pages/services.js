import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Layout from "../components/layout/layout"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const services = "Right now I'm working in BBVA Next Technologies as a Cybersecuirty Researcher but time to time I get hired as a freelancer for small and medium projects. I have a strong background in security technologies and I have experience working in web and mobile development. If you are interested in hire me as a freelance don't doubt to contact me, right now I'm open to new commissions. Here you can find my profesional profile and usual cost-per-service list."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
export default () => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Professional Services"/>
        <SectionText content={services}/>
      </SectionWrapper>
    </Wrapper>
  </Layout>
)
