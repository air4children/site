module.exports = {
  siteMetadata: {
    title: "Air4children",
    description:
      "Project for developing ia and robotics in tlaxcala communities"
  },
  pathPrefix: "/site",
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-remark-embed-youtube",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images"
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 950,
              //ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          }
        ],
        plugins: [{ resolve: "gatsby-remark-images" }]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images"
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
        disable: !process.env.ANALIZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analizeMode: "static"
      }
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Balsamiq Sans",
            variants: ["400", "700"]
          }
        ]
      }
    }

  ]
};
