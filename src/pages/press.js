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
