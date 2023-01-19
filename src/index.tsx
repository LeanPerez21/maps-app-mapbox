import React from 'react';
import ReactDOM from 'react-dom/client';
import MapsApp from './MapsApp';
import mapboxgl from 'mapbox-gl'; 
 
mapboxgl.accessToken = 'pk.eyJ1IjoibGVhbngyMSIsImEiOiJjbGN0c3g3b2sxMnIyM3ZucXY0eWtobDJ5In0.C97fvPLJlDn3avvvHYUj2w';

if (!navigator.geolocation){
  alert('Tu navegador no tiene acceso a tu Geolocalizacion');
  throw new Error('Tu navegador no tiene acceso a tu Geolocalizacion')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

