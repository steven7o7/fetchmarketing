import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

import './styles/tokens.css';
import './styles/globals.css';

// If you have a particle canvas component, import and pass it here.
// import ParticleCanvas from './components/your/ParticleCanvas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App /* ParticleCanvas={ParticleCanvas} */ />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
