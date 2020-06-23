import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/layout"
import Post from "../components/post/post.js";
import Publication from "../components/publication/publication"
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import { Link, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const Back = styled.div `
  ${tw`flex text-croke-purple text-xl`};
`;

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.blog
  const { t } = useTranslation()
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header={"Tag: " + tag}/>
        <SectionText content={t("tagsTemplate.blog", {tag: tag})}/>

        <SectionTitle header={"Blog"}/>
        {
          data.blog.totalCount > 0 ?
          data.blog.edges.map(({ node }) => (
            <Post
                image={node.frontmatter.image.publicURL}
                link={node.fields.slug}
                date={node.frontmatter.date}
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
                description={node.frontmatter.description}/>
            ))
          : <SectionText content={t("tagsTemplate.noblog")}/>
        }
        <SectionTitle header={t("tagsTemplate.publicationsHeader")}/>
        {
          data.publications.totalCount > 0 ?
            data.publications.edges.map(({ node }) => (
              <Publication
                image={node.frontmatter.image.publicURL}
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
                date={node.frontmatter.date}
                description={node.frontmatter.description}
                con={node.frontmatter.con}
                video={node.frontmatter.video}
                blog={node.frontmatter.blog}
                document={node.frontmatter.document}
                code={node.frontmatter.code}
                web={node.frontmatter.web}
                slides={node.frontmatter.slides}
                category={node.frontmatter.category}/>
            ))
          : <SectionText content={t("tagsTemplate.nopub")}/>
        }
        <Link to="/tags"><Back>{t("tagsTemplate.all")}</Back></Link>
      </SectionWrapper>
    </Wrapper>
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
    blog: allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {draft: {eq: false}, type: {ne: "publication"}, tags: {in: [$tag]}}}) {
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
    publications: allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "publication"}, tags: {in: [$tag]}}}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            category
            tags
            image {
              publicURL
            }
            con
            video
            blog
            document
            code
            web
            slides
          }
        }
      }
    }
  }
`
