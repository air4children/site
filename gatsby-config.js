module.exports = {
    siteMetadata:{
        title: 'Free Robotics',
        description: 'Project for developing ia and robotics in tlaxcala communities'
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts : {
                default: require.resolve('./src/components/layout.js')
            },
            gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
            plugins: [{ resolve: 'gatsby-remark-images' }],
        }
    },
    {
        resolve:'gatsby-source-filesystem',
        options:{
            name:'posts',
            path:'posts',
        }
    },
    {
        resolve:'gatsby-source-filesystem',
        options:{
            name:'images',
            path:'images',
        }
    }
    ]
};