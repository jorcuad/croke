import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Post from "./post/popular-post.js";

import Assap from "../../static/projects/assap.png"
import Marimorena from "../../static/projects/marimorena.png"
import Crokev2 from "../../static/projects/avatar.jpg"

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col mb-20 md:flex-row justify-between`}
`;

export default props => (
  <Content>
    <Post date="02/02/2020" image={Assap} title="¡Y se ARmó la Marimorena! Cybersecurity in Augmented Reality" tags="Cybercamp · Security · AR" description="Two month ago Miguel and I were giving a two hours workshop/talk in Valencia about augmented reality mixed with cybersecurity and the objective of improving the physical places and documents security. Cybercamp is organized by INCIBE, Instituto Nacial de Ciberseguridad"/>
    <Post date="02/02/2020" image={Marimorena} title="TizonaConf: Cybersecurity in industrial environments" tags="Tizona · Privacy · Educational · Industry" description="Day by day I’m getting used to going CONS on the weekends and the ones I like the most are the ones where I can feel a friendship mood surrounding the place and where people are open to talk, hangout and share."/>
    <Post date="02/02/2020" image={Crokev2} title="¿Qué hay detrás de los mayordomos virtuales?" tags=" x1RedMásSegura · Privacy · Educational" description="Last Saturday, I was invited to talk about privacy in the x1RedMásSegura congress. This event aims to teach about the dangerous part of the internet and how to prevent the risks of surfing the net. This days are not aim to teach professionals how to use a complex technique or how to create a bombproof infrastructure, x1RedMásSegura"/>
  </Content>
)
