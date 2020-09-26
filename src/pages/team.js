import React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";

const Team = () => (
  <Layout>
    <div
      css={css`
        width: 600px;
        height: 600px;
        display: flex;

        div {
          border: 3px inset black;
          border-radius: 15px;
          background-color: #073046;
          opacity: 0.5;
        }
        .a {
          grid-row: 1/2;
          grid-column: 1/1;
        }
        .b {
          grid-row: 2/3-;
          grid-column: 1/1;
        }
        .b {
          grid-row: 3/4;
          grid-column: 1/1;
        }
      `}
    >
      <div class="a">A</div>
      <div class="b">B</div>
      <div class="c">C</div>
    </div>
  </Layout>
);

export default Team;
