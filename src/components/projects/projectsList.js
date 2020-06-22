import React from "react";
import Card from "../card/card";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { useTranslation } from "react-i18next"

import Assap from "../../../static/projects/assap.png"
import Marimorena from "../../../static/projects/marimorena.png"
import VdeGuerra from "../../../static/projects/wow.png"
import Crokev2 from "../../../static/projects/avatar.jpg"
import FreePhone from "../../../static/projects/freephone.png"
import Cryptex from "../../../static/projects/cryptex.jpg"

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col md:justify-between`}
`;
const Row = styled.div`
  ${tw`flex flex-col md:flex-row md:justify-between mb-10`}
`;

const ProjectsList = (props) => {
  const { t } = useTranslation()

  return (
    <Row>
      <Content>
        <Card image={Assap} title="ASSAP" description={t("projectsList.assap")} link={t("projectsList.linkOpenSource")}/>
        <Card image={Marimorena} title="Marimorena" description={t("projectsList.marimorena")} link={t("projectsList.linkWorkshop")}/>
        <Card image={VdeGuerra} title="V. de Guerra" description={t("projectsList.vdeguerra")} link={t("projectsList.linkServices")}/>
      </Content>
      <Content>
        <Card image={FreePhone} title="FreePhone" description={t("projectsList.freephone")} link={t("projectsList.linkEducationl")}/>
        <Card image={Crokev2} title="Croke-V2" description={t("projectsList.crokev2")} link={t("projectsList.linkOpenSource")}/>
        <Card image={Cryptex} title="Cryptex" description={t("projectsList.cryptex")} link={t("projectsList.link3dPrinting")}/>
      </Content>
    </Row>
  )
}

export default ProjectsList
