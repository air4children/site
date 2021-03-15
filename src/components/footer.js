import React from "react";
import { css } from "@emotion/core";
import Paper from '@material-ui/core/Paper';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';

const Footer = () => {
  return (
    <Paper
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 1100px - 0.5rem) / 2);
        position: sticky; /* Set the navbar to fixed position */
        align-items: center;
      `}
    >
      <p>© 2020 air4children | made with <FavoriteSharpIcon /> by gatsby</p> 
    </Paper>
  );
};

export default Footer;
