import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import { Trans } from "@lingui/macro";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import { LocalizedLink } from "gatsby-theme-i18n";

const Lang = ({ lang, onClick, selected }) => (
  <button
    style={{
      marginRight: "10px",
      textDecoration: selected ? "underline" : "none",
      cursor: "pointer"
    }}
    onClick={onClick}
  >
    {lang}
  </button>
);

const NavLink = styled(LocalizedLink)`
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

const Header = props => {
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
    <header
      css={css`
        background: #ffff7e;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 1300px - 0.5rem) / 2);

        -webkit-box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.75);

        position: fixed; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the bottom of the page */
        width: 100%; /* Full width */
      `}
    >
      <NavLink
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
      </NavLink>

      <nav
        css={css`
          margin: 0.5rem 1rem 0 0;
        `}
      >
        <NavLink to="/about/" activeClassName="current-page">
          <Trans>About</Trans>
        </NavLink>
        <NavLink to="/videos/" activeClassName="current-page">
          <Trans>Videos</Trans>
        </NavLink>
        <NavLink to="/volunteering/" activeClassName="current-page">
          <Trans>Volunteering</Trans>
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          <Trans>Contact Us</Trans>
        </NavLink>
      </nav>
      <nav
        css={css`
          margin: 0.5rem 1rem 0 0;
        `}
      >
        <NavLink
          to="/donate/"
          activeClassName="current-page"
          css={css`
            font-size: 1rem;
            font-weight: ${props => props.fontWeight || "normal"};
            line-height: 1;
            margin: 1rem 1rem 1 1;
            padding: 0.35rem;
            text-decoration: none;
            color: #ffff7e;
            background-color: #8ab8fe;
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
        </NavLink>
      </nav>
      <h1 style={{ margin: 0 }}>
        <Lang
          lang="en"
          onClick={e => props.onLangClick("en")}
          selected={props.lang === "en"}
        />
        <Lang
          lang="es"
          onClick={e => props.onLangClick("es")}
          selected={props.lang === "es"}
        />
      </h1>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
