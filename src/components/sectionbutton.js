import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Frame = styled.div`
  ${tw`w-24 h-24 sm:h-32 sm:w-32 md:w-48 md:h-48 lg:w-64 lg:h-64 flex overflow-hidden rounded bg-croke-purple mb-6`}
`;

const Text = styled.div`
  ${tw`text-xs md:text-xl lg:text-2xl text-croke-white flex w-full items-center justify-center`}
`;

export default props => (
  <Frame>
    <Text>
      { props.section }
    </Text>
  </Frame>
)
