import React from 'react';
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import tw from 'tailwind.macro';

import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import ProjectsList from "../components/projects/projectsList";
import Areas from "../components/areas";
import Contact from "../components/contact";
import Post from "../components/post/post.js";
import SeeMore from "../components/seemore";

import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const PostWrapper = styled.div`
  ${tw`mb-10`}
`;

const Home = ({ data }) => {
  const { t } = useTranslation()

  return (
      <Wrapper>
        <SectionWrapper>
          <SectionTitle header={t("index.homeHeader")}/>
          <SectionText content={t("index.home")}/>
          <Areas/>
        </SectionWrapper>
        <SectionWrapper>
          <SectionTitle header={t("index.projectsHeader")} link="/projects"/>
          <SectionText content={t("index.projects")}/>
          <ProjectsList/>
          <Link to="/projects">
            <SeeMore section="here"/>
          </Link>
        </SectionWrapper>
        <SectionWrapper>
          <SectionTitle header={t("index.blogHeader")} link="/blog"/>
          <SectionText  content={t("index.blogHeader")}/>
          <PostWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post image={node.frontmatter.image.publicURL} link={node.fields.slug} date={node.frontmatter.date} title={node.frontmatter.title} tags={node.frontmatter.tags} description={node.frontmatter.description}/>
            ))}
          </PostWrapper>
          <Link to="/blog">
            <SeeMore section="posts"/>
          </Link>
        </SectionWrapper>
        <SectionWrapper>
          <SectionTitle header={t("index.contactHeader")}/>
          <SectionText  content={t("index.inmail")}/>
        </SectionWrapper>
    </Wrapper>
  )
}

export default Home

export const query = graphql`
query LastPost {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC} limit: 3, filter: {frontmatter: {draft: {eq: false}}}) {
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
