import React from "react";
import styled from 'styled-components';
import tw from 'tailwind.macro';

import Waves from "./wavesFooter/wavesFooter.js"
import Rrss from "./rrss.js"

const Wrapper = styled.div`
  ${tw`flex items-end justify-center flex-col w-screen text-croke-white self-end`}
`;

const Content = styled.div`
  ${tw`w-screen h-auto mt-16 px-8 md:px-16 text-5xl flex flex-col sm:flex-row justify-between self-end`}
`;

const Social = styled.div`
  ${tw`flex flex-col sm:w-3/6 lg:max-w-xl`}
`;

const Title = styled.div`
  ${tw`flex text-xl mb-4`}
`;

const SocialReferences = styled.div`
  ${tw`flex justify-between flex-col md:flex-row`}
`;

const ReferenceColumn = styled.div`
  ${tw`flex flex-col`}
`;

const License = styled.div`
  ${tw`flex flex-col text-sm sm:w-2/6 mt-6 sm:mt-0`}
`;
const LicenseIcon = styled.div`
  ${tw`flex flex-col`}
`;
const LicenseText = styled.div`
  ${tw`flex text-xs mt-6 text-justify`}
`;

export default () => (
  <Wrapper>
    <Content>
      <Social>
        <Title>You can contact me here:</Title>
        <SocialReferences>
          <ReferenceColumn>
            <Rrss icon="mail" link="mailto:jorge.cuadrado.saez@gmail.com" rrss="jorge.cuadrado.saez@gmail.com"/>
            <Rrss icon="twitter" link="https://twitter.com/Coke727" rrss="@coke727"/>
          </ReferenceColumn>
          <ReferenceColumn>
            <Rrss icon="linkedin" link="https://www.linkedin.com/in/jorgecuadradosaez/" rrss="in/jorgecuadradosaez/"/>
            <Rrss icon="github" link="https://github.com/jorcuad" rrss="@jorcuad"/>
          </ReferenceColumn>
        </SocialReferences>
      </Social>
      <License>
        <Title>License:</Title>
        <LicenseIcon>
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            <img alt="Licencia de Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
          </a>
        </LicenseIcon>
        <LicenseText>
          This license covers the use of the content present in the domain croke.es. The projects and technologies showed here has its own license, otherwise, this licence will aply them.
        </LicenseText>
      </License>
    </Content>
    <Waves/>
  </Wrapper>
)
