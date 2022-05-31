import React from "react";
import Header from "@components/Header";

const Layout = ({ children }) => {
  return (
    // este div tiene la base del proyecto, se hace un encapsulamiento de lo que recibe este componente, recibe diferentes componentes que pueden vivir dentro de forma ordenada
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
