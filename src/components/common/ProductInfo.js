import React from "react";

const ProductInfo = ({ title, children }) => (
  <main className="container py-8">
    <h1 className="text-xl lg:text-4xl font-bold">{title}</h1>
    <hr className="my-4" />
    <article>{children}</article>
  </main>
);

export default ProductInfo;
