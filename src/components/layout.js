import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import "./layout.css"
import Header from "./header"
import Form from "./form.js"
import { Message, Divider } from "theme-ui"

const shortcodes = { Message, Divider, Form }

const Layout = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
