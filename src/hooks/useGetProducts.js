import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  //useState para guardar la info que trae la API
  const [products, setProducts] = useState([]);

  //useEffect recibe 2 elementos: 1)función anónima donde se ejecuta el código y 2)arreglo dónde se guardan elementos/valores que están escuchando si hay un cambio ** no se usa ahora, depués**
  //Es necesario agregar async y await para esperar la petición

  async function fetchData() {
    const response = await axios(API);
    setProducts(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return products;
};

export default useGetProducts;


