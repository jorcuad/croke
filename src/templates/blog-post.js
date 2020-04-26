import React from "react"
import {
  Link,
  graphql
} from "gatsby"
import {
  rhythm
} from '../utils/typography'

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

const Wrapper = styled.div `
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Date = styled.div `
  ${tw`block text-justify text-croke-purple`}
`;

const MetaIcon = styled.div `
  ${tw`h-4 w-4 inline-block mr-2`}
`;

const PostContent = styled.div `
  > h2 {
    color: #412854;
    margin-top: ${rhythm(3)};
    padding: ${rhythm(3 / 5)} 0;
    border-bottom: 2px solid #412854;
    font-weight: 400;
    font-size: 2.25rem;
  }
  > h3 {
    display: inline-block;
    color: #412854;
    margin-top: ${rhythm(2)};
    padding-top: ${rhythm(2 / 5)};
    padding-bottom: ${rhythm(1 / 5)};
    padding-left: 0;
    font-weight: 400;
    font-size: 1.875rem;
  }

  > h4 {
    display: inline-block;
    color: #412854;
    margin-top: ${rhythm(1.5)};
    margin-bottom: ${rhythm(1/4)};
    padding-left: 0;
    font-weight: 400;
    font-size: 1.5rem;
  }

  > ul {
    list-style-type: inherit;
    list-style-position: inside;
    margin: ${rhythm(3 / 4)} auto;
  }

  > p {
    margin: ${rhythm(3 / 4)} auto;
    color: #333;
    line-height: ${rhythm(1.25)};
    text-align: justify;
    font-size: 1rem;
  }
  a:not(.anchor) {
    display: inline;
    color: #68da23;
    position: relative;
    text-decoration: none;
    padding: 2px;

    :hover {
      color: #412854;
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

  .gatsby-resp-iframe-wrapper {
    margin: ${rhythm(2)} auto;
  }

  .gatsby-resp-image-link {
    margin: ${rhythm(2)} 0;
  }

  /* PRISM.JS */

  .gatsby-highlight {
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"] {
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .gatsby-highlight pre[class*="language-"].line-numbers .line-numbers-rows{
    padding-left: 1em;
  }

  .gatsby-highlight {
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 4em;
    overflow: initial;
  }

  .command-line-prompt > span:before {
    color: #999;
    content: " ";
    display: block;
    padding-right: 0.8em;
  }

  .command-line-prompt > span[data-user]:before {
    content: "[" attr(data-user) "@" attr(data-host) "] $";
  }

  .command-line-prompt > span[data-user="root"]:before {
    content: "[" attr(data-user) "@" attr(data-host) "] #";
  }

  .command-line-prompt > span[data-prompt]:before {
    content: attr(data-prompt);
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        meta={post.frontmatter.date}
      />
      <Wrapper>
        <SectionWrapper>
          <SectionTitle header = { post.frontmatter.title }/>
          <Date>
            <MetaIcon>
              <TimeIcon/>
            </MetaIcon>
            {
            post.frontmatter.date
            }
          </Date>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }}/>
        </SectionWrapper>
      </Wrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql `
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
