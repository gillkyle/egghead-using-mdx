module.exports = {
  siteMetadata: {
    title: `Egghead Using MDX`,
    description: `Using MDX in a Gatsby site`,
    author: `@gillkyle`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
}
