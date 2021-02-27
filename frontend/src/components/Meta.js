import React from "react";
import { Helmet } from "react-helmet";

export default function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title} | ProShop</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
    title: "ProShop",
    description: "We sell best electronic products",
    keywords: "electronics, gadgets, devices"
  };