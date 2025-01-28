import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../api/apiSlice";

function ProductInfo() {
  const params = useParams();
  const { data, isError, isLoading } = useGetProductByIdQuery(params.id);

  return (
    <>
      {data ? ( // ternary operator
        <section>
          <img src={data.images[0]} />
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Pris: {data.price}</p>
        </section>
      ) : (
        <h2>Ingen produkt vald</h2>
      )}
    </>
  );
}

export default ProductInfo;
