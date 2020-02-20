import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Waves from "./wavesFooter/wavesFooter.js"
import Avatar from "../../static/avatar.jpg"

const Wrapper = styled.div`
  ${tw`flex items-center justify-center flex-col w-screen`}
`;

const Content = styled.div`
  ${tw`w-screen h-20 text-white pt-8 px-10 text-5xl flex align-middle`}
`;

const AvatarWrapper = styled.div`
  ${tw`inline-block w-24 h-24 mr-12 relative justify-center items-center content-center justify-center flex-column`}
`;

const Headline = styled.div`
  ${tw`flex-column`}
`;

const Title = styled.h1`
  ${tw`flex flex-row text-4xl mb-1`}
`;

const Subtitle = styled.h2`
  ${tw`flex flex-row text-2xl`}
`;

export default () => (
  <Wrapper>
    <Waves/>
    <Content>
      <AvatarWrapper>
        <img className="block relative rounded-full h-24 w-24" src={Avatar} alt="Avatar"/>
      </AvatarWrapper>
      <Headline>
        <Title>Jorge Cuadrado Saez</Title>
        <Subtitle>I’m Jorge (AKA Coke), a security researcher working at BBVA Next.</Subtitle>
      </Headline>
    </Content>
  </Wrapper>
)
