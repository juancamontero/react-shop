import React from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "@hooks/useGetProducts";
import "@styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);

  //products guarda lo que recibe de la APY y lo mapea a ProductItem, es decir itera sobre cada ítem de products y hace render de ProductItem
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
