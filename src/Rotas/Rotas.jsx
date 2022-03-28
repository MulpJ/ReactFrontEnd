import React from 'react'
import { BrowserRouter , Routes ,Route, useParams } from 'react-router-dom';
// * Components
import { LoginPage } from '../components/LoginPage'
import { RegisterPage } from '../components/RegisterPage';
import { RecoveryPass } from '../components/RecoveryPass';
import { RecoveryPass2 } from '../components/RecoveryPass2';
import { NotFound } from '../components/NotFound';
import { HomePage } from '../components/HomePage/Home.jsx'
import { Home } from '../components/Home'
import { Play } from '../components/Play';

// todas as rotas 
export function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/recovery" element={<RecoveryPass/>}/>
          <Route path="/recovery/:token1/:token2" element={<RecoveryPass2/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/play/:movie" element={<Play/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    )
  }