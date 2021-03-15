import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
// import Img from "gatsby-image"

const ImageBackground = styled(BackgroundImage)`
    filter: blur(8x);
    -webkit-filter: blur(1px); 
    background-position: 84% 14%;
    padding: 0.5rem calc((100vw - 1100px - 0.5rem) / 2);
    box-shadow: 0 0px 0px 2px rgba(0, 0, 0, 0.2);

    height: 400px;
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
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 1000px - 0.5rem) / 2);
      `}
    >
      {/* <div>
        <h1>Hello gatsby-image</h1>
        <Img fluid={image.sharp.fluid} />
      </div> */}
      <ImageBackground 
        objectFit="cover"
        Tag="section" 
        fluid={image.sharp.fluid} 
        fadeIn="soft"/>
    </div>
  );
};

Featured.propTypes = {
  siteTitle: PropTypes.string
};

Featured.defaultProps = {
  siteTitle: ``
};

export default Featured;
