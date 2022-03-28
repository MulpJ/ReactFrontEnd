import React, {useEffect} from "react";
import iconShow from "../../assets/iconShow.png";
import "./style.scss";
import {axios} from "../../axios/api.jsx"
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


// pagina de login
export function LoginPage() {
// redirecionamento do usuario e verificando sua token
  const n = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) n('/home');

    document.getElementById("form").addEventListener("submit", async(evt) => {
      evt.preventDefault();
      
      // pegando as informções que o usuario colocar 
      const email = document.getElementById("email").value;
      const senha = document.getElementById("password").value;
      const res = document.getElementById("res");

      res.classList.remove("play");
      res.innerHTML = "";
      // levando as informações para o backend
      let api = `https://apitypescript.cleyssondias.repl.co/User/${email}/${senha}`;
      const response = await axios.get(api);
      // fazendo o tratamento das informações para verificar se o usuario existe
      if (response.data.error) {
        res.classList.add("error");
        res.classList.add("play");
        res.innerHTML = response.data.error;
      } else if (!response.data.error) {
        res.classList.add("sucess");
        res.classList.add("play");
        res.innerHTML = "Redirecionando....";
        localStorage.setItem("token", response.data.token);
        n('/home')
      }
    });
  })
  // função para mostrar e esconder a senha
  function showpass() {
    const pass = document.getElementById("password");
    if (pass.type == "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  // estrutura HTML
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
              <p><Link to="/recovery">Esqueci a senha!</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
