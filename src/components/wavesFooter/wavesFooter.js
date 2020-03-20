import React from "react";
import "./wavesFooter.css"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wave = styled.div`
  ${tw`h-140 sm:h-100 md:h-80 absolute overflow-hidden -z-1 w-full`};
`;

export default () => (
  <Wave className="waveFooterAnimation">
    <div className="waveFooterWrapperInner bgFooterTop">
      <div className="waveFooter waveFooterTop"></div>
    </div>
    <div className="waveFooterWrapperInner bgFooterMiddle">
      <div className="waveFooter waveFooterMiddle"></div>
    </div>
    <div className="waveFooterWrapperInner bgFooterBottom">
      <div className="waveFooter waveFooterBottom"></div>
    </div>
  </Wave>
)
