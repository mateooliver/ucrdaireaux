import './App.css';
import React from 'react';
import NaVar from './components/Navar';
import Banner from './components/Banner';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemContainer from './components/ItemContainer';
import Organigrama from './components/Organigrama';
import CargaDatos from './components/cargaDatos';


function App() {
  return (
    <div>
           
        <BrowserRouter>
          <NaVar />
          <Routes>
              <Route path='/' element={<Banner/>} />
              <Route path='*' element={<Navigate to="/"/>} />
              <Route path="/bolsa" element={<ItemContainer/>} />
              <Route path='/organigrama' element={<Organigrama/>} />
              <Route path='/cargaDatos' element={<CargaDatos/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
