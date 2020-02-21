module.exports = {
  siteMetadata: {
    title: `Using MDX`,
    description: `Using MDX in a Gatsby site`,
    author: `@gillkyle`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
      },
    },
  ],
}
