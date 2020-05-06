import React from "react";
import { Link } from "gatsby"
import Sectionbutton from "./sectionbutton";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col justify-between`}
`;
const Row = styled.div`
  ${tw`flex flex-row justify-around`}
`;

export default props => (
  <Row>
    <Content>
      <Link to="/projects"><Sectionbutton background="projects" section="PROJECTS"/></Link>
      <Link to="/blog"><Sectionbutton background="blog" section="BLOG"/></Link>
    </Content>
    <Content>
      <Sectionbutton background="services" section="SERVICES"/>
      <Link to="/press"><Sectionbutton background="press" section="PRESS"/></Link>
    </Content>
    <Content>
      <Sectionbutton background="publications" section="PUBLICATIONS"/>
      <Sectionbutton background="sandbox" section="SANDBOX"/>
    </Content>
  </Row>
)
