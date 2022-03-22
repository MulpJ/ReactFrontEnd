import react from "react";
import logo from "../../assets/logo.png"
import home from "../../assets/home.png"
import pesquisa from "../../assets/pesquisa.png"
import './style.scss'
import axios from "axios";
import { useEffect, useState } from "react";
import { List } from "./List";

export function Home() {

    async function kk(cate, id) {
        const ct = await axios.get(`https://apitypescript.cleyssondias.repl.co/movie/category/${id}`)
        cate(ct.data.results)
    }

    const [filmes, SetFilmes] = useState([])
    const [categoriaAction, SetCategoriaAction] = useState([])
    const [categoriaAdventure, SetCategoriaAdventure] = useState([])
    const [categoriaTerror, SetCategoriaTerror] = useState([])
    const [categoriaRomance, SetCategoriaRomance] = useState([])
    const [categoriaWar, SetCategoriaWar] = useState([])



    window.addEventListener("load", async () => {
        const res = await axios.get('https://apitypescript.cleyssondias.repl.co/movie/popu')
        console.log(res.data.results)
        SetFilmes(res.data.results)

        await kk(SetCategoriaAdventure, 12)
        await kk(SetCategoriaAction, 28)
        await kk(SetCategoriaTerror, 27)
        await kk(SetCategoriaRomance, 10749)
        await kk(SetCategoriaWar, 10752)
    })
   


    var n = 1
    async function src() {
        const busc = document.querySelector('#busc')  
        if(n == 1) {
            await busc.classList.remove('sear')
            n = 0
        } else if (n == 0) {
            await busc.classList.add('sear')
            n = 1
        }
        
    }

    return (
        <div className="top">
            <header className="head">
                <img className="oo g" alt="Home Page" src={home} />
                <img className="uu g" src={logo}  />
                <input className="search sear" type="text" id='busc' />
                <img className="pp g" alt="Pesquisa" onClick={src} src={pesquisa} />
            </header>
            <main className="corp">
                <div className="view">
                    <List title="Mais populares" key={1} var={filmes}/>
                    <List title="Aventura"  key={2} var={categoriaAdventure}/>
                    <List title="Ação"  key={3} var={categoriaAction}/>
                    <List title="Romance"  key={4} var={categoriaRomance}/>
                    <List title="Terror"  key={5} var={categoriaTerror}/>
                    <List title="Guerra"  key={6} var={categoriaWar}/>
                </div>
            </main>
        </div>
    )
}