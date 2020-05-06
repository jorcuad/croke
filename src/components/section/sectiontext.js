import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Text = styled.p`
  ${tw`text-base sm:text-lg md:text-xl block text-justify`}
`;

export default props => (
  <Text>
      { props.content }
  </Text>
)
