import React from "react";
import Sectionbutton from "./sectionbutton";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col mb-20 justify-between`}
`;
const Row = styled.div`
  ${tw`flex flex-row justify-around`}
`;

export default props => (
  <Row>
    <Content>
      <Sectionbutton section="AREA PROYECTOS"/>
      <Sectionbutton section="AREA BLOG"/>
    </Content>
    <Content>
      <Sectionbutton section="AREA SKILLS"/>
      <Sectionbutton section="AREA PRESS"/>
    </Content>
    <Content>
      <Sectionbutton section="AREA PUBLICACIONES"/>
      <Sectionbutton section="AREA SANDBOX"/>
    </Content>
  </Row>
)
