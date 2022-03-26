import React, { useEffect } from 'react'
import { axios } from "../../axios/api.jsx"
import { Link } from "react-router-dom";
import './style.scss'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoForRegister.png'
import iconShow from '../../assets/iconShow.png'

export function RegisterPage() {
  const n = useNavigate()
  function showpass() {
    const pass = document.getElementById('password')
    if(pass.type == 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  }

  function showpass2() {
    const pass = document.getElementById('passwordVerify')
    if(pass.type == 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  }

  async function api(evt) {
    evt.preventDefault();
    const res = document.getElementById('res')
   

    res.classList.remove('play')
    res.innerHTML = ''

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value
    const senhaV = document.getElementById('passwordVerify').value
    const senhaok = senha.split(' ');

    // ! verificando espaços
    var very = false
    var cont = 0
    senhaok.map(char => {
      if (char == '') {
        very = true
      } 
      cont +=1 
    })

   

    if (senha != senhaV) {
      res.classList.add('error')
      res.classList.add('play')
      res.innerHTML = 'As Senhas não conferem!'
    } else if (senha.length < 8 || very || cont >= 2) {
      res.classList.add('error')
      res.classList.add('play')
      res.innerHTML = 'Senha inferior a 8 digitos, ou existem espaços'
    } else {

    let api = `https://apitypescript.cleyssondias.repl.co/user`

    const response = await axios.post(api, {
      name: `${name}`,
      email: `${email}`,
      password: `${senha}`,
      plan:"Free"
    });

    if (response.data.error){
      res.classList.remove('sucess')
      res.classList.add('error')
      res.classList.add('play')
      res.innerHTML = response.data.error
    }
    
    else if (!response.data.error) {
      res.classList.remove('error')
      res.classList.add('sucess')
      res.classList.add('play')
      res.innerHTML = "Cadastrado com sucesso, redirecionando..."
      setTimeout(() => { n('/login'); }, 3000);
    }


  }
  }
  

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) n('/home');

    document.getElementById('form').addEventListener('submit', api)
  })

  return (
    
    <div className="ResContainer">
      
      <div id="res"></div>
      <div className="Resbox">
        <div className="logoimg">
          <img src={logo} alt="logo" />
        </div>
        <div className="register">
          <form id="form">
            <h1>Cadastro</h1>
            <label htmlFor="name">Nome</label>
            <input type="text" required id='name'/>

            <label htmlFor="email">Email</label>
            <input type="email" required id='email'/>

            <div className="showpass">
              <label htmlFor="password">Senha</label>
              <input type="password" required id="password"/>
              <img src={iconShow} alt="showpass" onClick={showpass} htmlFor="password"/>
            </div>

            <div className="showpass">
              <label htmlFor="passwordVerify">Repita a senha</label>
              <input type="password" required id="passwordVerify"/>
              <img src={iconShow} alt="showpass" onClick={showpass2} htmlFor="password"/>
            </div>

            <button type="submit">Finalizar</button>
            <p><Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}