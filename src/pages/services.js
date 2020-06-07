import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Layout from "../components/layout/layout"
import Sectionbutton from "../components/sectionbutton";
import Contact from "../components/contact";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const services = "Right now I'm working in BBVA Next Technologies as a Cybersecuirty Researcher but time to time I get hired as a freelancer for small and medium projects. I have a strong background in security technologies and I have experience working in web and mobile development. If you are interested in hire me as a freelance don't doubt to contact me, right now I'm open to new commissions. Here you can find my profesional profile and usual cost-per-service list."
const web = "I have been developing web pages for 6 years now as a freelance and also as a consultant in some of my previous jobs. I have a strong knowledge about design, front-end and backend development. I wouldn't consider myself as a full-stack developer but I know enought technologies to develop a wide range of projects with the highest level of quality."
const pentesting = "Four years working in a security laboratory and a Master Degree in Cybersecurity gives me a deep understanding of security auditing metodologies and technologies. Security consulting, risk assenssments or ethical hacking are some of the services I offer regularly."
const mobile = "Native or multiplatform applications, always with a cybersecurity and usability focus. If you have some task that you think is possible to perform from your mobile or tablet, It is probably truth. This is the right start point for digital transformation in shops or small companies."
const printing = "After 5 years 3D printing I'm willing to accept commissions. I have experience printing in ABS, PLA, FLEX, WOOD, PETG and RESIN. 3D printing gives you the possibility of bring your design to the physical wold. Unique bussiness image and decorations, costplay items or collectable figurines are some of the infinite options."
const cv = "You can check all my professional career and experience through LinkedIn, Github and Twitter all the links are in the footer of this page. Feel free to ask me if you have any commission, doubt or request."
const trainings = "I think a good professional shoul know how to transfer his knowledge. I like give talks and workshops in conferences, also I had the opportunity to teach about security in the university of valladolid. Are you interested in receive a formation in any of the toppics of this web page, security awareness or innovation?"

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Row = styled.div`
  ${tw`flex flex-col sm:flex-row justify-between`};
`;

const TextContainer = styled.div`
  ${tw`flex w-full sm:w-3/4 sm:ml-6`}
`;

const Container = styled.div`
  ${tw`flex flex-grow w-full mb-3 h-12 sm:mb-0 sm:w-56 sm:h-48`}
`;

export default () => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Professional Services"/>
        <SectionText content={services}/>

        <Row>
          <Container><Sectionbutton background="services" section="WEB DESIGN"/></Container>
          <TextContainer><SectionText content={web}/></TextContainer>
        </Row>

        <Row>
          <Container><Sectionbutton background="services" section="PENTESTING"/></Container>
          <TextContainer><SectionText content={pentesting}/></TextContainer>
        </Row>

        <Row>
          <Container><Sectionbutton background="services" section="TRAININGS"/></Container>
          <TextContainer><SectionText content={trainings}/></TextContainer>
        </Row>

        <Row>
          <Container><Sectionbutton background="services" section="MOBILE APPS"/></Container>
          <TextContainer><SectionText content={mobile}/></TextContainer>
        </Row>

        <Row>
          <Container><Sectionbutton background="services" section="3D PRINTING"/></Container>
          <TextContainer><SectionText content={printing}/></TextContainer>
        </Row>

        <SectionText content={cv}/>
        <Contact/>

      </SectionWrapper>
    </Wrapper>
  </Layout>
)
