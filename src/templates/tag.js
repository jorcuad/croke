import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/layout"
import Post from "../components/post/post.js";
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import { Link, graphql } from "gatsby"

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Back = styled.div `
  ${tw`flex text-croke-purple text-xl`};
`;

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout>
      <Wrapper>
        <SectionWrapper>
          <SectionTitle header={"Tag: " + tag}/>
          <SectionText content={"This is the content tagged with " + tag + ", here you can find content from the blog, projects and publications."}/>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post image={node.frontmatter.image.publicURL} link={node.fields.slug} date={node.frontmatter.date} title={node.frontmatter.title} tags={node.frontmatter.tags} description={node.frontmatter.description}/>
          ))}
          <Link to="/tags"><Back>← All tags</Back></Link>
        </SectionWrapper>
      </Wrapper>
    </Layout>
  )
}

TagsTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default TagsTemplate
export const tagQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
