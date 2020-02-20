import React from "react";
import "./wavesFooter.css"

export default () => (
  <div className="waveFooterWrapper waveFooterAnimation">
    <div className="waveFooterWrapperInner bgFooterTop">
      <div className="waveFooter waveFooterTop"></div>
    </div>
    <div className="waveFooterWrapperInner bgFooterMiddle">
      <div className="waveFooter waveFooterMiddle"></div>
    </div>
    <div className="waveFooterWrapperInner bgFooterBottom">
      <div className="waveFooter waveFooterBottom"></div>
    </div>
  </div>
)
