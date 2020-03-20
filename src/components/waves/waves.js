import React from "react";
import "./waves.css"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wave = styled.div`
  ${tw`absolute left-0 w-2full h-full bg-repeat-x bg-left-bottom`};
  transform-origin: center bottom;
`;

const WaveWrapper = styled.div`
  ${tw`absolute inset-0 overflow-hidden h-56 sm:h-64`}
`;

const WaveWrapperTop = styled.div`
  ${tw`absolute top-0 w-full overflow-hidden h-11/12 bottom-0 opacity-75 -z-1`};
`;

const WaveWrapperMiddle = styled.div`
  ${tw`absolute top-0 w-full overflow-hidden h-11/12 bottom-0 opacity-50 -z-2`};
`;

const WaveWrapperBottom = styled.div`
  ${tw`absolute top-0 w-full overflow-hidden h-11/12 bottom-0 opacity-100 -z-3`};
`;

export default () => (
  <WaveWrapper className="waveAnimation">
    <WaveWrapperTop className="gradient">
      <Wave className="waveTop"></Wave>
    </WaveWrapperTop>
    <WaveWrapperMiddle className="gradient">
      <Wave className="waveMiddle"></Wave>
    </WaveWrapperMiddle>
    <WaveWrapperBottom className="gradient">
      <Wave className="waveBottom"></Wave>
    </WaveWrapperBottom>
  </WaveWrapper>
)
