import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Frame = styled.div`
  ${tw`w-64 h-64 flex overflow-hidden rounded bg-croke-purple mb-6`}
`;

const Text = styled.div`
  ${tw`text-xl text-croke-white flex w-full items-center justify-center`}
`;

export default props => (
  <Frame>
    <Text>
      { props.section }
    </Text>
  </Frame>
)
