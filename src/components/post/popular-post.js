import React from "react";
import "./post.css"

import styled from 'styled-components';
import tw from 'tailwind.macro';

import {
  TagIcon,
  TimeIcon,
} from 'components/icons';

const Post = styled.div`
  ${tw`overflow-hidden flex flex-row justify-center`}
`;

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col ml-4 justify-between h-32 sm:h-40 md:h-48`}
`;

const PostImage = styled.div`
  ${tw`w-72 h-72 md:w-64 md:h-64 bg-cover rounded overflow-hidden flex content-end flex-wrap`};
  background-image: url(${props => props.image});
`;

const Overlay = styled.div`
  ${tw`w-full h-1/3 bg-croke-purple opacity-80 flex flex-wrap px-4 py-4 hover:h-full`};
`;

const Title = styled.h1`
  ${tw`text-base block text-croke-white mt-3`}
`;

const Text = styled.p`
  ${tw`overflow-hidden text-sm text-justify text-croke-white mt-6`}
`;

export default props => (
  <Post>
    <PostImage image={props.image} className="post-image">
      <Overlay className="hover-transition">
        <Title>{props.title}</Title>
        <Text>{props.description}</Text>
      </Overlay>
    </PostImage>
  </Post>
)
