import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sorter from './sorter'
import './App.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sorter />
  </StrictMode>,
)
