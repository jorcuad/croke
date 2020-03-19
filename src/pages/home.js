import React from 'react';
import Section from "../components/section";
import Projects from "../components/projects";
import Areas from "../components/areas";
import Contact from "../components/contact";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const blog = "Here you should find some interesting topics about security. I love that point when the software touch the physical world, so, you should expect finding here some interesting hardware projects (or that’s my hope). Right now, the web is under construction so let’s cross our fingers in order to see this site working safe and sound."
const inmail = "You can use this form in order to contact me or you can use directly my mail. Also, you can contact me in twitter at @coke727. Please, feel free to contact me or ask me any question."
const projects = "I am always willing to start new projects, these are the last ones. As you can see, the topics of the projects are always different. I love to discover new technologies and I tend to start projects related to my interests: Security, Privacy, 3D printing and electronics. You can look here to see all the projects.";
const home = "I always wanted to share my interests following my own way and other blog platforms can't provide me that. I can do the same using Wordpress, Google Sites or whatever but... It's not enought, I need freedom to create and share my knowledge and experiences in the way I want each time. Today, I am writting this introduction but maybe tomorrow I will prefer to create a secret konami code or stream a podcast. This is my digital house and It will follow my rules, expect anything, expect everything.";

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen mt-40 max-w-4xl px-4`}
`;

export default () => (
  <Wrapper>
      <Section header="Security, Electronics and Crazy projects" content={home}/>
      <Areas/>
      <Section header="Projects" content={projects}/>
      <Projects/>
      <Section header="Blog" content={blog}/>
      <Section header="Get In Touch" content={inmail}/>
      <Contact/>
  </Wrapper>
);
