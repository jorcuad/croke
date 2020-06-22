import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Post from "../components/post/post.js";
import Popular from "../components/popular";
import { graphql } from "gatsby"


import styled from 'styled-components';
import tw from 'tailwind.macro';

const blog = "Here you should find some interesting topics about security. I love that point when the software touch the physical world, so, you should expect finding here some interesting hardware projects (or that’s my hope). Right now, the web is under construction so let’s cross our fingers in order to see this site working safe and sound."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

export default ({ data }) => (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Blog"/>
        <SectionText content={blog}/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header="Most Popular"/>
        <Popular/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header="Latest Posts"/>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post image={node.frontmatter.image.publicURL} link={node.fields.slug} date={node.frontmatter.date} title={node.frontmatter.title} tags={node.frontmatter.tags} description={node.frontmatter.description}/>
        ))}
      </SectionWrapper>
    </Wrapper>
);

export const query = graphql`
query AllPost {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {draft: {eq: false}, tags: {ne: "publication"}}}) {
  edges {
    node {
      id
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        banner
        categories
        tags
        draft
        image {
          publicURL
        }
      }
    }
  }
}
}
`
