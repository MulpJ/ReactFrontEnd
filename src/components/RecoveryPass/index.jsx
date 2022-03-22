
import React from 'react'
import './style.scss'

export function RecoveryPass() {
  return (
    <div className="RecoveyMain">
      <div className="res">

      </div>
      <div className="RecoveyBox">
        <h1>Recuperar senha</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"/>
          <button type="submit">Recuperar senha</button>
        </form>
      </div>
    </div>
  )
}