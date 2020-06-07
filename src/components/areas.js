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
const Container = styled.div`
  ${tw`w-24 h-24 sm:h-32 sm:w-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-6`}
`;

export default props => (
  <Row>
    <Content>
      <Link to="/projects"><Container><Sectionbutton background="projects" section="PROJECTS"/></Container></Link>
      <Link to="/blog"><Container><Sectionbutton background="blog" section="BLOG"/></Container></Link>
    </Content>
    <Content>
      <Link to="/services"><Container><Sectionbutton background="services" section="SERVICES"/></Container></Link>
      <Link to="/press"><Container><Sectionbutton background="press" section="PRESS"/></Container></Link>
    </Content>
    <Content>
      <Link to="/publications"><Container><Sectionbutton background="publications" section="PUBLICATIONS"/></Container></Link>
      <Link to="/sandbox"><Container><Sectionbutton background="sandbox" section="SANDBOX"/></Container></Link>
    </Content>
  </Row>
)
