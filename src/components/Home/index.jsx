import react from "react";
import logo from "../../assets/logo.png"
import home from "../../assets/home.png"
import pesquisa from "../../assets/pesquisa.png"
import wall from "../../assets/wall.jpg"
import './style.scss'
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {

    const [filmes, SetFilmes] = useState([])
    const [categoria, SetCategoria] = useState([])
    
    useEffect(async () => {
        const res = await axios.get('https://apitypescript.cleyssondias.repl.co/movie/popu')
        SetFilmes(res.data.results)
        const c = await axios.get('https://apitypescript.cleyssondias.repl.co/movie/category')
        SetCategoria(c.data.results)

    })
    
    function src() {
        const busc = document.querySelector('#busc')  
        if (busc.classList.find('sear')) {
            busc.classList.remove('sear')
        } 
        else {
            busc.classList.add('sear')
        }
        
    }

    return (
        <body className="top">
            <header className="head">
                <img className="oo g" alt="Home Page" src={home} />
                <img className="uu g" src={logo}  />
                <input className="search sear" type="text" id='busc' />
                <img className="pp g" alt="Pesquisa" onClick={src} src={pesquisa} />
            </header>
            <main className="corp">
                <div className="view">
                    <h2>Mais Populares</h2>
                    <div className="most">
                        {filmes.map((filme) => {
                            return (
                                    <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} />
                            )
                        })} 
                    </div>
                      
                </div>
            </main>
        </body>
    )
}