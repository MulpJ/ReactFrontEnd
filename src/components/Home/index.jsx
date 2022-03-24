import react from "react";
import { axios } from "../../axios/api.jsx";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { List } from "./List";
import "./style.scss";
import logo from "../../assets/logo.png";
import home from "../../assets/Logout.png";
import pesquisa from "../../assets/pesquisa.png";

export function Home() {
    const f = useNavigate();
    const [popu, setPopu] = useState([])
    const [c, setc] = useState(1)
    const [cate, setCategory] = useState([])
    const list = [{"id":28,"name":"Ação"},{"id":12,"name":"Aventura"},{"id":16,"name":"Animação"},{"id":35,"name":"Comédia"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentário"},{"id":18,"name":"Drama"},{"id":10751,"name":"Família"},{"id":14,"name":"Fantasia"}]

    async function useFilm(set) {
        const res = await axios.get(
            "https://apitypescript.cleyssondias.repl.co/movie/popu"
        );
        set(res.data.results)
    }

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) return f("/login");
        
      useFilm(setPopu)
      
      
    });

    function busc() {
      const t = document.getElementById('titulo')
      const out = document.getElementById('out')
      const main = document.getElementById('mainse')
      main.classList.remove('hi')
      const value = document.getElementById('busc').value
      const url = `https://api.themoviedb.org/3/search/movie?api_key=c52691093e2b3765ee3464ab26941ed3&language=pt-br&query=${value}`
      fetch(url).then(res => res.json()).then(data => {
          t.innerHTML = "<p>Resultados</p>"
          out.innerHTML= ""
          data.results.map(async movie => {
               const movieEl = document.createElement('a')
               movieEl.setAttribute('href', `/play/${movie.title}`)
               movieEl.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="image">`
               out.appendChild(movieEl)
           })
       })
  }

  function leave() {
    localStorage.removeItem('token')
  }

    
  function src() {
      const kkk = document.getElementById('mainse')
      const busc = document.querySelector("#busc");
      const busc2 = document.querySelector("#busc2");
      if (c == 1) {
          busc.classList.remove("sear");
          busc2.classList.remove("sear");
          setc(0);
      } else if (c == 0) {
          kkk.classList.add('hi')
          busc.classList.add("sear");
          busc2.classList.add("sear");
          setc(1);
      }
  }
  return (
    <div className="top">
      <header className="head">
        <img className="oo g" onClick={leave} alt="Home Page" src={home} />
        <img className="uu g" src={logo} />
        <input className="search sear" type="text"  id="busc" />
        <input className="sear" type="button" value='Buscar'  onClick={busc} id="busc2" />
        <img className="pp g" alt="Pesquisa" onClick={src} src={pesquisa} />
      </header>
      <main className="corp">
        <div className="view">

        <div id="mainse" className="hi">
            <h2 id="titulo"></h2>
            <div id="out" className="most">
               
            </div>
        </div> 

        <div>
            <h2>Populares MulpJ</h2>
            <div className="most">
                {popu.map((filme) => {
                    return (
                        <Link key={filme.title} to={`/play/${filme.title}`}> <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} /> </Link>  
                    )
                })} 
            </div>
        </div> 

          {list.map((li) => {
            return (
              <List key={li.id} id={li.id} title={li.name}/>
            )
          })}

        </div>
      </main>
    </div>
  );
}
