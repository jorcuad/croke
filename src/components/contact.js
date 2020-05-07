import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { navigate } from 'gatsby-link'

const Wrapper = styled.div`
  ${tw`flex content-center w-full`}
`;

const ContactForm = styled.form`
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

{/*<Wrapper>
  <ContactForm onSubmit={handleSubmit} name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true">
    <Fields>
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <UpperFields>
        <Name name="name" placeholder="Your Name" type="text" onChange={handleChange}/>
        <Mail name="email" placeholder="Your Email" type="email" onChange={handleChange}/>
      </UpperFields>
      <Message name="message" onChange={handleChange}/>
      <Send type="submit">Send</Send>
    </Fields>
  </ContactForm>
</Wrapper>*/}

export default () => (
    <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form"/>
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
)
