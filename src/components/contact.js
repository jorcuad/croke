import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`bg-croke-purple`}
`;

export default props => (
  <Wrapper>
    <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" />
      <button>Send</button>
    </form>
  </Wrapper>
)
