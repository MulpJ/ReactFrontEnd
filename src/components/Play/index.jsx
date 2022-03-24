import {axios} from "../../axios/api.jsx"
import react, { useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"
import { useState } from "react"
import './style.scss'


export  function Play(){
    const verif = useParams()
    const f = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token");
      if (!token) return f("/login");

    const inner = document.querySelector(".mainPlay")

      axios.get('https://danestourado.com/api/google-drive-api-open/api.php').then((res) =>{
        res.data.map((play) => {
            if (play.nome == verif.movie) {
                 const film = play.embed 
                 inner.innerHTML = film

              }    
          })
      })
        

    })
    
    return(
        <div className="mainPlay">
             <iframe width="600" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ"   allow="autoplay;" allowfullscreen></iframe>
        </div>
    )
}

