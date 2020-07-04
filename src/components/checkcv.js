import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { DocIcon } from './icons';

const linkVar =
  'https://drive.google.com/drive/folders/1WJcAWAKFWo8KV9upLFVo8PUCjrcfglGc?usp=sharing';

const IconContainer = styled.div`
  ${tw`flex h-20 w-20 text-croke-purple`}
`;

const CvText = styled.div`
  ${tw`flex self-center text-croke-purple text-3xl`}
`;

const Cv = styled.div`
  ${tw`flex flex-row justify-center hover:text-croke-green hover:cursor-pointer`}

  &:hover ${IconContainer}{
    ${tw`text-croke-green`};
  };

  &:hover ${CvText}{
    ${tw`text-croke-green`};
  };
`;

export default props => (
  <Cv>
    <IconContainer>
      <DocIcon />
    </IconContainer>
    <CvText>
      <a href={linkVar} target="_blank" rel="noopener noreferrer">
        Check here my curriculum.
      </a>
    </CvText>
  </Cv>
);
