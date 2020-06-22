import React from "react";
import "./layout.css"
import Header from "../header/header";
import Footer from "../footer";

import { withTrans } from '../../i18n/withTrans'
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`flex w-screen mb-auto pb-32`}
`;

const Container = styled.div`
  ${tw`flex flex-col justify-between h-screen`};
`;

const Layout = ({ children, t, i18n  }) => {
  return (
    <Container>
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer/>
    </Container>
  )
}

export default withTrans(Layout)
