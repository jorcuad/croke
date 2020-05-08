import React from "react";
import "./layout.css"
import Header from "../header/header";
import Footer from "../footer";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`flex w-screen mb-auto pb-32`}
`;

const Container = styled.div`
  ${tw`flex flex-col justify-between h-screen`};
`;

export default ({ children }) => (
  <Container>
    <Header/>
    <Content>
      {children}
    </Content>
    <Footer/>
  </Container>
)
