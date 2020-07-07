import React from 'react';
import { SectionTitle, SectionWrapper, SectionText } from '../components/section';
import Post from '../components/post/post.js';
import Popular from '../components/popular';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import useTranslations from '../components/useTranslations';

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const BlogPage = ({ data, pageContext, location }) => {
  const t = useTranslations();

  return (
    <Wrapper>
      <SEO lang={pageContext.locale} pathname={location.pathname} title={t.title} />
      <SectionWrapper>
        <SectionTitle header={t.title} />
        <SectionText content={t.blogPage.blog} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header={t.blogPage.popularTitle} />
        <Popular locale={pageContext.locale} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header={t.blogPage.latestTitle} />
        {data.allMdx.edges.map(({ node }, i) => (
          <Post
            key={i}
            image={node.frontmatter.image.publicURL}
            link={node.fields.slug}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            tags={node.frontmatter.tags}
            description={node.frontmatter.description}
            locale={pageContext.locale}
          />
        ))}
      </SectionWrapper>
    </Wrapper>
  );
};

export default BlogPage;

export const query = graphql`
  query AllPost($locale: String!, $dateFormat: String!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { locale: { eq: $locale } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
            description
            banner
            categories
            tags
            draft
            image {
              publicURL
            }
          }
          fields {
            locale
            slug
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`;
//frontmatter: {draft: {eq: false}, tags: {ne: "publication"}}
