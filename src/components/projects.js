import React from "react";
import Card from "./card/card";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Assap from "../../static/projects/assap.png"
import Marimorena from "../../static/projects/marimorena.png"
import VdeGuerra from "../../static/projects/wow.png"
import Crokev2 from "../../static/projects/avatar.jpg"
import FreePhone from "../../static/projects/freephone.png"
import Cryptex from "../../static/projects/cryptex.jpg"

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col mb-20 md:justify-between`}
`;
const Row = styled.div`
  ${tw`flex flex-col md:flex-row md:justify-between`}
`;

export default props => (
  <Row>
    <Content>
      <Card image={Assap} title="ASSAP" description="Software that helps end user to protect his privacy aginst shoulder surfing." link="Open Source Project"/>
      <Card image={Marimorena} title="Marimorena" description="A practical workshop to learn how to use Augmented Reallity in Security." link="Security Workshop"/>
      <Card image={VdeGuerra} title="V. de Guerra" description="A custom web page made for a D&D campaign inspired in Warcraft." link="Professional Services"/>
    </Content>
    <Content>
      <Card image={FreePhone} title="FreePhone" description="Learn to create a mobile phone from scratch using a Raspberry Pi" link="Educational Project"/>
      <Card image={Crokev2} title="Croke-v2" description="The second version of my personal site using GatsbyJS. You are in it." link="Open Source Project"/>
      <Card image={Cryptex} title="Cryptex" description="Guide about how to create and post-process a functional cryptex." link="3D Printing Project"/>
    </Content>
  </Row>
)
