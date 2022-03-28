import './style.scss'
import React from 'react'


// aqui caso o usuario tentar acessar uma pagina nao existente aparecerar essa pagina 
export function NotFound() {
    return (
      <div className="notFoundContainer">
        <h1>404</h1>
        <p>Está perdido? :/</p>
      </div>
    )
}