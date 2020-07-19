import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Trans } from "@lingui/macro";
import { I18nProvider } from "@lingui/react";
import catalogEN from "../locales/en/messages";
import catalogES from "../locales/es/messages";

const NavLink = styled(Link)`
  color: #eeeeee;
  font-size: 1.2rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  color: #ffffff;
  text-shadow: 3px 5px 2px #474747;
  &.current-page {
    border-bottom: 2px solid #ffffff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "air4childrenLogo1.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <I18nProvider language="es" catalogs={{ en: catalogEN, es: catalogES }}>
      <header
        css={css`
          background: #1f4f73;
          border-bottom: 3px solid #b34f28;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem calc((100vw - 950px - 0.5rem) / 2);
          height: 80px;
          font-family: "Balsamiq Sans", cursive;
        `}
      >
        <NavLink to="/es/" fontWeight="bold">
          {" "}
          <Trans>Air4Children</Trans>
        </NavLink>

        <nav
          css={css`
            margin-top: 0;
          `}
        >
          <NavLink to="/es/about/" activeClassName="current-page">
            <Trans>About</Trans>
          </NavLink>
          <NavLink to="/es/videos/" activeClassName="current-page">
            <Trans>Videos</Trans>
          </NavLink>
          <NavLink to="/es/volunteering/" activeClassName="current-page">
            <Trans>Volunteering</Trans>
          </NavLink>
          <NavLink to="/es/donate/" activeClassName="current-page">
            <Trans>Donate</Trans>
          </NavLink>
          <NavLink to="/es/contact/" activeClassName="current-page">
            <Trans>Contact Us</Trans>
          </NavLink>
          <NavLink to="/en/" activeClassName="current-page">
            <Trans>en</Trans>
          </NavLink>
        </nav>
      </header>
    </I18nProvider>
  );
};

export default Header;
