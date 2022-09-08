import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import PasswordRecovery from "@pages/PasswordRecovery";
import Checkout from "@pages/CheckOut";
import NotFound from "@pages/NotFound";
import CreateAccount from "@pages/CreateAccount";
import Orders from "@pages/Orders";
import AppContext from "@context/AppContext";
import useInitialSate from "@hooks/useInitialState";
import "@styles/global.css";

const App = () => {
  //creamos el estado inicial y lo traemos del hook que ya creamos
  const initialState = useInitialSate();
  return (
    //aca estamos entregando al contexto el estado para que lo componentes hijos lo puedan consumir
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/password-recovery"
              element={<PasswordRecovery />}
            />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
