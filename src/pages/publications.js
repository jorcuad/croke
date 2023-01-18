import React from 'react';
import { SectionTitle, SectionWrapper, SectionText } from '../components/section';
import Publication from '../components/publication/publication';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import useTranslations from '../components/useTranslations';

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
const PublicationsPage = ({ data, pageContext, location }) => {
  const t = useTranslations();

  return (
    <Wrapper>
      <SEO lang={pageContext.locale} pathname={location.pathname} title={t.publications.title} />
      <SectionWrapper>
        <SectionTitle header={t.publications.title} />
        <SectionText content={t.publications.description} />
        {data.allMarkdownRemark.nodes.map((pub, i) => {
          return (
            <Publication
              key={i}
              image={pub.frontmatter.image.publicURL}
              title={pub.frontmatter.title}
              tags={pub.frontmatter.tags}
              date={pub.frontmatter.date}
              description={pub.frontmatter.description}
              con={pub.frontmatter.con}
              video={pub.frontmatter.video}
              blog={pub.frontmatter.blog}
              document={pub.frontmatter.document}
              code={pub.frontmatter.code}
              web={pub.frontmatter.web}
              slides={pub.frontmatter.slides}
              category={pub.frontmatter.category}
              locale={pageContext.locale}
            />
          );
        })}
      </SectionWrapper>
    </Wrapper>
  );
};

export default PublicationsPage;

export const query = graphql`
  query AllPublications($locale: String!, $dateFormat: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "publication" }, lang: { eq: $locale } } }
    ) {
      nodes {
        frontmatter {
          category
          description
          slides
          tags
          title
          video
          web
          document
          date(formatString: $dateFormat)
          con
          code
          blog
          image {
            publicURL
          }
        }
      }
    }
  }
`;
