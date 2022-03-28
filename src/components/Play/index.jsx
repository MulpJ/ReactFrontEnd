import {axios} from "../../axios/api.jsx"
import react, { useEffect } from "react"
import { useParams, useNavigate, Link} from "react-router-dom"
import { useState } from "react"
import './style.scss'
import seta  from '../../assets/seta.png'


// pagina de assistir os filmes
export  function Play(){
    const verif = useParams()
    const f = useNavigate()
    // sempre verficando se o usuario tem o token
    useEffect(() => {
        const token = localStorage.getItem("token");
      if (!token) return f("/login");

    const inner = document.querySelector(".iframe")

      // consumindo a api do google drive para buscar o filme pelo titulo, se o titulo corresponder 
      // aparece o filme se o titulo nao corresponder , aparece um video padrao.
      axios.get('https://danestourado.com/api/google-drive-api-open/api.php').then((res) =>{
        res.data.map((play) => {
            if (play.nome == verif.movie) {
                 const film = play.embed 
                 inner.innerHTML = film 
              }    
          })
      })
    })
    // estrutura HTML
    return(
      
        <div className="mainPlay">
          <div className="seta">
          <Link to='/home'><img src={seta} /></Link>
          </div>
            <div className="iframe">
             <iframe width="600" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ"   allow="autoplay;" allowfullscreen></iframe>
             </div>
        </div>

    )
}

