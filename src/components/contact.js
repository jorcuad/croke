import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import ReCAPTCHA from 'react-google-recaptcha';
import useTranslations from './useTranslations';

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

const LineFields = styled.div`
  ${tw`flex flex-row justify-between w-full mb-4 justify-between`}
`;

const LineFieldsResponsive = styled.div`
  ${tw`flex flex-col sm:flex-row justify-between w-full mb-4 justify-between`}
`;

const Contact = props => {
  const t = useTranslations();

  return (
    <Wrapper>
      <form
        className="contact"
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/thank-you">
        <div className="fields">
          <input type="hidden" name="form-name" value="Contact Form" />
          <LineFields>
            <input className="mail" type="email" name="email" placeholder={t.contact.email} />
            <input className="name" type="text" name="name" placeholder={t.contact.name} />
          </LineFields>
          <textarea className="message" name="message" placeholder={t.contact.message} />
          <LineFieldsResponsive>
            <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
            <div>
              <button className="send" type="submit">
                {t.contact.button}
              </button>
            </div>
          </LineFieldsResponsive>
        </div>
      </form>
    </Wrapper>
  );
};

export default Contact;
