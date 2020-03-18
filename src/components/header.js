import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Waves from "./waves/waves.js"
import Avatar from "../../static/avatar.jpg"

const Wrapper = styled.div`
  ${tw`flex items-center justify-center flex-col w-screen overflow-hidden`}
`;

const Content = styled.div`
  ${tw`z-30 w-screen h-40 text-white py-8 px-10 text-5xl flex align-middle`}
`;

const AvatarWrapper = styled.div`
  ${tw`inline-block w-24 h-24 mr-12 relative justify-center items-center content-center justify-center flex-column`}
`;

const Headline = styled.div`
  ${tw`flex-column`}
`;

const Title = styled.h1`
  ${tw`flex flex-row mb-1 text-4xl text-croke-white`}
`;

const Subtitle = styled.h2`
  ${tw`flex flex-row text-2xl text-croke-white`}
`;

export default () => (
  <Wrapper>
    <Waves/>
    <Content>
      <AvatarWrapper>
        <img className="block relative rounded-full h-auto w-24" src={Avatar} alt="Avatar"/>
      </AvatarWrapper>
      <Headline>
        <Title>Jorge Cuadrado Saez</Title>
        <Subtitle>I’m Jorge (AKA Coke), a security researcher working at BBVA Next.</Subtitle>
      </Headline>
    </Content>
  </Wrapper>
)
