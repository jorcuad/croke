import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Publication from "../components/publication/publication"

import styled from 'styled-components';
import tw from 'tailwind.macro';

import { useTranslation } from "react-i18next"

import Xataka from "../../static/press/xataka.png"
import Rt from "../../static/press/rt.png"
import ElSalto from "../../static/press/elsalto.png"
import HelpNet from "../../static/press/helpnetsecurity.jpg"

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
const PublicationsPage = ({data}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header={t("publications.title")}/>
        <SectionText content={t("publications.description")}/>
        {data.allMarkdownRemark.nodes.map((pub) => {
          return <Publication
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
                        category={pub.frontmatter.category}/>
        })}
      </SectionWrapper>
    </Wrapper>
  )
}

export default PublicationsPage

export const query = graphql`
query AllPublications {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {eq: "publication"}}}) {
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
        date
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
`
