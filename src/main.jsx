import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Hero } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Policy } from './components';
import './index.css';
import Terms from './components/Terms';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
