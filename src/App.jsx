import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import ProductsView from './components/ProductsView'
import ProductCards from './components/Products/ProductCards'
import Topbar from './components/Navbar/Topbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar />
      <Router>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
