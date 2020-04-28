import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const SeeMoreContainer = styled.div`
  ${tw`flex flex-row w-full h-8 items-center justify-around cursor-pointer mb-10`};
`;

const Line = styled.div`
  ${tw`flex h-0 border border-croke-purple w-1/3`};
`;

const MoreText = styled.div`
  ${tw`flex cursor-pointer text-croke-purple`};
`;

export default props => (
  <SeeMoreContainer>
    <Line/>
    <MoreText>See more {props.section}</MoreText>
    <Line/>
  </SeeMoreContainer>
);
