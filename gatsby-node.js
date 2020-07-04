const path = require(`path`);
const locales = require(`./config/i18n`);
const { localizedSlug, findKey, removeTrailingSlash } = require(`./src/utils/gatsby-node-helpers`);

const resources = require('./src/utils/resources.json');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
    fs: 'empty',
  };
};

const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page);

  // Grab the keys ('en' & 'de') of locales and map over them
  Object.keys(locales).map(lang => {
    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`;

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/de/")
      // We want to remove that
      path: removeTrailingSlash(localizedPath),
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        locale: lang,
        localeResources: resources[lang] ? resources[lang] : {},
        dateFormat: locales[lang].dateFormat,
      },
    });
  });
};

// As you don't want to manually add the correct language to the frontmatter of each file
// a new node is created automatically with the filename
// It's necessary to do that -- otherwise you couldn't filter by language
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.type === `Mdx`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const name = path.basename(node.fileAbsolutePath, `.mdx`);

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === `index`;

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, o => o.default === true);

    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(`.`)[1];
    const value = createFilePath({ node, getNode });

    var tmpSlug = '';
    var slug = '';
    if (isDefault) {
      tmpSlug = removeTrailingSlash(value);
      slug = `/blog${tmpSlug}`;
    } else {
      tmpSlug = removeTrailingSlash(path.dirname(value));
      slug = `/${lang}/blog${tmpSlug}`;
    }

    createNodeField({ node, name: `slug`, value: slug });
    createNodeField({ node, name: `locale`, value: lang });
    createNodeField({ node, name: `isDefault`, value: isDefault });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve(`./src/templates/post.js`);
  const result = await graphql(`
    {
      blogES: allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          childMdx: { fields: { locale: { eq: "es" } }, frontmatter: { draft: { eq: false } } }
        }
        sort: { order: DESC, fields: childMdx___frontmatter___date }
      ) {
        edges {
          node {
            relativeDirectory
            childMdx {
              fields {
                locale
                isDefault
              }
              frontmatter {
                title
                description
                banner
                categories
                tags
                draft
                image {
                  publicURL
                }
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
      blogEN: allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          childMdx: { fields: { locale: { eq: "en" } }, frontmatter: { draft: { eq: false } } }
        }
        sort: { order: DESC, fields: childMdx___frontmatter___date }
      ) {
        edges {
          node {
            relativeDirectory
            childMdx {
              fields {
                locale
                isDefault
              }
              frontmatter {
                title
                description
                banner
                categories
                tags
                draft
                image {
                  publicURL
                }
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000, filter: { fields: { locale: { eq: "en" } } }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const postListES = result.data.blogES.edges;
  const postListEN = result.data.blogEN.edges;

  postListES.forEach(({ node: blog }, index) => {
    if (blog.childMdx) {
      const title = blog.childMdx.frontmatter.title;
      const slug = blog.relativeDirectory;
      const locale = blog.childMdx.fields.locale;
      const isDefault = blog.childMdx.fields.isDefault;

      var next = null;
      if (index !== 0) {
        const nextPost = postListES[index - 1].node;
        const nextSlug = nextPost.relativeDirectory;
        next = `/${locale}/blog/${nextSlug}`;
      }

      var previous = null;
      if (index !== postListES.length - 1) {
        const prevPost = postListES[index + 1].node;
        const prevSlug = prevPost.relativeDirectory;
        previous = `/${locale}/blog/${prevSlug}`;
      }

      createPage({
        path: `/${locale}/blog/${slug}`,
        component: postTemplate,
        context: {
          locale,
          slug: `/${locale}/blog/${slug}`,
          dateFormat: locales[locale].dateFormat,
          title,
          previous,
          next,
        },
      });
    }
  });

  postListEN.forEach(({ node: blog }, index) => {
    if (blog.childMdx) {
      const title = blog.childMdx.frontmatter.title;
      const slug = blog.relativeDirectory;
      const locale = blog.childMdx.fields.locale;
      const isDefault = blog.childMdx.fields.isDefault;

      var next = null;
      if (index !== 0) {
        const nextPost = postListEN[index - 1].node;
        const nextSlug = nextPost.relativeDirectory;
        next = `/blog/${nextSlug}`;
      }

      var previous = null;
      if (index !== postListEN.length - 1) {
        const prevPost = postListEN[index + 1].node;
        const prevSlug = prevPost.relativeDirectory;
        previous = `/blog/${prevSlug}`;
      }

      createPage({
        path: `/blog/${slug}`,
        component: postTemplate,
        context: {
          locale,
          slug: `/blog/${slug}`,
          dateFormat: locales[locale].dateFormat,
          title,
          previous,
          next,
        },
      });
    }
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  const tagTemplate = path.resolve(`./src/templates/tag.js`);
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        locale: 'en',
        tag: tag.fieldValue,
        dateFormat: locales['en'].dateFormat,
      },
    });
  });

  tags.forEach(tag => {
    createPage({
      path: `/es/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        locale: 'es',
        tag: tag.fieldValue,
        dateFormat: locales['es'].dateFormat,
      },
    });
  });
};
