import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import PasswordRecovery from "../pages/PasswordRecovery";
import Checkout from "../pages/CheckOut";
import NotFound from "../pages/NotFound";
import "../styles/global.css";
import CreateAccount from "../pages/CreateAccount";
import Orders from "../pages/Orders";






const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/password-recovery" element={<PasswordRecovery/>} />
          <Route exact path="/send-email" element={<SendEmail/>} />
          <Route exact path="/new-password" element={<NewPassword/>} />
          <Route exact path="/account" element={<MyAccount/>} />
          <Route exact path="/signup" element={<CreateAccount/>} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/orders" element={<Orders />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
