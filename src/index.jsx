import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppClass from './AppClass';
import App from './App';
// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AppClass />   
    // <App />
    // {/* change the above line - for interchaning between App and AppClass */}
  // </React.StrictMode>
);
