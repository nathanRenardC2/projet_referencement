import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VenteVelos from './pages/VenteVelos';
import Informations from './pages/Informations';
import Entretien from './pages/Entretien';
import LocationVelos from './pages/LocationVelos';
import VentePieces from './pages/VentePieces';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vente_velo' element={<VenteVelos />} />
          <Route path='/informations' element={<Informations />} />
          <Route path='/entretient_velo' element={<Entretien />} />
          <Route path='/location_velo' element={<LocationVelos />} />
          <Route path='/vente_piece' element={<VentePieces />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
