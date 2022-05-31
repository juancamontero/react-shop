import React, { useState } from "react";
import "@styles/ProductItem.scss";
import addToCard from "@icons/bt_add_to_cart.svg";


const ProductItem = ({product}) => {
  //en el arreglo -> 'cart' va a ser el ESTADO, 'serCart' es una función modificadora de ese ESTADO. useState da el valor inicial de cart
  const [cart, setCart] = useState([]);
  //esta función se ejecuta al onClick del 'addToCard'
  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure>
          <img src={addToCard} onClick={handleClick} alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
