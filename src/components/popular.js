import React from "react";
import { Link } from "gatsby";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Post from "./post/popular-post.js";

import Tizona from "../../static/popular/tizona.jpg"
import Marimorena from "../../static/popular/cybercamp.jpg"
import X1red from "../../static/popular/x1redmassegura.png"

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col md:flex-row justify-between`};

  > a {
    margin-bottom: 1rem;
  }
`;

export default props => (
  <Content>
    <Link to="/blog/cybercamp-2019">
      <Post date="02/02/2020" image={Marimorena} title="¡Se ARmó la Marimorena! Cybersecurity in AR" tags="Cybercamp · Security · AR" description="A two hours workshop/talk in Valencia about augmented reality mixed with cybersecurity witch the objective of improving the physical places."/>
    </Link>
    <Link to="/blog/tizonaconf-2019">
      <Post date="02/02/2020" image={Tizona} title="TizonaConf: Cybersecurity in industrial environments" tags="Tizona · Privacy · Educational · Industry" description="Day by day I’m getting used to going CONS on the weekends and the ones I like the most are the ones where I can feel a friendship mood surrounding the place and where people are open to talk, hangout and share."/>
    </Link>
    <Link to="/blog/x1redmassegura2019">
      <Post date="02/02/2020" image={X1red} title="¿Qué hay detrás de los mayordomos virtuales?" tags=" x1RedMásSegura · Privacy · Educational" description="I was invited to talk about privacy in x1RedMásSegura congress. This event aims to teach about the dangerous part of the internet and how to prevent the risks of surfing the net."/>
    </Link>
  </Content>
)
