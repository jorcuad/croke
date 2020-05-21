import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Layout from "../components/layout/layout"
import Publication from "../components/publication/publication"

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Xataka from "../../static/press/xataka.png"
import Rt from "../../static/press/rt.png"
import ElSalto from "../../static/press/elsalto.png"
import HelpNet from "../../static/press/helpnetsecurity.jpg"

const publications = "One of my interest is pointed in share my knowledge and experiences. In these years, I had the opportunity and the honor to be accepted in several congresses as speaker. Here, you can find the slides, videos, demos, papers and other press clipping that maybe can be of your interest."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
export default ({ data }) => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Publications"/>
        <SectionText content={publications}/>
        {data.allPublicationsJson.nodes[0].content.map((pub) => {
          return <Publication
                        image={pub.image.src.publicURL}
                        title={pub.title}
                        tags={pub.tags}
                        date={pub.date}
                        description={pub.description}
                        con={pub.con}
                        video={pub.video}
                        blog={pub.blog}
                        document={pub.document}
                        code={pub.code}
                        web={pub.web}
                        slides={pub.slides}/>
        })}
      </SectionWrapper>
    </Wrapper>
  </Layout>
)

export const query = graphql`
query AllPublications {
  allPublicationsJson {
    nodes {
      content {
        blog
        code
        con
        date
        description
        document
        slides
        tags
        title
        video
        web
        image {
          src {
            publicURL
          }
        }
      }
    }
  }
}
`
