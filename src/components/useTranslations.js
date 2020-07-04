import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LocaleContext from '../localeContext';

function useTranslations() {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext);
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    };
  });

  // Only return translations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0];

  return translations;
}

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            blogPage {
              title
              blog
              popularTitle
              latestTitle
            }
            areas {
              blog
              press
              projects
              publications
              sandbox
              services
            }
            contact {
              email
              name
              message
              button
            }
            footer {
              title
              licenseHeader
              licenseText
            }
            header {
              titlep1
              titlep2
              titlep3
              titlep4
              home
              blog
              projects
              publications
              services
              press
              sandbox
            }
            index {
              blogText
              inmail
              projects
              home
              homeHeader
              projectsHeader
              blogHeader
              contactHeader
            }
            notfound {
              title
              back
            }
            popular {
              titleMarimorena
              descriptionMarimorena
              tagsMarimorena
              titleTizona
              descriptionTizona
              tagsTizona
              titleRedSegura
              descriptionRedSegura
              tagsRedSegura
            }
            postTemplate {
              next
              previous
            }
            press {
              title
              description
            }
            pressComponent {
              titleSalto
              descriptionSalto
              titleRT
              descriptionRT
              titleXataka
              descriptionXataka
              titleHelp
              descriptionHelp
            }
            projects {
              title
              projects
              assapDesc
              marmimorenaDesc
              freephoneDesc
              crokev2Desc
              vdeguerraDesc
              cryptexDesc
            }
            projectsList {
              assap
              marimorena
              vdeguerra
              freephone
              crokev2
              cryptex
              linkWorkshop
              linkServices
              linkEducationl
              linkOpenSource
              link3dPrinting
            }
            publications {
              title
              description
            }
            sandbox {
              title
              description
            }
            services {
              title
              description
              web
              pentesting
              mobile
              printing
              cv
              trainings
              webHeader
              pentestingHeader
              mobileHeader
              printingHeader
              cvHeader
              trainingsHeader
            }
            share {
              header
            }
            tagsTemplate {
              blog1
              blog2
              noblog
              nopub
              all
              publicationsHeader
            }
            thanks {
              title
              description
              popular
            }
          }
        }
      }
    }
  }
`;
