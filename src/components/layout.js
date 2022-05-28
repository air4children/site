import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header";
import Footer from "../components/footer";

import {
  heading,
  html,
  body,
  cardBody
} from '../css/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <html lang="en-US" className={html}>
      <Header/>
      <br/>
      <body className={body}>
        <div className={cardBody}>
          <h1 className={heading}>{pageTitle}</h1>
          <br/>
          {children}
        </div>
      </body>
      <br/>
      <Footer/>
    </html>
  )
}
export default Layout