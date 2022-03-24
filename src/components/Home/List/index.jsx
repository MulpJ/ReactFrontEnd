import react, { useEffect, useState } from 'react'
import { axios } from "../../../axios/api.jsx";
import { Link } from 'react-router-dom'
import './style.scss'

export function List(parms) {

    const [cate, setCategory] = useState([])

    useEffect(async() => {
        const res = await axios.get(
            `https://apitypescript.cleyssondias.repl.co/movie/category/${parms.id}`
        );
        setCategory(res.data.results) 
    })

    return (
        <div>
            <h2>{parms.title}</h2>
            <div className="most" id={parms.id}>
            {cate.map((filme) => {
                    return (
                        <Link key={filme.title} to={`/play/${filme.title}`}> <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} /> </Link>  
                    )
                })} 
            </div>
        </div> 
    )
}