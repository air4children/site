import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.es';
import { Trans } from "@lingui/macro";
import { I18nProvider } from "@lingui/react";
import catalogEN from "../locales/en/messages";
import catalogES from "../locales/es/messages";

export default () => (
  <I18nProvider language="es" catalogs={{ en: catalogEN, es: catalogES }}>
    <Layout>
        <h1><Trans>Donate</Trans></h1>
        <p><Trans>can donate here</Trans></p>
        <Link to="/">&larr; <Trans>back to home</Trans></Link>
    </Layout>
  </I18nProvider>
)
