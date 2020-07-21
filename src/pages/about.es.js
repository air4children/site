import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.es";
import { Trans } from "@lingui/macro";
import { I18nProvider } from "@lingui/react";
import catalogEN from "../locales/en/messages";
import catalogES from "../locales/es/messages";

export default () => {

  return (
    <I18nProvider language="es" catalogs={{ en: catalogEN, es: catalogES }}>
      <Layout>
        <h1><Trans>What is air4children ?</Trans></h1>

        <p>
        <Trans>air4children is inspired by KHAN academy which is a non-profit organization with the goal of changing education for the better. In the same fashion, LibrE Robotics has also been thought to be a non-profit organization in which the main goals are fivefold:</Trans>
        </p>

        <p>
          <ul>
            <li><Trans>to contribute to the development of a free world-class education in Robotics for anyone anywhere;</Trans></li>
            <li><Trans>to design and build low-cost robots with high standards of quality;</Trans></li>
            <li><Trans>to improve current open source software projects so as to be more approachable by inexperienced users;</Trans></li>
            <li><Trans>to design free access material in educational Robotics, and develop activities where organization and cooperation of the participants can foster possible solutions for environmental, social and healthcare issues; and</Trans></li>
            <li><Trans>to design and build environments where participants can discover and develop their own capabilities.</Trans></li>
          </ul>
        </p>

        <p>
        <Trans>air4children will provide software and hardware for educational robots that are extremely reliable (robust), modifiable, and very cheap in order to be accessible to anyone and to enable a much more rapid development of the community.
        In addition to that, **air4children** has been adopted the philosophy of free software foundation, since free and open-source software and hardware licences state that anyone is freely licensed to use, copy, study and change in any way, and the source code is openly shared so that users are encouraged to voluntarily improve the design of the software. Meyer said:</Trans>
        </p>

        <p>
          <Trans>Libre software offers scientists the possibility of sharing with their peers how they have solved problems. This, of course is basic for the evolution of science; but libre software goes beyond that and makes this happen in a cost-effective way.*</Trans>
        </p>
        <p>
        <Trans>For further information, you can read the complete documentation at</Trans>
        </p>

        <h2><Trans>References:</Trans></h2>

        <p>
          <ul>
            <li><a name="salman1">Salman Khan, Khan Academy: A free world-class education for anyone anywhere</a></li>
            <li><a name="meyer1">Meyer, Tony, Building Cost-effective Research Platforms : Utilising Free | Open- source Software in Research Projects</a></li>
          </ul>
        </p>

      </Layout>
    </I18nProvider>
  );
};
