import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex content-center w-full`}
`;

const Contact = styled.form`
  ${tw`flex w-full bg-white rounded px-8 pt-6 pb-8 mb-4`}
`;

const Fields = styled.div`
  ${tw`flex flex-col justify-between w-full`}
`;

const UpperFields = styled.div`
  ${tw`flex flex-row justify-between w-full mb-4 justify-between`}
`;

const Name = styled.input`
  ${tw`flex w-5/12 shadow appearance-none border border-croke-purple rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
`;

const Mail = styled.input`
  ${tw`flex w-6/12 shadow appearance-none border border-croke-purple rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
`;

const Message = styled.textarea`
  ${tw`flex h-32 mb-4 shadow appearance-none border border-croke-purple rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
`;

const Send = styled.button`
  ${tw`flex justify-center w-1/5 bg-croke-purple hover:bg-croke-green text-croke-white hover:text-croke-purple font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
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
