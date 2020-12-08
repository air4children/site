import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Trans } from "@lingui/macro";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import { LocalizedLink } from "gatsby-theme-i18n";
import BackgroundImage from "gatsby-background-image";


const Lang = ({ lang, onClick, selected }) => (
  <button
    style={{
      textDecoration: selected ? "underline" : "none",
      cursor: "pointer"
    }}
    onClick={onClick}
  >
    {lang}
  </button>
);

const ImageBackground = styled(BackgroundImage)`
    //background-image: linear-gradient(to top, #ffffff 2rem, #ddbbffdd);
    //background-size: cover;
    //height: 50vh;

    //display: flex;
    //flex-direction: column;
    //align-content: center;
    //align-items: center
    //width: 100%;
    //padding: 0 calc((100vw - 950px) / 2 ) 2rem;

    //background: rgb(202,207,210);
    //background: linear-gradient(180deg, rgba(202,207,210,1) 0%, rgba(52,73,94,1) 100%);
    /* Add the blur effect */
    filter: blur(8px);
    -webkit-filter: blur(13px); 
    background-position: 84% 14%;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    padding: 0.5rem calc((100vw - 1300px - 0.5rem) / 2);
    box-shadow: 0 0px 0px 2px rgba(0, 0, 0, 0.2);

    height: 400px;
`;


const NavLink = styled(LocalizedLink)`
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  padding: 0.25rem;
  text-decoration: none;
  color: #90a4ae;
  background-color: #fff;
  overflow: auto;
  text-align: center; /* If you want the text to be centered */

  float: left;
  width: 20%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */

  &:hover {
    color: #37474f;
  }

  &.current-page {
    color: #ffff7e;
    background-color: #8ab8fe;
    border-radius: 5px 5px 5px 5px; /* Rounded corners on the top right and bottom right side */

  }

  &:last-of-type {
    margin-right: 10;
  }
`;

const FeaturedText = styled("div")`
  // font-weight: bold;
  // font-size: 6em;
  // line-height: 1em;

  // /* Shadows are visible under slightly transparent text color */
  // color: rgba(10,60,150, 0.8);
  // //text-shadow: 1px 4px 6px #def, 0 0 0 #000, 1px 4px 6px #def;
  
  // // text-shadow: 0 1px 0 #ccc,
  // // 0 2px 0 #c9c9c9,
  // // 0 3px 0 #bbb,
  // // 0 4px 0 #b9b9b9,
  // // 0 5px 0 #aaa,
  // // 0 6px 1px rgba(0,0,0,.1),
  // // 0 0 5px rgba(0,0,0,.1),
  // // 0 1px 3px rgba(0,0,0,.3),
  // // 0 3px 5px rgba(0,0,0,.2),
  // // 0 5px 10px rgba(0,0,0,.25),
  // // 0 10px 10px rgba(0,0,0,.2),
  // // 0 20px 20px rgba(0,0,0,.15);

  // //text-shadow: -1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.8);

  // text-align: center;
  // text-transform: uppercase;
  // text-shadow: #ffffff 3px 3px 5px;
  // font-variant: small-caps;

  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
`;

const Featured = props => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ottodiy_xinchejian_hackerspace.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      {/* <FeaturedText>Robotics Summer Camp</FeaturedText>
      <FeaturedText>Xicohtzinco</FeaturedText> */}
    </ImageBackground>
  );
};

Featured.propTypes = {
  siteTitle: PropTypes.string
};

Featured.defaultProps = {
  siteTitle: ``
};

export default Featured;
