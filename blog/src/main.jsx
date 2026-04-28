import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Hook from './Hook.jsx'
import B from './B.jsx'
import A from './A.jsx'
import C from './C.jsx'
import Scroll from './Scroll.jsx'
import CreateCon from './CreateCon.jsx'
import G from './G.jsx'
import I from './I.jsx'
import Reducer from './Reducer.jsx'
import R1 from './R1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <R1/>
    </BrowserRouter>
  </StrictMode>,
)
