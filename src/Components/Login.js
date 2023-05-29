import React from "react";
import Header from "./Header";
import "../Css/Login.css";

import Navigation from "./Navigation";
import { useForm } from "react-hook-form";
function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = console.log("başarılı");
  return (
    <div>
      <Navigation />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Login">
          <div className="Login_başlık">
            <h2>GİRİŞ YAP</h2>
          </div>
          <div className="Username">
            <label htmlFor="Username_input">Username</label>
            <input
              className="Username_input"
              type="text"
              {...register("Username")}
            />
          </div>
          <div className="Password">
            <label htmlFor="Password_input">Password</label>
            <input
              className="Password_input"
              type="password"
              {...register("Password")}
            />
          </div>
          <div className="Login_giriş">
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
