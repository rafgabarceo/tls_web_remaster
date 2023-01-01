import React from 'react';
import ReactDOM from 'react-dom/client';

//For styling
import './App.css'; 
import './Header.css'; 
import './Body.css'; 
import './Footer.css'; 
import './MaterialUi.css';

//Article components
import HomeBody from './Components/HomeBody.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HomeBody/>
);
