import React, { Fragment } from "react"

import Sub from "~layout/Sub"
import GridContent from "./GridContent"

import aside from "~content/products/aside"

const crumbs = [{ text: "Products", to: "/products/" }]

const ProductsPage = () => {
  const content = (
    <Fragment>
      <h1>Products</h1>
      <GridContent />
    </Fragment>
  )

  return (
    <Sub
      title="Products"
      crumbs={crumbs}
      content={content}
      aside={aside} />
  )
}

export default ProductsPage
