import React, { useContext } from "react";
import "@styles/ProductItem.scss";
//traigo el contexto, el hook se conecta por App.jsx
import AppContext from "@context/AppContext";
import addToCardImg from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  //esta función se ejecuta al onClick del 'addToCard', recibe el producto
  const handleClick = (item) => {
 
    addToCart(item)
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure>
          <img src={addToCardImg} onClick={()=> handleClick(product)} alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
