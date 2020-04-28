import React from "react";
import {
  Twitter,
  Facebook,
  Mail,
  Linkedin,
  Reddit,
  Whatsapp,
  HackerNews,
  Telegram
 } from 'react-social-sharing'

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col justify-center mt-16`};
`;

const Header = styled.div`
  ${tw`flex w-full justify-center text-xl`};
`;

const ShareButtons = styled.div`
  ${tw`flex w-full justify-center`};
`;

export default props => (
  <Content>
    <Header>Share</Header>
    <ShareButtons>
      <Twitter solid small message={props.message + " @coke727"} link={props.link}/>
      <Facebook solid small message={props.message} link={props.link}/>
      <Mail solid small message={props.message} link={props.link}/>
      <Linkedin solid small message={props.message} link={props.link}/>
      <Reddit solid small message={props.message} link={props.link}/>
      <HackerNews solid small message={props.message} link={props.link}/>
      <Whatsapp solid small message={props.message} link={props.link}/>
      <Telegram solid small message={props.message} link={props.link}/>
    </ShareButtons>
  </Content>
)
