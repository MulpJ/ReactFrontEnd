import React from 'react'
import iconShow from '../../assets/iconShow.png'
import './style.scss'

export function LoginPage() {
  function showpass() {
    const pass = document.getElementById('password')
    if(pass.type == 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  }


  return (
    <div className="MainContainer">
      <div className="box">
          <form>
            <h1>Login</h1>
            
            <label htmlFor="email">Email</label> 
            <input type="email" required id='email'/>

            <div className="showpass">
              <label htmlFor="password">Senha</label>
              <input type="password" required id='password'/>
              <img src={iconShow} alt="showpass" onClick={showpass} htmlFor="password"/>
            </div>
            
            <button type="submit">Logar</button>
            <div className='op'>
              <p>Não tem cadastro?</p>
              <p>Esqueci a senha!</p>
            </div>
            
          </form>
      </div>
    </div>
  )
}