import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col mb-20`}
`;

const Title = styled.h1`
  ${tw`text-2xl sm:text-4xl md:text-5xl block mb-4 text-croke-purple`}
`;

const Text = styled.p`
  ${tw`text-base sm:text-lg md:text-xl block text-justify`}
`;

export default props => (
  <Content>
    <Title>{props.header}</Title>
    <Text>
      { props.content }
    </Text>
  </Content>
)
