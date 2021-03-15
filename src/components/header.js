import React from "react";
import { css } from "@emotion/core";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Trans } from "@lingui/macro";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import { LocalizedLink } from "gatsby-theme-i18n";

/** Material UI components */
import Paper from '@material-ui/core/Paper';

/* antd UI components */
import { Button, Menu, Dropdown } from 'antd';
import { TranslationOutlined, SolutionOutlined, BookOutlined, MailOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const Header = props => {

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={event => {props.onLangClick("en")}} >
          English
        </Button>
      </Menu.Item>
      <Menu.Item>
      <Button onClick={event => {props.onLangClick("es")}} >
          Español
        </Button>
      </Menu.Item>
    </Menu>
  );
  
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

  /** antd */
  const current  = state;
  const [state, setState] = React.useState(true);
  const handleClick = e => {
    console.log('click ', e);
    setState({ current: e.key });
  };

  return (
    <Paper variant="outlined"
      css={css`
        background: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 1100px - 0.5rem) / 2);
        z-index: 999;
        position: sticky; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the bottom of the page */
        width: 100%; /* Full width */
      `}
    >
    
      <nav
        css={css`
          margin: 0.5rem 1rem 0 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
          <Link
            to="/"
            css={css`
              width: 50px;
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
            padding: 0.25rem;
            text-decoration: none;
            text-align: left; /* If you want the text to be centered */
          `}>
              <Trans>air4children</Trans>
          </LocalizedLink>
      </nav>

      <nav
        css={css`
          margin: 0.5rem 1rem 0 0;
          width: 100%;
        `}
      >
          <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
            <SubMenu
              key="SubMenuPrograms"
              icon={<BookOutlined />}
              title="Programs"
            >
              <Menu.ItemGroup title="Children">
                <Menu.Item key="setting:1">
                  <LocalizedLink to="/programs/">
                    <Trans>Age 5-8</Trans>
                  </LocalizedLink>
                </Menu.Item>
                <Menu.Item key="setting:2">
                  <LocalizedLink to="/programs/">
                    <Trans>Age 9-12</Trans>
                  </LocalizedLink>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Teens">
                <Menu.Item key="setting:3">
                  <LocalizedLink to="/programs/">
                    <Trans>Age 12-15</Trans>
                  </LocalizedLink>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="mail" icon={<MailOutlined />}>
              <LocalizedLink to="/publications/">
                <Trans>Publications</Trans>
              </LocalizedLink>
            </Menu.Item>
            <SubMenu
              key="SubMenuVolunteering"
              icon={<SolutionOutlined />}
              title="Volunteer"
            >
              <Menu.Item key="setting:1">
                <LocalizedLink to="/programs/">
                  <Trans>Volunteer</Trans>
                </LocalizedLink>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <LocalizedLink to="/programs/">
                  <Trans>Volunteer FAQs</Trans>
                </LocalizedLink>
              </Menu.Item>
              <Menu.Item key="setting:3">
              <LocalizedLink to="/programs/">
                  <Trans>Volunteer Application</Trans>
                </LocalizedLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="SubMenuAbout"
              icon={<SettingOutlined />}
              title="About us"
            >
              <Menu.Item key="setting:1">
                <LocalizedLink to="/about/">
                  <Trans>About us</Trans>
                </LocalizedLink>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <LocalizedLink to="/contact/">
                  <Trans>Contact</Trans>
                </LocalizedLink>
              </Menu.Item>
              <Menu.Item key="setting:3">
                <LocalizedLink to="/team/">
                  <Trans>The team</Trans>
                </LocalizedLink>
              </Menu.Item>
            </SubMenu>
          </Menu>

      </nav>
      <nav
        css={css`
          margin: 0.5rem 1rem 0 0;
          
        `}
      >
        <Button type="primary" shape="round" size="large">
          <LocalizedLink
            to="/donate/"
            activeClassName="current-page"
            css={css`
              color: #b2dfdb;
            `}
          >
            <Trans>Donate</Trans>
          </LocalizedLink>
        </Button>
      </nav>

      <nav
        css={css`
          margin: 0.5rem 1rem 0 0;
        `}
      >
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <TranslationOutlined /> 
          </a>
        </Dropdown>
      </nav>

    </Paper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
