import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Frame = styled.div`
  ${tw`w-64 h-64 flex overflow-hidden rounded text-center bg-croke-purple mb-4`}
`;

const Text = styled.span`
  ${tw`text-xl block text-croke-white w-full h-full`}
`;

export default props => (
  <Frame>
    <Text>
      { props.section }
    </Text>
  </Frame>
)
