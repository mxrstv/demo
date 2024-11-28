import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CreateUser from './CreateUser.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="create" element={<CreateUser />} />
      </Routes>
    </StrictMode>
  </BrowserRouter >,
)
