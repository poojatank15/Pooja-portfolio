import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Cardview from './Cardview.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/*     <App /> */}
    <Cardview/>
  </StrictMode>,
)
