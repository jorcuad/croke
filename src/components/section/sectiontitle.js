import React from "react";
import { Link } from "gatsby";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h1`
  ${tw`text-5xl block text-croke-purple`}
`;

export default props => (
  <div>
    {props.link ?
      <Link to={props.link}>
        <Title>{props.header}</Title>
      </Link> : <Title>{props.header}</Title>
    }
  </div>
)
