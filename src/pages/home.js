import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import ProjectsList from "../components/projects/projectsList";
import Areas from "../components/areas";
import Contact from "../components/contact";
import Blog from "../components/blog";
import Parallax from "../components/parallax";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const blog = "Here you should find some interesting topics about security. I love that point when the software touch the physical world, so, you should expect finding here some interesting hardware projects (or that’s my hope). Right now, the web is under construction so let’s cross our fingers in order to see this site working safe and sound."
const inmail = "You can use this form, my mail or Twitter at @Coke727. Please, feel free to use them if you have any question."
const projects = "I am always willing to start new projects, these are the last ones. As you can see, the topics of the projects are always different. I love to discover new technologies and I tend to start projects related to my interests: Security, Privacy, 3D printing and electronics. You can look here to see all the projects.";
const home = "I always wanted to share my interests following my own way and other blog platforms can't provide me that. I can do the same using Wordpress, Google Sites or whatever but... It's not enought, I need freedom to create and share my knowledge and experiences in the way I want each time. Today, I am writting this introduction but maybe tomorrow I will prefer to create a secret konami code or stream a podcast. This is my digital house and It will follow my rules, expect anything, expect everything.";

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

export default () => (
  <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Security, Electronics and Crazy projects"/>
        <SectionText content={home}/>
        <Areas/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header="Projects" link="/projects"/>
        <SectionText content={projects}/>
        <ProjectsList/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header="Blog" link="/blog"/>
        <SectionText  content={blog}/>
        <Blog last={3}/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header="Get In Touch"/>
        <SectionText  content={inmail}/>
        <Contact/>
      </SectionWrapper>
  </Wrapper>
);
