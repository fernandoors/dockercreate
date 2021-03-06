/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Ads from "./ads"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Ads />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ textAlign: 'center' }}>
          <br />
          Authors: <a
            title="See Fernando's Github Projects"
            rel="external nofollow noopener noreferrer"
            target="_blank" href="https://www.github.com/fernandoors">Fernandoors</a> &{" "}
          <a
            title="See Bruno's Github Projects"
            rel="external nofollow noopener noreferrer"
            target="_blank"
            href="https://www.github.com/brpadilha">BrPadilha</a>
          <br />
          ©{" "} {new Date().getFullYear()} Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
