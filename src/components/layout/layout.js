import React from "react";
import "./layout.css"
import Header from "../header";
import Footer from "../footer";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import BgItem1 from "../../../static/Bg1.png"
import BgItem2 from "../../../static/Bg2.png"
import BgItem3 from "../../../static/Bg3.png"

const Padding = styled.div`
  ${tw`w-screen flex items-center justify-center`}
`;

const Background = styled.div`
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
`;

export default ({ children }) => (
  <div>
    <Header/>
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
    <Padding>
      {children}
    </Padding>
    <Footer/>
  </div>
)
