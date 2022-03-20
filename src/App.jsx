import './App.scss'
import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';

// * Components
import { LoginPage } from './components/LoginPage'
import { RegisterPage } from './components/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
