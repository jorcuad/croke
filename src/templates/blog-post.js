import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from '../utils/typography'

import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import {
  TimeIcon,
} from '../components/icons';
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Date = styled.div`
  ${tw`block text-justify text-croke-purple`}
`;

const MetaIcon = styled.div`
  ${tw`h-4 w-4 inline-block mr-2`}
`;

const PostContent = styled.div`
  > h2 {
    color: #333;
    margin: ${rhythm(1 / 4)} 0;
    padding: ${rhythm(1 / 4)} 0;
    border-bottom: 2px solid #ddd;
    font-weight: 400;
  }
  > h3 {
    display: inline-block;
    color: #444;
    margin: ${rhythm(1 / 6)} 0;
    padding: ${rhythm(1 / 6)};
    padding-left: 0;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
  }
  > p {
    margin: ${rhythm(3 / 4)} auto;
    color: #333;
    line-height: ${rhythm(1.25)};
  }
  a:not(.anchor) {
    display: inline;
    color: #d85d15;
    position: relative;
    text-decoration: none;
    padding: 2px;
    transition: all 175ms ease-in-out;
    :before,
    :after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 1px;
      background-color: #d85d15;
    }
    :after {
      bottom: -2px;
      transition: 200ms ease-out;
    }
    :before {
      top: -2px;
      transform: translateY(24px);
      opacity: 0;
      transition: 200ms ease-out;
    }
    :hover {
      background-color: rgba(216, 93, 21, 0.05);
      :before {
        transform-origin: center top;
        transform: translateY(0) scaleX(1.025);
        opacity: 1;
      }
      :after {
        transform-origin: center bottom;
        transform: scaleX(1.025);
      }
    }
  }
  > blockquote {
    margin-left: 0.75rem;
    padding-left: 1.5rem;
    border-left: 4px solid #ddd;
  }
  > video.responsive {
    max-width: 100%;
    max-height: 100%;
  }
  .gatsby-code-title {
    margin-bottom: -0.6rem;
    padding: 0.5em 1em;
    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
      'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
      monospace;
    background-color: black;
    color: white;
    z-index: 0;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }
  .gatsby-code-title + .gatsby-highlight {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .gatsby-highlight-code-line {
    background-color: #0e0e0e;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #96cbfe;
  }
  .gatsby-highlight {
    background-color: #1d1f21;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }
  .gatsby-highlight pre[class*='language-'] {
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout>
      <Wrapper>
        <SectionWrapper>
          <SectionTitle header={post.frontmatter.title}/>
          <Date>
            <MetaIcon><TimeIcon/></MetaIcon>
            {post.frontmatter.date}
          </Date>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </SectionWrapper>
      </Wrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
