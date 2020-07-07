import React from 'react';
import useTranslations from '../components/useTranslations';

import { SectionTitle, SectionWrapper, SectionText } from '../components/section';
import Project from '../components/projects/project';
import SEO from '../components/seo';

import Assap from '../../static/projects/assap.png';
import Marimorena from '../../static/projects/marimorena.png';
import VdeGuerra from '../../static/projects/wow.png';
import Crokev2 from '../../static/projects/avatar.jpg';
import FreePhone from '../../static/projects/freephone.png';
import Cryptex from '../../static/projects/cryptex.jpg';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Row = styled.div`
  ${tw`flex flex-col md:flex-row w-full md:justify-between`}
`;

const ProjectsPage = ({ props, pageContext, location }) => {
  const t = useTranslations();

  return (
    <Wrapper>
      <SEO lang={pageContext.locale} pathname={location.pathname} title={t.projects.title} />
      <SectionWrapper>
        <SectionTitle header={t.projects.title} />
        <SectionText content={t.projects.projects} />
        <Row>
          <Project
            name="ASSAP"
            description={t.projects.assapDesc}
            image={Assap}
            code="https://github.com/assap-org/assap/"
            demo="https://www.youtube.com/watch?v=SLJmaKYcqOg"
            documentation="https://github.com/assap-org/assap/wiki"
            contribute="https://github.com/assap-org/assap/projects/2"
          />
          <Project
            name="FreePhone"
            description={t.projects.freephoneDesc}
            image={FreePhone}
            code="https://github.com/jorcuad/FreePhone"
            demo="https://raw.githubusercontent.com/jorcuad/FreePhone/master/images/building_freephone.mp4"
            documentation="https://github.com/jorcuad/FreePhone/wiki"
          />
        </Row>
        <Row>
          <Project
            name="Marimorena"
            description={t.projects.marmimorenaDesc}
            image={Marimorena}
            code="https://github.com/jorcuad/Cybercamp2019-SecurityAR-Workshop"
            demo="https://www.youtube.com/watch?v=C0y76fM0GWQ"
          />
          <Project
            name="Croke-V2"
            description={t.projects.crokev2Desc}
            image={Crokev2}
            code="https://github.com/jorcuad/croke"
            demo="https://www.croke.es"
          />
        </Row>
        <Row>
          <Project
            name="Vientos de Guerra"
            description={t.projects.vdeguerraDesc}
            image={VdeGuerra}
            code="https://github.com/jorcuad/VientosDeGuerra"
            demo="https://vientos-de-guerra.croke.es/"
          />
          <Project
            name="Cryptex"
            description={t.projects.cryptexDesc}
            image={Cryptex}
            code="https://www.thingiverse.com/thing:3074829"
            documentation="https://www.croke.es/post/cryptex/"
          />
        </Row>
      </SectionWrapper>
    </Wrapper>
  );
};

export default ProjectsPage;
