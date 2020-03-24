import React from "react";
import "./layout.css"
import Header from "../header";
import Footer from "../footer";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Padding = styled.div`
  ${tw`w-screen flex items-center justify-center mb-32`}
`;

/*const Background = styled.div`
  ${tw`block absolute -z-1 w-screen`}
`;

const LeftWrapper = styled.div`
  ${tw`block absolute left-0`}
`;

const RightWrapper = styled.div`
  ${tw`block absolute right-0`}
`;

const MiddleWrapper = styled.div`
  ${tw`block absolute`}
`;*/

export default ({ children }) => (
  <div>
    <Header/>
    <Padding>
      {children}
    </Padding>
    <Footer/>
  </div>
)

/*
<Background>
  <LeftWrapper>
    <img className="bgImage1 block relative" src={BgItem1} alt="BGItem"/>
  </LeftWrapper>
  <RightWrapper>
    <img className="bgImage2 block relative" src={BgItem2} alt="BGItem"/>
  </RightWrapper>
  <MiddleWrapper>
    <img className="bgImage3 block relative" src={BgItem3} alt="BGItem"/>
  </MiddleWrapper>
</Background>
*/
