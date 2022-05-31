import React, { useRef } from "react";
import "@styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  //inicializamos en NULL pq no hay valores iniciales, esta variabel «form», es la que se usa al definir el formulario en 'ref={form}'
  const form = useRef(null);

  // este es el manejador del SUBMIT
  const handleSubmit = (event) => {
    //para que no se de el default que en este caso , y por default de html, envía la data por una URL
    event.preventDefault();

    //form data consolida  todos los elemtentos del formulario y los tiene listos para ser usados cuando se da submit,
    //Es propio de Javascript y  es más seguro
    //hacemos referencia al form de useEffext. El current determina el uso del estado actual del form
    const formData = new FormData(form.current);
    // vamos a crear un objeto que permite tener la informacióm como se la vamos a querer enviar al back-end
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  //debemos cambiar en los elemntos del formulario 'id' por 'name'
  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            autoComplete="username"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
