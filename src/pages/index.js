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
import Parallax from "../components/parallax";
import SeeMore from "../components/seemore";

import { useTranslation } from "react-i18next"

const blogText = "Here you should find some interesting topics about security. I love that point when the software touch the physical world, so, you should expect finding here some interesting hardware projects (or that’s my hope). Right now, the web is under construction so let’s cross our fingers in order to see this site working safe and sound.";
const inmail = "You can use this form, my mail or Twitter at @Coke727. Please, feel free to use them if you have any question."
const projects = "I am always willing to start new projects, these are the last ones. As you can see, the topics of the projects are always different. I love to discover new technologies and I tend to start projects related to my interests: Security, Privacy, 3D printing and electronics. You can look here to see all the projects.";
const home = "I always wanted to share my interests following my own way and other blog platforms can't provide me that. I can do the same using Wordpress, Google Sites or whatever but... It's not enought, I need freedom to create and share my knowledge and experiences in the way I want each time. Today, I am writting this introduction but maybe tomorrow I will prefer to create a secret konami code or stream a podcast. This is my digital house and It will follow my rules, expect anything, expect everything.";

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
