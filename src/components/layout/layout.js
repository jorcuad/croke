import React from "react";
import "./layout.css"
import Header from "../header";
import Footer from "../footer";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`w-screen flex mb-32 mt-40`}
`;

export default ({ children }) => (
  <div>
    <Header/>
    <Content>
      {children}
    </Content>
    <Footer/>
  </div>
)
