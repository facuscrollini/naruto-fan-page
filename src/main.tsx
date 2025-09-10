import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { NarutoStoreProvider } from './context/narutoContext'
import { BrowserRouter } from 'react-router'
import { AppRoute } from './routes'
import { AuthProvider } from './context/authContext'
import { AuthZeroprovider } from './providers/AuthProvider'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <NarutoStoreProvider>
        <AuthProvider>
          <AuthZeroprovider>
          <AppRoute />
          </AuthZeroprovider>
        </AuthProvider>
      </NarutoStoreProvider>
    </StrictMode>
  </BrowserRouter>
)
