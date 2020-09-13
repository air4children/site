import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header.en';
import Footer from './footer.en';
import Hero from '../components/hero';
import useSiteMetadata from '../hooks/use-sitemetadata'

const Layout = ({ children }) => {
    const { title, description } =  useSiteMetadata();
    return (
        <>
            <Global
                styles = {css`
                * {
                    box-sizing: border-box;
                }


                html,
                body {
                  margin-top: 30px;

                    color: #555;
                    font-family: 'Balsamiq Sans', cursive;
                    font-size: 20px;
                    line-height: 1.8;
                    word-spacing: 4px;


                    > div {
                        margin-top:0;
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
            <Helmet>
                <html lang='en'/>
                <title> {title} </title>
                <meta name="description" content={description}/>
            </Helmet>
            <Header />

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
}

export default Layout;
