import React from "react";
import styled from 'styled-components';
import { find } from 'styled-components/test-utils';
import { Link } from "gatsby";
import { MenuIcon } from '../icons';
import tw from 'tailwind.macro';
import './header.css'
import Waves from "../waves/waves.js"
import Avatar from "../../../static/avatar.jpg"

const Wrapper = styled.div`
  ${tw`flex items-center justify-center flex-col w-screen`};
`;

const Content = styled.div`
  ${tw`w-screen text-white py-8 px-10 text-5xl flex align-middle flex-col`};
`;

const AvatarWrapper = styled.div`
  ${tw`inline-block w-24 h-24 mr-6 sm:mr-12 relative justify-center flex-column`}
`;

const AvatarImage = styled.img`
  ${tw`block relative rounded-full h-auto w-24 border-4 border-croke-purple hover:border-croke-green`};
  box-shadow: 10px 9px 29px -15px rgba(0,0,0,1);
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
  ${tw`flex w-12 h-12 sm:w-20 sm:h-20 text-croke-white cursor-pointer`};
`;

const Header = styled.div`
  ${tw`flex flex-row justify-between w-full`}
`;

const Bio = styled.div`
  ${tw`flex h-24`}
`;

const WaveContainer = styled.div`
  ${tw`w-full -z-1 absolute inset-0 overflow-hidden`}
`;

const Menu = styled.div`
  ${tw` w-full flex justify-center text-2xl text-croke-white mt-10`};

  > ul li {
    ${tw`hover:text-croke-green flex justify-center cursor-pointer`};
  }
`;

let open = false;
const toggle = function() {
  open = !open;
  let content = find(document.body, Content);
  let wave = find(document.body, WaveContainer);
  let menu = find(document.body, Menu);

  if(open) {
    content.classList.remove('closed');
    content.classList.add('open');
    wave.classList.remove('waves-closed');
    wave.classList.add('waves-opened');
    menu.classList.remove('menu-closed');
    menu.classList.add('menu-opened');
    setTimeout(() => {  menu.classList.add('text-shadow'); }, 750);
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
};

export default () => (
  <Wrapper>
    <Content className="closed menu-transition">
      <Header>
        <Bio>
          <AvatarWrapper>
            <Link to="/"><AvatarImage src={Avatar} alt="Avatar"/></Link>
          </AvatarWrapper>
          <Headline className="text-shadow">
              <Title>Jorge Cuadrado Saez</Title>
              <Subtitle><Croke>I’m &nbsp;</Croke> Jorge (AKA <Croke>&nbsp; Coke</Croke>), a security researcher working at BBVA Next.</Subtitle>
          </Headline>
        </Bio>
        <MenuButton onClick={() => toggle()}>
          <MenuIcon/>
        </MenuButton>
      </Header>
      <Menu className="menu-closed text-transition">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/press">Press</Link></li>
          <li><Link to="/sandbox">Sandbox</Link></li>
        </ul>
      </Menu>
    </Content>
    <WaveContainer className="waves-closed menu-transition">
      <Waves/>
    </WaveContainer>
  </Wrapper>
)
