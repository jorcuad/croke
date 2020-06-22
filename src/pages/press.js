import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Press from "../components/press";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { useTranslation } from "react-i18next"

const press = "Somethimes I appear in the media as an invited expert, speaker or even as a reference when some of my personal projects catch the attention of someone. I think that is important to record these little moments when someone is considered as an expert and their contributions are valuable enought to be share in the media."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
const PressPage = (props) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header={t("press.title")}/>
        <SectionText content={t("press.description")}/>
        <Press/>
      </SectionWrapper>
    </Wrapper>
  )
}

export default PressPage
