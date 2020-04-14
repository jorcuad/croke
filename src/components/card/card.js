import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Card = styled.div`
  ${tw`max-w-sm max-h-sm w-full h-40 md:h-48 flex mb-4 overflow-hidden self-center`}
`;

const CardImage = styled.div`
  ${tw`border-croke-purple border-t border border-r-0 w-32 h-40 sm:w-40 md:h-48 md:w-48 flex-none bg-cover rounded-t rounded-t-none rounded-l text-center overflow-hidden`};
  background-image: url(${props => props.image});
`;

const CardContent = styled.div`
  ${tw`border-r border-b border-l border-t border-croke-purple lg:border-l-0 lg:border-t lg:border-croke-purple bg-croke-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}
`;

const CardTitleWrapper = styled.div`
  ${tw`mb-4`}
`;

const CardTitle = styled.div`
  ${tw`text-croke-purple font-bold text-base sm:text-xl mb-2`}
`;

const CardText = styled.p`
  ${tw`text-gray-700 text-xs sm:text-base`}
`;

const MetaCardWrapper = styled.div`
  ${tw`flex items-center`}
`;

const MetaCardTextWrapper = styled.div`
  ${tw`text-sm`}
`;

const MetaCardText = styled.p`
  ${tw`text-croke-purple leading-none`}
`;

const MetaCardTextSub = styled.p`
  ${tw`text-croke-purple`}
`;

export default props => (
  <Card>
    <CardImage image={props.image} className="card-image" title={props.title}>
    </CardImage>
    <CardContent>
      <CardTitleWrapper>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.description}</CardText>
      </CardTitleWrapper>
      <MetaCardWrapper>
        <MetaCardTextWrapper>
          <MetaCardText>{props.link}</MetaCardText>
          <MetaCardTextSub>{props.date}</MetaCardTextSub>
        </MetaCardTextWrapper>
      </MetaCardWrapper>
    </CardContent>
  </Card>
)
