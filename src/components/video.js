import React from "react";
import { css } from "@emotion/core";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "andy-kelly.jpg" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`);

const Video = props => {
  return (
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
  );
};
export default Video;
