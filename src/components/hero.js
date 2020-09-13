import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled (BackgroundImage)`

    background-image: linear-gradient(to top, #ffffff 2rem, #ddbbffdd);
    background-size: cover;
    height: 50vh;

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
            image: file(relativePath:{ eq: "concentrated-boy-creating-robot-lab_1421-3750.jpg"}){
                sharp: childImageSharp{
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return(
        <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <Link
                to="/"
                css={css`
                margin: 1rem 1rem 0 0;
                width: 60%;
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
                <p>
                    Welcome to <b>Air4Children</b>  <Link to="/about/">Learn more &rarr;</Link>
                </p>
            </TextBox>
        </ImageBackground>
    )
};

export default Hero;
