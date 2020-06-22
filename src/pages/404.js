import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
} from '../components/section';
import { Link } from "gatsby"

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { useTranslation } from "react-i18next"

import Error from "../../static/error-404.gif"

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Button = styled.button`
  ${tw`bg-transparent hover:bg-croke-green text-croke-purple font-semibold hover:text-croke-white py-2 px-4 border border-croke-pruple hover:border-transparent rounded`}
`;

const ButtonContainer = styled.button`
  ${tw`w-full`}
`;

const NotFoundPage = (props) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <SectionWrapper>
        <center>
          <SectionTitle header={t("notfound.title")}/>
        </center>
        <img src={Error} alt="Error 404, not found"/>
        <ButtonContainer>
          <Link to="/"><Button>
            {t("notfound.back")}
          </Button></Link>
        </ButtonContainer>
      </SectionWrapper>
    </Wrapper>
  )
}

export default NotFoundPage
