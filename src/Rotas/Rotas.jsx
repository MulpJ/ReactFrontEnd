import React from 'react'
import { BrowserRouter , Routes ,Route, useParams } from 'react-router-dom';
// * Components
import { LoginPage } from '../components/LoginPage'
import { RegisterPage } from '../components/RegisterPage';
import { RecoveryPass } from '../components/RecoveryPass';
import { NotFound } from '../components/NotFound';
import { HomePage } from '../components/HomePage/Home.jsx'
import { Home } from '../components/Home'
import { Play } from '../components/Play';

export function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/recovery" element={<RecoveryPass/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/play/:movie" element={<Play/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    )
  }