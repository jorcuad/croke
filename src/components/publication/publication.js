import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';

import { TagIcon, TimeIcon } from 'components/icons';

const Publication = styled.div`
  ${tw`overflow-hidden flex flex-col mb-10`}
`;

const Content = styled.div`
  ${tw`flex flex-col px-4 justify-between sm:h-48`}
`;

const PublicationImage = styled.div`
  ${tw`flex  w-32 h-32 sm:w-40 sm:h-40 md:h-48 md:w-48 flex-none bg-cover rounded-t overflow-hidden`};
  background-image: url(${props => props.image});
`;

const Title = styled.h1`
  ${tw`text-base sm:text-xl md:text-2xl block text-croke-purple text-justify`}
`;

const Text = styled.p`
  ${tw`flex text-xs sm:text-sm md:text-base text-justify my-2`}
`;

const Metadata = styled.div`
  ${tw`flex flex-col sm:flex-row justify-between text-xs sm:text-sm md:text-base mt-2`}
`;

const MetaIcon = styled.div`
  ${tw`h-4 w-4 inline-block mr-2`}
`;

const Tags = styled.div`
  ${tw`flex text-justify text-croke-purple items-center`}
`;

const Date = styled.div`
  ${tw`flex text-justify text-croke-purple items-center`}
`;

const DateWrapper = styled.div`
  ${tw`flex`}
`;

const TagWrapper = styled.p`
  ${tw`block overflow-hidden m-0 p-0 break-all text-left`}
`;

const Tag = styled.span`
  ${tw`ml-2`}
`;

const Button = styled.button`
  ${tw`flex bg-croke-purple hover:bg-croke-green text-croke-white font-bold py-2 px-3 border-b-4 border-croke-green hover:text-croke-purple hover:border-croke-purple rounded mr-1 text-xs sm:text-base`}
`;

const Row = styled.div`
  ${tw`flex w-full h-full flex-row`}
`;

const ColLeft = styled.div`
  ${tw`flex flex-col`}
`;

const ColRight = styled.div`
  ${tw`flex flex-col w-2/3 sm:w-auto`}
`;

const PublicationLinks = styled.div`
  ${tw`flex-row py-2 ml-4 hidden md:flex`};
`;

const PublicationLinksSmall = styled.div`
  ${tw`flex w-32 sm:w-40 md:hidden`};
`;

const ButtonContainer = styled.div`
  ${tw`w-full flex flex-row flex-wrap justify-between`};
  a {
    ${tw`mt-2 flex`}
  }
`;

const Category = styled.div`
  ${tw`flex h-14 w-32 min-w-32 sm:w-40 sm:min-w-40 md:w-48 md:min-w-48 bg-croke-purple items-stretch`}
`;

const CategoryText = styled.span`
  ${tw`flex self-center text-croke-white justify-center w-full`}
`;

const PublicationComponent = props => {
  let tagNumber = 0;
  if (props.tags) {
    tagNumber = props.tags.length;
  }

  return (
    <Publication>
      <Row>
        <ColLeft>
          <PublicationImage image={props.image} />
          <Category>
            <CategoryText>{props.category}</CategoryText>
          </Category>
          <PublicationLinksSmall>
            <ButtonContainer>
              {props.code && (
                <a href={props.code}>
                  <Button>Code</Button>
                </a>
              )}
              {props.slides && (
                <a href={props.slides}>
                  <Button>Slides</Button>
                </a>
              )}
              {props.blog && (
                <a href={props.blog}>
                  <Button>Blog</Button>
                </a>
              )}
              {props.video && (
                <a href={props.video}>
                  <Button>Video</Button>
                </a>
              )}
              {props.web && (
                <a href={props.web}>
                  <Button>Web</Button>
                </a>
              )}
              {props.document && (
                <a href={props.document}>
                  <Button>Document</Button>
                </a>
              )}
              {props.con && (
                <a href={props.con}>
                  <Button>Conference</Button>
                </a>
              )}
            </ButtonContainer>
          </PublicationLinksSmall>
        </ColLeft>
        <ColRight>
          <Content>
            {props.link ? (
              <a href={props.link}>
                <Title>{props.title}</Title>
              </a>
            ) : (
              <Title>{props.title}</Title>
            )}
            <Metadata>
              {props.tags ? (
                <Tags>
                  <MetaIcon>
                    <TagIcon />
                  </MetaIcon>
                  <TagWrapper>
                    {props.tags.map((tag, i) => {
                      return tagNumber === i + 1 ? (
                        <Tag key={i}>
                          <Link
                            to={
                              props.locale === 'en'
                                ? `/en/tags/${kebabCase(tag)}/`
                                : `/tags/${kebabCase(tag)}/`
                            }>
                            {tag}
                          </Link>
                        </Tag>
                      ) : (
                        <Tag key={i}>
                          <Link
                            to={
                              props.locale === 'en'
                                ? `/en/tags/${kebabCase(tag)}/`
                                : `/tags/${kebabCase(tag)}/`
                            }>
                            {tag + ','}
                          </Link>
                        </Tag>
                      );
                    })}
                  </TagWrapper>
                </Tags>
              ) : (
                <Tags></Tags>
              )}
              <Date>
                <MetaIcon>
                  <TimeIcon />
                </MetaIcon>
                <DateWrapper>{props.date}</DateWrapper>
              </Date>
            </Metadata>
            <Text>{props.description}</Text>
          </Content>
          <PublicationLinks>
            {props.code && (
              <a href={props.code}>
                <Button>Code</Button>
              </a>
            )}
            {props.slides && (
              <a href={props.slides}>
                <Button>Slides</Button>
              </a>
            )}
            {props.video && (
              <a href={props.video}>
                <Button>Video</Button>
              </a>
            )}
            {props.con && (
              <a href={props.con}>
                <Button>Conference</Button>
              </a>
            )}
            {props.web && (
              <a href={props.web}>
                <Button>Web</Button>
              </a>
            )}
            {props.document && (
              <a href={props.document}>
                <Button>Document</Button>
              </a>
            )}
            {props.blog && (
              <a href={props.blog}>
                <Button>Blog</Button>
              </a>
            )}
          </PublicationLinks>
        </ColRight>
      </Row>
    </Publication>
  );
};

export default PublicationComponent;
