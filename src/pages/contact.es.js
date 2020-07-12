import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { Trans } from "@lingui/macro";
import { I18nProvider } from "@lingui/react";
import catalogEN from "../locales/en/messages";
import catalogES from "../locales/es/messages";
import Wave from "../components/wave";


export default () => {

  return (
    <I18nProvider language="es" catalogs={{ en: catalogEN, es: catalogES }}>
      <Layout>
        <h1><Trans>Contact Us</Trans></h1>

        <p>
        <Trans>If you have any questions about becoming a collaborator, volunteer, mentor, sponsor, or anything else,
        do not hesitate to mail us to `robotics.libre@gmail.com`.</Trans>
        </p>

        <p>
        <Trans>Also, you can create an issue in any of the repositories in  https://github.com/air4children.
</Trans>
        </p>
        <Wave />

      </Layout>
    </I18nProvider>
  );
};
