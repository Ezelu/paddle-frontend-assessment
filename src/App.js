import React from 'react';
import './styles/App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';



export default function App () {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/github' element={<Main />} />
      </Routes>
    </>
  )
}