import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // If this line is missing or broken, the warning in App.tsx triggers!

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)