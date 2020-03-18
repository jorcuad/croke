import React from "react";
import "./card.css"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Card = styled.div`
  ${tw`max-w-sm max-h-sm w-full h-48 flex mb-4 overflow-hidden`}
`;

const CardImage = styled.div`
  ${tw`border-croke-purple lg:border-t lg:border lg:border-r-0 lg:border-croke-purple h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`}
`;

const CardContent = styled.div`
  ${tw`border-r border-b border-l border-t border-croke-purple lg:border-l-0 lg:border-t lg:border-croke-purple bg-croke-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}
`;

const CardTitleWrapper = styled.div`
  ${tw`mb-4`}
`;

const CardTitle = styled.div`
  ${tw`text-croke-purple font-bold text-xl mb-2`}
`;

const CardText = styled.p`
  ${tw`text-gray-700 text-base`}
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
    <CardImage className="card-image" title="Woman holding a mug">
    </CardImage>
    <CardContent>
      <CardTitleWrapper>
        <CardTitle>ASSAP TOOL</CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
      </CardTitleWrapper>
      <MetaCardWrapper>
        <MetaCardTextWrapper>
          <MetaCardText>Jorge Cuadrado Saez</MetaCardText>
          <MetaCardTextSub>Aug 18</MetaCardTextSub>
        </MetaCardTextWrapper>
      </MetaCardWrapper>
    </CardContent>
  </Card>
)
