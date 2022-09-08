import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  //creamos una variable dónde esta todo el contexto
  const {
    state: { cart },
  } = useContext(AppContext);

  //vamos a crear una función para calcular el total
  const sumTotal = () => {
    // reducer tiene la lógica que se va a usar, acummulator almacena el total, cuurentValue es el valor actual, y es una función que va a iterar sobre los elementos de cart
    const reducer = (acummulator, currentValue) =>
      acummulator + currentValue.price;
    //Ahora en «sum» vamos a guardar el total, usamos «reduce» que recibe una función «reducer» en este caso, una valor inicial «0», y ejecuta esa función por cada elemnento de «cart», en este caso y lo guarda en «sum»
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((item, index) => (
          <OrderItem product={item} key={`orderItem-${item.id}-${index}`} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
