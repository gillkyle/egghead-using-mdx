import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div
      style={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
    >
      <img alt="Egghead + MDX" src="./mdx-and-egghead.png" />
      <p>Simple examples for using MDX.</p>
      <Link to="/my-first-post/">Go to the MDX page</Link>
    </div>
  </Layout>
)

export default IndexPage
