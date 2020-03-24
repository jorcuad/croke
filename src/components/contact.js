import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex content-center w-full`}
`;

const Contact = styled.form`
  ${tw`flex w-full`}
`;

const Fields = styled.div`
  ${tw`flex flex-col justify-between w-full`}
`;

const UpperFields = styled.div`
  ${tw`flex flex-row justify-between w-full mb-4`}
`;

const Name = styled.input`
  ${tw`flex bg-croke-green`}
`;

const Mail = styled.input`
  ${tw`flex bg-croke-green`}
`;

const Message = styled.textarea`
  ${tw`flex h-32 bg-croke-purple mb-4`}
`;

const Send = styled.button`
  ${tw`flex bg-croke-green justify-center w-1/5`}
`;

export default props => (
  <Wrapper>
    <Contact name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <Fields>
        <UpperFields>
          <Name name="name" placeholder="Your Name" type="text"/>
          <Mail name="email" placeholder="name@name.com" type="email"/>
        </UpperFields>
        <Message name="message"/>
        <Send>Send Message</Send>
      </Fields>
    </Contact>
  </Wrapper>
)
