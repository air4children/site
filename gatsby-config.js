module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsby-theme-i18n-lingui.netlif.app",
    title: "Air4children",
    description:
      "Project for developing ia and robotics in tlaxcala communities",
    author: `@gatsbyjs`
  },
  // pathPrefix: "/site",
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-remark-embed-youtube",
    "gatsby-plugin-material-ui",
    "gatsby-plugin-antd",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
    // {
    //   resolve: "gatsby-plugin-i18n",
    //   options: {
    //     langKeyDefault: "en",
    //     useLangKeyLayout: false,
    //     configPath: require.resolve("./src/locales/config.json"),
    //   }
    // },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./src/locales/config.json`),
      },
    },
    {
      resolve: "gatsby-theme-i18n-lingui",
      options: {
        localeDir: "./src/locales",
      },
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
