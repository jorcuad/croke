import React from 'react';

// Utilities
import kebabCase from 'lodash/kebabCase';

// Components
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { SectionTitle, SectionWrapper, SectionText } from '../components/section';

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;

const TagTemplate = ({ pageContext, data }) => {
  const groupPublications = data.publications.group;
  var group = data.blog.group;

  console.log('------ BEF ------');
  console.log(groupPublications);
  console.log(group);
  console.log('------ BEF ------');

  groupPublications.forEach((pub, i) => {
    var exist = false;
    group.forEach((blog, i) => {
      if (blog.fieldValue === pub.fieldValue) {
        blog['totalCount2'] = pub.totalCount;
        exist = true;
      }
    });
    if (!exist) {
      pub['totalCount2'] = 0;
      group.push(pub);
    }
  });

  group.forEach((item, i) => {
    if (!item.totalCount2) {
      item['totalCount2'] = 0;
    }
  });

  console.log('------ AFT ------');
  console.log(groupPublications);
  console.log(group);
  console.log('------ AFT ------');

  const title = data.site.siteMetadata.title;
  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Tags" />
        <SectionText content="Here you can find the categories of all the contents of this webpage, from projects to blog posts and publications." />
        <div>
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link
                  to={
                    pageContext.locale === 'es'
                      ? `/es/tags/${kebabCase(tag.fieldValue)}/`
                      : `/tags/${kebabCase(tag.fieldValue)}/`
                  }>
                  {tag.fieldValue} ({tag.totalCount + tag.totalCount2})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
      <Helmet title={title} />
    </Wrapper>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query AllTags($locale: String!) {
    site {
      siteMetadata {
        title
      }
    }
    blog: allMdx(limit: 2000, filter: { fields: { locale: { eq: $locale } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    publications: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "publication" }, lang: { eq: $locale } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
