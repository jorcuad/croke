import React from 'react';
import {
  Twitter,
  Facebook,
  Mail,
  Linkedin,
  Reddit,
  Whatsapp,
  HackerNews,
  Telegram,
} from 'react-social-sharing';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import useTranslations from './useTranslations';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col justify-center mt-16`};
`;

const Header = styled.div`
  ${tw`flex w-full justify-center text-xl`};
`;

const ShareButtons = styled.div`
  ${tw`flex w-full justify-center`};
`;

const Share = props => {
  const t = useTranslations();

  return (
    <Content>
      <Header>{t.share.header}</Header>
      <ShareButtons>
        <Twitter
          solid
          small
          message={props.message + ' @coke727 ' + props.link}
          link={props.link}
        />
        <Facebook solid small link={props.link} />
        <Mail solid small subject={props.message} link={props.link} />
        <Linkedin solid small message={props.message} link={props.link} />
        <Reddit solid small link={props.link} />
        <HackerNews solid small message={props.message} link={props.link} />
        <Whatsapp solid small message={props.message} link={props.link} />
        <Telegram solid small message={props.message} link={props.link} />
      </ShareButtons>
    </Content>
  );
};

export default Share;
