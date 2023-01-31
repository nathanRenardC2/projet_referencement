import React from 'react';
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
          <Route path='/' element={<Home  pageName='VéloEco+ | Vélos électriques ecolologique sur Grenoble' />} />
          <Route path='/vente_velo' element={<VenteVelos pageName='VéloEco+ | Achat de vélos électriques' />} />
          <Route path='/informations' element={<Informations pageName='VéloEco+ | Informations' />} />
          <Route path='/entretien_velo' element={<Entretien pageName='VéloEco+ | Entretenir son vélo électrique' />} />
          <Route path='/location_velo' element={<LocationVelos pageName='VéloEco+ | Location de vélos éléctriques' />} />
          <Route path='/vente_piece' element={<VentePieces pageName='VéloEco+ | Achat de pièces détachées'  />} />
          <Route path='*' element={<NotFound pageName='VéloEco+ | 404 - Page non trouvée' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
