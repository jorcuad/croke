import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import {
  TagIcon,
  TimeIcon,
} from 'components/icons';

const Publication = styled.div`
  ${tw`overflow-hidden flex flex-col mb-10`}
`;

const Content = styled.div`
  ${tw`flex flex-col ml-4 justify-between h-48`}
`;

const PublicationImage = styled.div`
  ${tw`flex  w-32 h-32 sm:w-40 sm:h-40 md:h-48 md:w-48 flex-none bg-cover rounded overflow-hidden`};
  background-image: url(${props => props.image});
`;

const Title = styled.h1`
  ${tw`text-base sm:text-xl md:text-2xl block text-croke-purple text-justify`}
`;

const Text = styled.p`
  ${tw`sm:block text-xs sm:text-sm md:text-base text-justify my-2`}
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
  ${tw`flex m-0 p-0 break-all`}
`;

const PublicationLinks = styled.div`
  ${tw`flex flex-row w-full py-2`};
`;

const Button = styled.button`
  ${tw`flex bg-croke-purple hover:bg-croke-green text-croke-white font-bold py-2 px-3 border-b-4 border-croke-green hover:text-croke-purple hover:border-croke-purple rounded mr-1 text-xs sm:text-base`}
`;

const Row = styled.div`
  ${tw`flex w-full h-full flex-row`}
`;

// title, tags, description, image
export default props => (
  <Publication>
    <Row>
      <PublicationImage image={props.image}/>
      <Content>
        {props.link ?
          <a href={props.link}>
            <Title>{props.title}</Title>
          </a> : <Title>{props.title}</Title>
        }
        <Metadata>
          {props.tags ?
            <Tags>
              <MetaIcon><TagIcon/></MetaIcon>
              <TagWrapper>{props.tags + " "}</TagWrapper>
            </Tags>
          :
            <Tags></Tags>
          }
          <Date>
            <MetaIcon><TimeIcon/></MetaIcon>
            <DateWrapper>{props.date}</DateWrapper>
          </Date>
        </Metadata>
        <Text>{props.description}</Text>
      </Content>
    </Row>
    <PublicationLinks>
      {props.code &&
      <a href={props.code}>
        <Button>
          Code
        </Button>
      </a>
      }
      {props.slides &&
      <a href={props.slides}>
        <Button>
          Slides
        </Button>
      </a>
      }
      {props.video &&
      <a href={props.video}>
        <Button>
          Video
        </Button>
      </a>
      }
      {props.con &&
      <a href={props.con}>
        <Button>
          Conferencia
        </Button>
      </a>
      }
      {props.web &&
      <a href={props.web}>
        <Button>
          Web
        </Button>
      </a>
      }
      {props.document &&
      <a href={props.document}>
        <Button>
          Document
        </Button>
      </a>
      }
      {props.blog &&
      <a href={props.blog}>
        <Button>
          Blog
        </Button>
      </a>
      }
    </PublicationLinks>
  </Publication>
)
