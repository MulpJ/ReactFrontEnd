import React, { useEffect } from 'react'
import {axios} from "../../axios/api.jsx"
import {useNavigate} from 'react-router-dom'
import './style.scss'


// pagina recuperação de senha
export function RecoveryPass() {
  const n = useNavigate()
  // token padrao
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) n('/home');
  })
  // funçap para enviar o email de recuperaçao de senha para o usuario 
 async function go(evt) {
    evt.preventDefault();
    const res = document.getElementById('res')
    res.classList.remove("play");
    res.innerHTML = "";

    const email = document.getElementById('email').value
    const token = await axios.get(`https://apitypescript.cleyssondias.repl.co/token/${email}`)
    console.log(token)
    res.classList.add("play");
    res.innerHTML = "Um email de troca de senha foi enviado, para sua caixa de entrada!";
  }

// estrutura HTML
  return (
    <div className="RecoveyMain">
      <div id="res">

      </div>
      <div className="RecoveyBox">
        <h1>Recuperar senha</h1>
        <form onSubmit={go}>
          <label htmlFor="email">Email Cadastrado</label>
          <input type="email" required id="email"/>
          <button type="submit">Recuperar senha</button>
        </form>
      </div>
    </div>
  )
}