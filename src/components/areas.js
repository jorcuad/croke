import React from 'react';
import { Link } from 'gatsby';
import Sectionbutton from './sectionbutton';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import useTranslations from './useTranslations';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col justify-between`}
`;
const Row = styled.div`
  ${tw`flex flex-row justify-around`}
`;
const Container = styled.div`
  ${tw`w-20 h-20 sm:h-32 sm:w-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-6`}
`;

const Areas = props => {
  const t = useTranslations();

  return (
    <Row>
      <Content>
        <Link to={props.locale === 'en' ? '/en/projects' : '/projects'}>
          <Container>
            <Sectionbutton background="projects" section={t.areas.projects} />
          </Container>
        </Link>
        <Link to={props.locale === 'en' ? '/en/blog' : '/blog'}>
          <Container>
            <Sectionbutton background="blog" section={t.areas.blog} />
          </Container>
        </Link>
      </Content>
      <Content>
        <Link to={props.locale === 'en' ? '/en/services' : '/services'}>
          <Container>
            <Sectionbutton background="services" section={t.areas.services} />
          </Container>
        </Link>
        <Link to={props.locale === 'en' ? '/en/press' : '/press'}>
          <Container>
            <Sectionbutton background="press" section={t.areas.press} />
          </Container>
        </Link>
      </Content>
      <Content>
        <Link to={props.locale === 'en' ? '/en/publications' : '/publications'}>
          <Container>
            <Sectionbutton background="publications" section={t.areas.publications} />
          </Container>
        </Link>
        <Link to={props.locale === 'en' ? '/en/sandbox' : '/sandbox'}>
          <Container>
            <Sectionbutton background="sandbox" section={t.areas.sandbox} />
          </Container>
        </Link>
      </Content>
    </Row>
  );
};

export default Areas;
