import "./Products.css";
import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../api/apiSlice";

import Header from "../components/Header/Header";
import Product from "../components/Product/Product";

function Products() {
  const { data, isError, isLoading } = useGetProductsQuery();

  console.log(data);

  const productComponents = data?.products.map((product) => {
    return (
      <Product
        title={product.title}
        brand={product.brand}
        price={product.price}
        image={product.thumbnail}
        id={product.id}
        key={product.id}
      />
    );
  });

  return (
    <section>
      <Header />
      {isLoading ? (
        <h3>Laddar produkter...</h3>
      ) : (
        <section className="products">{productComponents}</section>
      )}
    </section>
  );
}

export default Products;
