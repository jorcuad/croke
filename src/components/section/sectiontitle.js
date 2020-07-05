import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h1`
  ${tw`text-2xl sm:text-3xl md:text-5xl block text-croke-purple text-center sm:text-left`}
`;

export default props => (
  <div>
    {props.link ? (
      <Link to={props.link}>
        <Title>{props.header}</Title>
      </Link>
    ) : (
      <Title>{props.header}</Title>
    )}
  </div>
);
