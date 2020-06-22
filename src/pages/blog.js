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

import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const BlogPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header={t("blogPage.title")}/>
        <SectionText content={t("blogPage.blog")}/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header={t("blogPage.popularTitle")}/>
        <Popular/>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header={t("blogPage.latestTitle")}/>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post image={node.frontmatter.image.publicURL} link={node.fields.slug} date={node.frontmatter.date} title={node.frontmatter.title} tags={node.frontmatter.tags} description={node.frontmatter.description}/>
        ))}
      </SectionWrapper>
    </Wrapper>
  )
}

export default BlogPage

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
