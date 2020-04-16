import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from 'components/section';
import Project from "../components/projects/project";
import Layout from "../components/layout/layout"

import Assap from "../../static/projects/assap.png"
import Marimorena from "../../static/projects/marimorena.png"
import VdeGuerra from "../../static/projects/wow.png"
import Crokev2 from "../../static/projects/avatar.jpg"
import FreePhone from "../../static/projects/freephone.png"
import Cryptex from "../../static/projects/cryptex.jpg"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const projects = "These are the projects in which I dedicated more time. It is not only about code, there are DIY stuff I made, workshops, educational content and so on. Feel free to contribute/ask/look on them."
const assapDesc = "ASSAP is a multiplatform tool whose aim is to stablish deffensive measures against shoulder surfing attack, technique used for getting confidential information. The application has different security measures that can be configured by the users depending on the moment of use. ASSAP is designed to be simple to use so that anyone without knowledge can activate and use it, preventing other people from obtaining their confidential data such as passwords, bank accounts, private data, etc."
const marmimorenaDesc = "Augmented Reality (AR) is a technology that allows us to show digital objects inside the physical reality using a special set of glasses or a smartphone. This appealing technology is closer than ever and in this workshop we would like to anticipate the future in an exercise of innovation. You will not only learn how this technology works and some keys to keep in mind when working with it but also how to develop different solutions to make our physical spaces more secure digitally."
const freephoneDesc = "This project deals about how to make a phone form scratch and privacy. Some time ago I tried to understanding what are the core parts of an smartphone device, how they interact with the network and check if it's possible a non commercial smartphone, an open and controllable alternative. This project is the summary of a huge amount of knowledge that I learnt researching about GSM, electronics and steganography. For any question about the build up take a look on the documentation or contact me."
const crokev2Desc = "I always wanted to share my interests following my own way and other blog platforms can't provide me that. I can do the same using Wordpress, Google Sites or whatever but... It's not enought, I need freedom to create and share my knowledge and experiences in the way I want each time. This is my digital house and It will follow my rules, expect anything, expect everything."
const vdeguerraDesc = "Vientos de Guerra is a project born to contextualize and enrich a rol table game I mastered with another 3 friends. This was a huge game for 16 people divided in 4 groups of 4 with a custom strategy system mixed with dungeon and dragons misions. All the game was created using the Warcraft Lore and an original history contextualized by the resurection of Ala Muerte, the black dragon."
const cryptexDesc ="In my spare time I enjoy to start this kind of freak/crazy projects with my 3D printer. Particularly, I love to print locks in order to learn how they work. If I have time, I will try to post some other locks I printed, but by now, I prefer to write about my last project of this kind. During the last week I had some extra remote working days. That allowed me to start printing a cryptex."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Row = styled.div`
  ${tw`flex flex-col md:flex-row w-full md:justify-between`}
`;

export default () => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Projects"/>
        <SectionText content={projects}/>
        <Row>
          <Project name="ASSAP" description={assapDesc} image={Assap} code="https://github.com/assap-org/assap/" demo="https://www.youtube.com/watch?v=SLJmaKYcqOg" documentation="https://github.com/assap-org/assap/wiki" contribute="https://github.com/assap-org/assap/projects/2"/>
          <Project name="FreePhone" description={freephoneDesc} image={FreePhone} code="https://github.com/jorcuad/FreePhone" demo="https://raw.githubusercontent.com/jorcuad/FreePhone/master/images/building_freephone.mp4" documentation="https://github.com/jorcuad/FreePhone/wiki"/>
        </Row>
        <Row>
          <Project name="Marimorena" description={marmimorenaDesc} image={Marimorena} code="https://github.com/jorcuad/Cybercamp2019-SecurityAR-Workshop" demo="https://www.youtube.com/watch?v=C0y76fM0GWQ"/>
          <Project name="Croke-V2" description={crokev2Desc} image={Crokev2} code="https://github.com/jorcuad/croke" demo="https://www.croke.es"/>
        </Row>
        <Row>
          <Project name="Vientos de Guerra" description={vdeguerraDesc} image={VdeGuerra} code="https://github.com/jorcuad/VientosDeGuerra" demo="https://vientos-de-guerra.croke.es/"/>
          <Project name="Cryptex" description={cryptexDesc} image={Cryptex} code="https://www.thingiverse.com/thing:3074829" documentation="https://www.croke.es/post/cryptex/"/>
        </Row>
      </SectionWrapper>
    </Wrapper>
  </Layout>
)
