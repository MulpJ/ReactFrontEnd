import React from "react";
import iconShow from "../../assets/iconShow.png";
import "./style.scss";
import axios from "axios";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function LoginPage() {
  function showpass() {
    const pass = document.getElementById("password");
    if (pass.type == "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  window.addEventListener("load", () => {
    document.getElementById("form").addEventListener("submit", async(evt) => {
      evt.preventDefault();
      
      
      const email = document.getElementById("email").value;
      const senha = document.getElementById("password").value;
      const res = document.getElementById("res");

      res.classList.remove("play");
      res.innerHTML = "";

      let api = `https://apitypescript.cleyssondias.repl.co/User/${email}/${senha}`;

      const response = await axios.get(api);

      if (response.data.error) {
        res.classList.add("error");
        res.classList.add("play");
        res.innerHTML = response.data.error;
      } else if (!response.data.error) {
        res.classList.add("sucess");
        res.classList.add("play");
        res.innerHTML = "Redirecionando....";

        localStorage.setItem("nome", response.data.user.name);
        localStorage.setItem("plano", response.data.user.plan);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("money", response.data.user.money);
        window.location = "/home";
      }
    });
  });

  return (
    <div className="MainContainer">
      <div id="res">dasd</div>
      <div className="all">
        <img src={logo} alt="logo" className="logo" />
        <div className="box">
          <form id="form">
            <h1>Login</h1>

            <label htmlFor="email">Email</label>
            <input type="email" required id="email" />

            <div className="showpass">
              <label htmlFor="password">Senha</label>
              <input type="password" required id="password" />
              <img
                src={iconShow}
                alt="showpass"
                onClick={showpass}
                htmlFor="password"
              />
            </div>

            <button id="btn" type="submit">Logar</button>
            <div className="op">
              <p>
                <Link to="/register">Não tem Cadastro?</Link>
              </p>
              <p>Esqueci a senha!</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
