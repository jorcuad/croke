import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Waves from "./wavesFooter/wavesFooter.js"

const Wrapper = styled.div`
  ${tw`flex items-center justify-center flex-col w-screen`}
`;

export default () => (
  <Wrapper>
    <Waves/>
  </Wrapper>
)
