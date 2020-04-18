import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import {
  TagIcon,
  TimeIcon,
} from 'components/icons';

const Post = styled.div`
  ${tw`overflow-hidden flex flex-row mb-10`}
`;

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col ml-4 justify-between h-32 sm:h-40 md:h-48`}
`;

const PostImage = styled.div`
  ${tw`flex  w-32 h-32 sm:w-40 sm:h-40 md:h-48 md:w-48 flex-none bg-cover rounded overflow-hidden`};
  background-image: url(${props => props.image});
`;

const Title = styled.h1`
  ${tw`text-base sm:text-xl md:text-2xl block text-croke-purple`}
`;

const Text = styled.p`
  ${tw`overflow-hidden hidden sm:block h-20 sm:h-24 md:h-32 text-xs sm:text-sm md:text-base text-justify my-2`}
`;

const Metadata = styled.div`
  ${tw`flex flex-row justify-between text-xs sm:text-sm md:text-base`}
`;

const MetaIcon = styled.div`
  ${tw`h-4 w-4 inline-block mr-2`}
`;

const Tags = styled.div`
  ${tw`block text-justify text-croke-purple`}
`;

const Date = styled.div`
  ${tw`block text-justify text-croke-purple`}
`;

// title, tags, description, image
export default props => (
  <Post>
    <PostImage image={props.image}/>
    <Content>
      {props.link ?
        <a href={props.link}>
          <Title>{props.title}</Title>
        </a> : <Title>{props.title}</Title>
      }
      <Text>{props.description}</Text>
      <Metadata>
        {props.tags ?
          <Tags>
            <MetaIcon><TagIcon/></MetaIcon>
            {props.tags}
          </Tags>
        :
          <Tags></Tags>
        }
        <Date>
          <MetaIcon><TimeIcon/></MetaIcon>
          {props.date}
        </Date>
      </Metadata>
    </Content>
  </Post>
)
