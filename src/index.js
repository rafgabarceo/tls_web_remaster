import React from 'react';
import ReactDOM from 'react-dom/client';

//For styling
import './App.css'; 
import './Header.css'; 
import './Body.css'; 
import './Footer.css'; 
import './MaterialUi.css';

//Article components
import App from './App.js';

const university = ReactDOM.createRoot(document.getElementById('University'));
const menagerie = ReactDOM.createRoot(document.getElementById('Menagerie'));
const sports = ReactDOM.createRoot(document.getElementById('Sports'));
const vanguard = ReactDOM.createRoot(document.getElementById('Vanguard'));
const opinion = ReactDOM.createRoot(document.getElementById('Opinion'));

university.render(
  <App section='University'/>
);
menagerie.render(
  <App section='Menagerie'/>
);
sports.render(
  <App section='Sports'/>
);
vanguard.render(
  <App section='Vanguard'/>
);
opinion.render(
  <App section='Opinion'/>
);

