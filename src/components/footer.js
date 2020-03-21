import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
    color: #EEEEEE;
    font-size: 1rem;
    font-weight: ${props => props.fontWeight || 'normal'};
    line-height: 1;
    margin: 0 0.5rem 0 0;
    padding: 0.25rem; 
    text-decoration: none;

    &.current-page {
        border-bottom: 2px solid #FFFFFF;
    }

    &:last-of-type{
        margin-right: 0;
    }
`;

const Footer = () => (
    <footer
        css={ css`
            background: #273746;
            border-top: 3px solid #A900BD;
            border-bottom: 3px solid #FFFFFF;
            display: flex;
            justify-content: space-between;
            padding: 0.5rem calc((100vw - 950px - 0.5rem)/2);
        ` }
        > 
        <NavLink to="/" fontWeight="bold"> Air4Children </NavLink>

        <nav css = { css`
            margin-top: 0; 
        ` }
        >
            <NavLink to="/team/" activeClassName="current-page">
                Meet the team
            </NavLink>
        </nav>
    </footer>
);

export default Footer;