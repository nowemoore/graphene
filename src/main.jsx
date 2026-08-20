import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IconContext } from '@phosphor-icons/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider replaces the context wholesale, so restate the defaults it
        carries — size 1em keeps every icon driven by its CSS font-size. */}
    <IconContext.Provider value={{ weight: 'light', size: '1em', color: 'currentColor' }}>
      <App />
    </IconContext.Provider>
  </StrictMode>,
)
