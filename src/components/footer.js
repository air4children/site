import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link, graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const NavLink = styled(Link)`
  color: #eeeeee;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #ffffff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Footer = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <footer
      css={css`
        background: #665fd1;
        border-top: 8px solid #8ab8fe;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: auto;
        padding: 0.5rem calc((100vw - 1300px - 0.5rem) / 2);
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: auto;
        `}
      >
        <Link
          to="/"
          css={css`
            margin: 0.5rem 1rem 0 0;
            width: 20%;
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

        <div>
          <NavLink to="/" fontWeight="bold">
            {" "}
            Air4Children{" "}
          </NavLink>

          <nav
            css={css`
              margin-top: 0;
            `}
          >
            <NavLink to="/team/" activeClassName="current-page">
              Meet the team
            </NavLink>
          </nav>
        </div>
        <div>
          <NavLink to="/en/" fontWeight="bold">
            {" "}
            Air4Children{" "}
          </NavLink>

          <nav
            css={css`
              margin-top: 0;
            `}
          >
            <NavLink to="/team/" activeClassName="current-page">
              Meet the team
            </NavLink>
          </nav>
        </div>
      </div>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: auto;
        `}
      >
        <p>© 2020 air4children</p>
        <div>
          <p>icons here</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
