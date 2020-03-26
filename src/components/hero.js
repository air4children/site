import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Front = styled ('div')`
    #background-image: linear-gradient(to top, #ddbbffdd 2rem, #38384B);
    background: #273746;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center
    width: 100%;
    padding: 0 calc((100vw - 950px) / 2 ) 2rem;
`;

const TextBox = styled ('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h1{
        color: #FFFFFF;
        text-shadow: 5px 5px 8px #eeddff66;
        font-size: 2.25rem;
    }

    p,
    a {
        color: #222;
        color: #FFFFFF;
        margin-top: 0;
    }

    a {
        margin-top: 0.5rem;
    }
`;

const Hero = () => {

    const { image } = useStaticQuery(graphql`
        query{
            image: file(relativePath:{ eq: "air4childrenLogo1.png"}){
                sharp: childImageSharp{
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)


    return(
        <Front>
            <Link
                to="/"
                css={css`
                margin: 1rem 1rem 0 0;
                width: 18%;
                `}
            >
                <Image
                css={css`
                    * {
                    margin-top: 0;
                    }
                `}
                fluid={image.sharp.fluid}
                alt="air4children"
                />
            </Link>
            <TextBox>
                <h1>Air4Children</h1>
                <p>
                    Welcome to <b>Air4Children</b>  <Link to="/about/">Learn more &rarr;</Link>
                </p>
            </TextBox>
        </Front>
    )
};

export default Hero;