import React from "react";
import { Global, css } from "@emotion/core";
import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";
import { navigate } from "gatsby-link";
import { useStaticQuery, graphql } from "gatsby";

var lang = "";
var path = "";
const defaultLanguage = "en";
const prefix = lang => (lang === defaultLanguage ? "/" : "/" + lang + "/");
const deprefix = pathname =>
  pathname.startsWith("/es/") ? pathname.substr(4) : pathname;

/** This function prepares language variables. */
const prepareVars = pathname => {
  lang = pathname.startsWith("/es/") ? "es" : "en";
  path = pathname;
};

/** This function sets the language path page when language change. */
const onLangChange = lang => {
  navigate(prefix(lang) + deprefix(path));
};

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      {prepareVars(location)}
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin-top: 0;
            margin-left: 0;
            margin-right: 0;

            color: #555;
            font-family: "Balsamiq Sans", cursive;
            font-size: 18px;
            line-height: 1.8;
            word-spacing: 1px;

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      {/* <Helmet>
                <html lang='en'/>
                <title> {title} </title>
                <meta name="description" content={description}/>
            </Helmet> */}
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        lang={lang}
        onLangClick={onLangChange}
      />

      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 950px;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
