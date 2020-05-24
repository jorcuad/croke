import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Layout from "../components/layout/layout"
import { Link } from "gatsby"

import styled from 'styled-components';
import tw from 'tailwind.macro';
import Avatar from "../../static/error-404.gif"

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Button = styled.button`
  ${tw`bg-transparent hover:bg-croke-green text-croke-purple font-semibold hover:text-croke-white py-2 px-4 border border-croke-pruple hover:border-transparent rounded`}
`;

const ButtonContainer = styled.button`
  ${tw`w-full`}
`;

export default () => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <center>
          <SectionTitle header="I can't find this page :("/>
        </center>
        <img src={Avatar}/>
        <ButtonContainer>
          <Link to="/"><Button>
            Go Back Home
          </Button></Link>
        </ButtonContainer>
      </SectionWrapper>
    </Wrapper>
  </Layout>
)
