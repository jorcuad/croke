import React from 'react';
import Section from "../components/section";
import Projects from "../components/projects";
import Areas from "../components/areas";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const content = "Here you should find some interesting topics about security. I love that point when the software touch the physical world, so, you should expect finding here some interesting hardware projects (or that’s my hope). Right now, the web is under construction so let’s cross our fingers in order to see this site working safe and sound."
const inmail = "You can use this form in order to contact me or you can use directly my mail. Also, you can contact me in twitter at @coke727. Please, feel free to contact me or ask me any question."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen mt-40 max-w-4xl px-4`}
`;

export default () => (
  <Wrapper>
      <Section header="Security, Electronics and Crazy projects" content={content}/>
      <Areas/>
      <Section header="Projects" content={content}/>
      <Projects/>
      <Section header="Skills" content={content}/>
      <Section header="Profesional Services" content={content}/>
      <Section header="Blog" content={content}/>
      <Section header="Publications" content={content}/>
      <Section header="In the Press" content={content}/>
      <Section header="Sandbox" content={content}/>
      <Section header="Get In Touch" content={inmail}/>
  </Wrapper>
);
