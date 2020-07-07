import React, { useState } from 'react';
import styled from 'styled-components';
import { find } from 'styled-components/test-utils';
import { Link } from 'gatsby';
import { MenuIcon, CrossIcon } from '../icons';
import tw from 'tailwind.macro';
import './header.css';
import Waves from '../waves/waves.js';
import Avatar from '../../../static/avatar.png';

import useTranslations from '../useTranslations';
import LanguageMenu from '../languageMenu/languagemenu.js';

const Wrapper = styled.div`
  ${tw`flex items-center justify-center flex-col w-screen`};
`;

const Content = styled.div`
  ${tw`w-screen text-white pb-8 pt-2 sm:py-8 px-1 sm:px-10 text-5xl flex align-middle flex-col`};
`;

const AvatarImage = styled.div`
  ${tw`flex rounded-full h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 mr-2 sm:mr-4 border-4 border-croke-purple hover:border-croke-green`};
  box-shadow: 10px 9px 29px -15px rgba(0, 0, 0, 1);
  background-image: url(${props => props.image});
  background-size: cover;
`;

const Headline = styled.div`
  ${tw`flex flex-col sm:justify-around`}
`;

const Title = styled.h1`
  ${tw`mb-1 text-croke-white text-base sm:text-2xl md:text-3xl lg:text-4xl`}
`;

const Subtitle = styled.h2`
  ${tw`text-croke-white text-xs sm:text-lg md:text-xl lg:text-2xl`}
`;

const Croke = styled.span`
  ${tw`text-croke-green`}
`;

const MenuButton = styled.div`
  ${tw`flex w-12 h-12 sm:w-20 sm:h-20 text-croke-white cursor-pointer sm:mt-2`};
  &.hidden {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  ${tw`flex flex-row justify-between w-full items-center`}
`;

const Bio = styled.div`
  ${tw`flex h-24 items-center`}
`;

const WaveContainer = styled.div`
  ${tw`w-full -z-1 absolute inset-0 overflow-hidden`}
`;

const Menu = styled.div`
  ${tw`w-full flex justify-center text-2xl text-croke-white mt-10`};

  > ul li {
    ${tw`hover:text-croke-green flex justify-center cursor-pointer`};
  }
`;

const Options = styled.div`
  ${tw`flex flex-row items-center`};
`;

const Header = props => {
  const t = useTranslations();
  const [menuopen, setMenuopen] = useState(false);

  const toggle = function() {
    let content = find(document.body, Content);
    let wave = find(document.body, WaveContainer);
    let menu = find(document.body, Menu);

    if (!menuopen) {
      content.classList.remove('closed');
      content.classList.add('open');
      wave.classList.remove('waves-closed');
      wave.classList.add('waves-opened');
      menu.classList.remove('menu-closed');
      menu.classList.add('menu-opened');
      setTimeout(() => {
        menu.classList.add('text-shadow');
      }, 750);
    } else {
      menu.classList.remove('text-shadow');
      setTimeout(() => {
        content.classList.remove('open');
        content.classList.add('closed');
        wave.classList.remove('waves-opened');
        wave.classList.add('waves-closed');
        menu.classList.remove('menu-opened');
        menu.classList.add('menu-closed');
      }, 300);
    }
    setMenuopen(!menuopen);
  };

  return (
    <Wrapper>
      <Content className="closed menu-transition">
        <HeaderWrapper>
          <Bio>
            <Link to={props.locale === 'en' ? '/en' : '/'}>
              <AvatarImage image={Avatar} alt="Avatar" />
            </Link>
            <Headline className="text-shadow">
              <Title>Jorge Cuadrado Saez</Title>
              <Subtitle>
                <Croke>{t.header.titlep1}</Croke>
                {t.header.titlep2}
                <Croke>{t.header.titlep3}</Croke>){t.header.titlep4}
              </Subtitle>
            </Headline>
          </Bio>
          <Options>
            <LanguageMenu slug={props.slug} />
            <MenuButton className={!menuopen ? '' : 'hidden'} onClick={() => toggle()}>
              <MenuIcon />
            </MenuButton>
            <MenuButton className={!menuopen ? 'hidden' : ''} onClick={() => toggle()}>
              <CrossIcon />
            </MenuButton>
          </Options>
        </HeaderWrapper>
        <Menu className="menu-closed text-transition">
          <ul>
            <li>
              <Link onClick={() => toggle()} to={props.locale === 'en' ? '/en' : '/'}>
                {t.header.home}
              </Link>
            </li>
            <li>
              <Link onClick={() => toggle()} to={props.locale === 'en' ? '/en/blog' : '/blog'}>
                {t.header.blog}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => toggle()}
                to={props.locale === 'en' ? '/en/projects' : '/projects'}>
                {t.header.projects}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => toggle()}
                to={props.locale === 'en' ? '/en/publications' : '/publications'}>
                {t.header.publications}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => toggle()}
                to={props.locale === 'en' ? '/en/services' : '/services'}>
                {t.header.services}
              </Link>
            </li>
            <li>
              <Link onClick={() => toggle()} to={props.locale === 'en' ? '/en/press' : '/press'}>
                {t.header.press}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => toggle()}
                to={props.locale === 'en' ? '/en/sandbox' : '/sandbox'}>
                {t.header.sandbox}
              </Link>
            </li>
          </ul>
        </Menu>
      </Content>
      <WaveContainer className="waves-closed menu-transition">
        <Waves />
      </WaveContainer>
    </Wrapper>
  );
};

export default Header;
