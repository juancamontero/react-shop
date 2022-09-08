import { useState } from "react";

//como vamos a agragar elementos al carrito vamos a trabajar con  «cart» dentro de este objeto «initialState»
const initialState = {
  cart: [],
};

// para ello creamos el estado *useState*
const useInitialSate = () => {
  //se va a inicializar con el initialState que hemos creado
  const [state, setState] = useState(initialState);

  //se crea una función que permite modificar los valores del estado, «payload» en este caso es el producto que se va a adicionar, es el parámetro que recibe para modificar el estado
  const addToCart = (payload) => {
    setState({
      //Le voy a decir que traiga y mantenga lo que tiene (lo que ya está en el cart o incluso Id del cliente, etc), para eso se usa el spread operator...
      ...state,
      // ya que tengo lo anterior , ahora puntualmente a cart (teniendo en cuento y manteniendo lo anterior ...), le adiciono el producto «payload»
      // Voy a adicionar un ID único a cada item de «cart» que va a ser «idCart», para después buscar por ese Id y evitar conflictos coon items del mismo id
      cart: [
        ...state.cart,
        { ...payload, idCart: `${payload.id}-${state.cart.length + 1}` },
      ],
    });
  };

  //esta es la función para remover del carrito, traemos el indexValue para evitar problemas cuando se elimen productos con el mismo Id
  const removeFromCart = (payload) => {
    //debemos eliminar uno de los ítems del carrito «cart», vamos a filtrar todo donde y dejar en el nuevo «cart» todo donde no es igual «idCart»
    setState({
      ...state,
      cart: state.cart.filter((items) => items.idCart !== payload.idCart),
    });
  };

  //Ahora voy a retornar el estado y la función que tengo
  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialSate;
