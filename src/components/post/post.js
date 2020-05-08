import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';
import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby";

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
  ${tw`flex flex-col sm:flex-row justify-between text-xs sm:text-sm md:text-base`}
`;

const MetaIcon = styled.div`
  ${tw`h-4 w-4 inline-block mr-2`}
`;

const Tags = styled.div`
  ${tw`flex text-justify text-croke-purple items-center`}
`;

const Tag = styled.div`
  ${tw`flex ml-2`}
`;

const Date = styled.div`
  ${tw`flex text-justify text-croke-purple items-center`}
`;

const DateWrapper = styled.div`
  ${tw`flex`}
`;

const TagWrapper = styled.p`
  ${tw`flex m-0 p-0 break-all`}
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
            <TagWrapper>
              {props.tags.map(tag => (
                <Tag>
                  <Link to={`/tags/${kebabCase(tag)}/`}>
                    {tag+","}
                  </Link>
                </Tag>
              ))}
            </TagWrapper>
          </Tags>
        :
          <Tags></Tags>
        }
        <Date>
          <MetaIcon><TimeIcon/></MetaIcon>
          <DateWrapper>{props.date}</DateWrapper>
        </Date>
      </Metadata>
    </Content>
  </Post>
)
