import react from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export function List(parms) {

    return (
        <div key={parms.title} >
            <h2>{parms.title}</h2>
            <div className="most">
                {parms.var.map((filme) => {
                    return (
                        <Link to={`/play/${filme.id}`}> <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} /> </Link>  
                    )
                })} 
            </div>
        </div>
        
    )
}