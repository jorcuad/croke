import React from "react";
import Card from "./card";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col mb-20 justify-between`}
`;
const Row = styled.div`
  ${tw`flex flex-row justify-between`}
`;

export default props => (
  <Row>
    <Content>
      <Card/>
      <Card/>
      <Card/>
    </Content>
    <Content>
      <Card/>
      <Card/>
      <Card/>
    </Content>
  </Row>
)
