// index.jsx
// This is the STARTING POINT of React app
// Like main() in Java!
// This file runs FIRST when you open browser
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ↑ Brings App.jsx into this file

// Find <div id="root"> in index.html
// And put our App inside it!
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);