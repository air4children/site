import React from "react";
import Layout from "../components/layout";
import { Trans } from "@lingui/macro";
import { LocalizedLink } from "gatsby-theme-i18n";

export default ({ location }) => (
  <Layout location={location.pathname}>
    <h1><Trans>Donate</Trans></h1>
    <p><Trans>can donate here</Trans></p>
    <LocalizedLink to="/">&larr; <Trans>back to home</Trans></LocalizedLink>
  </Layout>
);
