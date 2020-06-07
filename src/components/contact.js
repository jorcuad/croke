import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { navigate } from 'gatsby-link'
import ReCAPTCHA from "react-google-recaptcha";

const Wrapper = styled.div`
  ${tw`flex content-center w-full`}

  .contact {
    ${tw`flex w-full bg-white rounded px-8 pt-6 pb-8 mb-4`}
  }

  .fields {
    ${tw`flex flex-col justify-between w-full`}
  }

  .upperField {
    ${tw`flex flex-row justify-between w-full mb-4 justify-between`}
  }

  .name {
    ${tw`flex w-5/12 shadow appearance-none border border-croke-purple rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
  }

  .mail {
    ${tw`flex w-6/12 shadow appearance-none border border-croke-purple rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
  }

  .message {
    ${tw`flex h-32 mb-4 shadow appearance-none border border-croke-purple rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
  }

  .send {
    ${tw`flex justify-center bg-croke-purple hover:bg-croke-green text-croke-white hover:text-croke-purple font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
  }
`;

const ContactForm = styled.form`
  ${tw`flex w-full bg-white rounded px-8 pt-6 pb-8 mb-4`}
`;

const Fields = styled.div`
  ${tw`flex flex-col justify-between w-full`}
`;

const LineFields = styled.div`
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

export default () => (
  <Wrapper>
    <form className="contact" name="Contact Form" method="POST" data-netlify="true" action="/thank-you">
      <div className="fields">
        <input type="hidden" name="form-name" value="Contact Form"/>
        <LineFields>
          <input className="mail" type="email" name="email" placeholder="Your Email"/>
          <input className="name" type="text" name="name" placeholder="Your Name"/>
        </LineFields>
        <textarea className="message" name="message" placeholder="Thanks for you interest."/>
        <LineFields>
          <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
          <div>
            <button className="send" type="submit">Send</button>
          </div>
        </LineFields>
      </div>
    </form>
  </Wrapper>
)
