import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import { Trans } from "@lingui/macro";
import Wave from "../components/wave";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const Image = styled(Img)`
    filter: blur(8x);
    -webkit-filter: blur(1px); 
    background-position: 84% 14%;
    padding: 0.5rem calc((100vw - 1100px - 0.5rem) / 2);
    box-shadow: 0 0px 0px 2px rgba(0, 0, 0, 0.2);

    height: 400px;
`;

  export default ({ location }) => {

    const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mock-image.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout location={location.pathname}>
      <Image 
        objectFit="cover"
        Tag="section" 
        fluid={image.sharp.fluid} 
        fadeIn="soft"/>

      <h1>
        <Trans>Programs</Trans>
      </h1>

      <p>
        <Trans>
          If you have any questions about becoming a collaborator, volunteer,
          mentor, sponsor, or anything else, do not hesitate to mail us to
          `robotics.libre@gmail.com`.
        </Trans>
      </p>

      <p>
        <Trans>
          Also, you can create an issue in any of the repositories in
          https://github.com/air4children.
        </Trans>
      </p>
      <Wave />
    </Layout>
  );
};
