import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Trans } from "@lingui/macro";
import { I18nProvider } from "@lingui/react";
import catalogEN from "../locales/en/messages";
import catalogES from "../locales/es/messages";
import Image from "gatsby-image";

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0.5rem 1rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  color: #8ab8fe;
  background-color: transparent;
  border: 2px solid #8ab8fe;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(1, 0.15, 0.34, 0.92);

  &:hover {
    box-sizing: border-box;
    border-width: 1;
    border-style: solid;
    border-color: #d2d6dc;
    color: #ffff7e;
    background-color: #8ab8fe;
  }

  &.current-page {
    box-sizing: border-box;
    border-width: 1;
    border-style: solid;
    border-color: #d2d6dc;
    color: #ffff7e;
    background-color: #8ab8fe;
  }

  &:last-of-type {
    margin-right: 10;
  }
`;

const Header = () => {
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
    <I18nProvider language="en" catalogs={{ en: catalogEN, es: catalogES }}>
      <header
        css={css`
          background: #ffff7e;
          border-bottom: 8px solid #8ab8fe;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem calc((100vw - 1300px - 0.5rem) / 2);
          height: 80px;
        `}
      >
        <Link
          to="/en/"
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

        <nav
          css={css`
            margin: 0.5rem 1rem 0 0;
          `}
        >
          <NavLink to="/en/about/" activeClassName="current-page">
            <Trans>About</Trans>
          </NavLink>
          <NavLink to="/en/videos/" activeClassName="current-page">
            <Trans>Videos</Trans>
          </NavLink>
          <NavLink to="/en/volunteering/" activeClassName="current-page">
            <Trans>Volunteering</Trans>
          </NavLink>
          <NavLink to="/en/contact/" activeClassName="current-page">
            <Trans>Contact Us</Trans>
          </NavLink>
          <NavLink to="/es/" activeClassName="current-page">
            <Trans>es</Trans>
          </NavLink>
        </nav>
        <nav
          css={css`
            margin: 0.5rem 1rem 0 0;
          `}
        >
          <Link
            to="/en/donate/"
            activeClassName="current-page"
            css={css`
              font-size: 1rem;
              font-weight: ${props => props.fontWeight || "normal"};
              line-height: 1;
              margin: 1rem 1rem 1 1;
              padding: 0.35rem;
              text-decoration: none;
              color: #ffff7e;
              background-color: #665fd1;
              position: relative;
              overflow: hidden;
              box-sizing: border-box;
              border: 2px solid #8ab8fe;
              border-radius: 6px;
              border-width: 1;
              border-style: solid;
              border-color: #d2d6dc;
            `}
          >
            <Trans>Donate</Trans>
          </Link>
        </nav>
      </header>
    </I18nProvider>
  );
};

export default Header;
