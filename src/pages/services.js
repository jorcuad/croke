import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Sectionbutton from "../components/sectionbutton";
import Contact from "../components/contact";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { useTranslation } from "react-i18next"

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

const ServicesPage = (props) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header={t("services.title")}/>
        <SectionText content={t("services.description")}/>

        <Row>
          <Container><Sectionbutton background="services" section={t("services.webHeader")}/></Container>
          <TextContainer><SectionText content={t("services.web")}/></TextContainer>
        </Row>

        <Row>
          <Container><Sectionbutton background="services" section={t("services.pentestingHeader")}/></Container>
          <TextContainer><SectionText content={t("services.pentesting")}/></TextContainer>
        </Row>

        <Row>
          <Container><Sectionbutton background="services" section={t("services.trainingsHeader")}/></Container>
          <TextContainer><SectionText content={t("services.trainings")}/></TextContainer>
        </Row>

        <Row>
          <Container><Sectionbutton background="services" section={t("services.mobileHeader")}/></Container>
          <TextContainer><SectionText content={t("services.mobile")}/></TextContainer>
        </Row>

        <Row>
          <Container><Sectionbutton background="services" section={t("services.printingHeader")}/></Container>
          <TextContainer><SectionText content={t("services.printing")}/></TextContainer>
        </Row>

        <SectionText content={t("services.cv")}/>
        <Contact/>

      </SectionWrapper>
    </Wrapper>
  )
}

export default ServicesPage
