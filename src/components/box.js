import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const TextBox = styled ('div')`
    #background-image: linear-gradient(to top, #ddbbffdd 2rem, #FFFFFF);
    #background: #1f4f73;
    border: 6px solid #708CA1;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    #padding: 0 calc((100vw - 950px) / 2 ) 2rem;
    width: 100%;

    h1{
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }

    p,
    a {
        color: #222;
        margin-top: 0;
    }

    a {
        margin-top: 0.5rem;
    }
`;

const Box = ({ children }) => {
    return(
        <TextBox>
            {children}
        </TextBox>
    )
};

export default Box;
