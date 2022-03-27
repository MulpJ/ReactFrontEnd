import React, { useEffect } from 'react'
import iconShow from "../../assets/iconShow.png";
import {useParams, useNavigate} from 'react-router-dom'
import {axios} from "../../axios/api.jsx"
import './style.scss'

export function RecoveryPass2() {
  const parms = useParams()
  const n = useNavigate()
  useEffect(async() => {
    const token = localStorage.getItem('token')
    if(token) n('/home');
    const Res = await axios.get(`https://apitypescript.cleyssondias.repl.co/verify/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${parms.token1}.${parms.token2}`)
    if(Res.data.res == 'erro') return n('/login')
  })
  function showpass() {
    const pass = document.getElementById("password");
    if (pass.type == "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  function showpass2() {
    const pass = document.getElementById("password2");
    if (pass.type == "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

 async function go(evt) {
    evt.preventDefault();
    const res = document.getElementById('res')
    res.classList.remove("play");
    res.innerHTML = "";

    const pass = document.getElementById('password').value
    const pass2 = document.getElementById('password2').value
    const senhaok = pass.split(' ');

    // ! verificando espaços
    var very = false
    var cont = 0
    senhaok.map(char => {
      if (char == '') {
        very = true
      } 
      cont +=1 
    })

    if (pass != pass2) {
      res.classList.add("play");
      res.innerHTML = "<p style='color:red;'>As Senhas não são iguais</p>";
    } else if (pass.length < 8 || very || cont >= 2) {
      res.classList.add('error')
      res.classList.add('play')
      res.innerHTML = 'Senha inferior a 8 digitos, ou existem espaços'
    } else { 
      const Res = await axios.get(`https://apitypescript.cleyssondias.repl.co/verify/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${parms.token1}.${parms.token2}`)
    
      const ress = await axios.put('https://apitypescript.cleyssondias.repl.co/user', {
        email:Res.data.res.email,
        password:pass
      })

      if(ress.data.error){
        res.classList.add('error')
        res.classList.add('play')
        res.innerHTML = ress.data.error
      } else {
        res.classList.add("sucess");
        res.classList.add("play");
        res.innerHTML = "Senha alterada com sucesso! Redirecionando....";
        setTimeout(() => { n('/login'); }, 2000);
      }
    }
  }


  return (
    <div className="RecoveyMain">
      <div id="res">

      </div>
      <div className="RecoveyBox">
        <h1>Recuperar senha</h1>
        <form onSubmit={go}>
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
          <div className="showpass">
              <label htmlFor="password">Repita a senha</label>
              <input type="password" required id="password2" />
              <img
                src={iconShow}
                alt="showpass"
                onClick={showpass2}
                htmlFor="password"
              />
            </div>
          <button type="submit">Recuperar senha</button>
        </form>
      </div>
    </div>
  )
}