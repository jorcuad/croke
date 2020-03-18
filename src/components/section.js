import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col mb-20`}
`;

const Title = styled.h1`
  ${tw`text-5xl block mb-4 text-croke-purple`}
`;

const Text = styled.p`
  ${tw`text-xl block`}
`;

export default props => (
  <Content>
    <Title>{props.header}</Title>
    <Text>
      { props.content }
    </Text>
  </Content>
)
