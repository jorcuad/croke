import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col w-screen max-w-4xl px-10 pt-10 mb-10`};
`;

export default ({ children }) => (
  <Content>
    {children}
  </Content>
)
