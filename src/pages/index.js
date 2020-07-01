import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';

import { SectionTitle, SectionWrapper, SectionText } from '../components/section';
import ProjectsList from '../components/projects/projectsList';
import Areas from '../components/areas';
import Contact from '../components/contact';
import Post from '../components/post/post.js';
import SeeMore from '../components/seemore';

import useTranslations from '../components/useTranslations';

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const PostWrapper = styled.div`
  ${tw`mb-10`}
`;

const Home = ({ data }) => {
  const t = useTranslations();

  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header={t.index.homeHeader} />
        <SectionText content={t.index.home} />
        <Areas />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header={t.index.projectsHeader} link="/projects" />
        <SectionText content={t.index.projects} />
        <ProjectsList />
        <Link to="/projects">
          <SeeMore section="here" />
        </Link>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header={t.index.blogHeader} link="/blog" />
        <SectionText content={t.index.blogText} />
        <PostWrapper>
          {data.allMdx.edges.map(({ node }, i) => (
            <Post
              key={i}
              image={node.frontmatter.image.publicURL}
              link={node.fields.slug}
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              tags={node.frontmatter.tags}
              description={node.frontmatter.description}
            />
          ))}
        </PostWrapper>
        <Link to="/blog">
          <SeeMore section="posts" />
        </Link>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle header={t.index.contactHeader} />
        <SectionText content={t.index.inmail} />
        <Contact />
      </SectionWrapper>
    </Wrapper>
  );
};

export default Home;

export const query = graphql`
  query LastPost($locale: String!, $dateFormat: String!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
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
//frontmatter: {draft: {eq: false}}}
