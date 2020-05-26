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
        {data.allMarkdownRemark.nodes.map((pub) => {
          return <Publication
                        image={pub.frontmatter.image.publicURL}
                        title={pub.frontmatter.title}
                        tags={pub.frontmatter.tags}
                        date={pub.frontmatter.date}
                        description={pub.frontmatter.description}
                        con={pub.frontmatter.con}
                        video={pub.frontmatter.video}
                        blog={pub.frontmatter.blog}
                        document={pub.frontmatter.document}
                        code={pub.frontmatter.code}
                        web={pub.frontmatter.web}
                        slides={pub.frontmatter.slides}
                        category={pub.frontmatter.category}/>
        })}
      </SectionWrapper>
    </Wrapper>
  </Layout>
)

export const query = graphql`
query AllPublications {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "publication"}}}) {
    nodes {
      frontmatter {
        category
        description
        slides
        tags
        title
        video
        web
        document
        date
        con
        code
        blog
        image {
          publicURL
        }
      }
    }
  }
}
`
