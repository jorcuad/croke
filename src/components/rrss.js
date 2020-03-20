import React from "react";
import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from 'components/icons';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Rrss = styled.div`
  ${tw`flex flex-row mb-3 pt-2 items-center`}
`;

const Link = styled.div`
  ${tw`flex text-sm items-center justify-center ml-4`}
`;

const Icon = styled.div`
  ${tw`flex h-6 w-6`}
`;

export default props => (
  <Rrss>
    <Icon>
      {props.icon === "mail" && <MailIcon/>}
      {props.icon === "twitter" && <TwitterIcon/>}
      {props.icon === "linkedin" && <LinkedInIcon/>}
      {props.icon === "github" && <GitHubIcon/>}
    </Icon>
    <Link>
      <a href={props.link}>{props.rrss}</a>
    </Link>
  </Rrss>
)
