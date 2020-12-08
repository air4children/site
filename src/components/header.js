import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Trans } from "@lingui/macro";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import { LocalizedLink } from "gatsby-theme-i18n";

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

const Header = props => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "only_logo.png" }) {
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
        background: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 1300px - 0.5rem) / 2);

        -webkit-box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        position: sticky; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the bottom of the page */
        width: 100%; /* Full width */
      `}
    >
      <Link
        to="/"
        css={css`
          margin: 0.5rem 1rem 0 0;
          width: 47px;
        `}
      >
        <Image
          fluid={image.sharp.fluid}
          alt="air4children"
        />
      </Link>
      <LocalizedLink to="/" activeClassName="current-page"
      css={css`
        color: #263238;
        margin: 0.5rem 1rem 0 0;
        font-size: 1.3rem;
        font-weight: ${props => props.fontWeight || "normal"};
        padding: 0.25rem;
        text-decoration: none;
        text-align: left; /* If you want the text to be centered */
    `}>
          <Trans>air4children</Trans>
      </LocalizedLink>

      <nav
        css={css`
          margin: 0.5rem 1rem 0 0;
          width: 100%;
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
            border-radius: 5px 5px 5px 5px; /* Rounded corners on the top right and bottom right side */
            background-color: #00796b;
            color: #b2dfdb;
            width: 100%; /* Full width */

            &:hover {
              background-color: #0091ea;
            }
          `}
        >
          <Trans>Donate</Trans>
        </NavLink>
      </nav>
      <div>
        <h1 css={css`
            top: 90px;
            background-color: #4CAF50;

            position: absolute; /* Position them relative to the browser window */
            left: -70px; /* Position them outside of the screen */
            transition: 0.3s; /* Add transition on hover */
            padding: 15px; /* 15px padding */
            width: 100px; /* Set a specific width */
            text-decoration: none; /* Remove underline */
            font-size: 20px; /* Increase font size */
            color: white; /* White text color */
            border-radius: 0 5px 5px 0; /* Rounded corners on the top right and bottom right side */
            
            &:hover {
              left: 0; /* On mouse-over, make the elements appear as they should */
            }
          `}
        >
          <Lang 
            lang="en"
            onClick={e => props.onLangClick("en")}
            selected={props.lang === "en"}
          />
        
        </h1>
        <h1 css={css`
            top: 150px;
            background-color: #2196F3; /* Blue */

            position: absolute; /* Position them relative to the browser window */
            left: -70px; /* Position them outside of the screen */
            transition: 0.3s; /* Add transition on hover */
            padding: 15px; /* 15px padding */
            width: 100px; /* Set a specific width */
            text-decoration: none; /* Remove underline */
            font-size: 20px; /* Increase font size */
            color: white; /* White text color */
            border-radius: 0 5px 5px 0; /* Rounded corners on the top right and bottom right side */

            &:hover {
              left: 0; /* On mouse-over, make the elements appear as they should */
            }
          `}
        >
          <Lang
            lang="es"
            onClick={e => props.onLangClick("es")}
            selected={props.lang === "es"}
          />
        </h1>
      </div> 
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
