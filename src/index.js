import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

// Reactdom.render(
//   <App/>,
//   document.getElementById('root')
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className=''>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
  
);