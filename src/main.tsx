import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StoreProvider } from './context/storeContext'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './components/App.tsx'
import { Home } from './pages/Home.tsx'
import { Catalog } from './pages/Catalog.tsx'
import { Group } from './pages/Group.tsx'
import { Clan } from './pages/Clan.tsx'
import { Character } from './pages/Character.tsx'
import { Village } from './pages/Village.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <StoreProvider>
        <Routes>
          <Route element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog type="characters"/>}/>
          <Route path="/group" element={<Group/>}/>
          <Route path="/clan" element={<Clan/>}/>
          <Route path="/character" element={<Character/>}/>
          <Route path="/village" element={<Village/>}/>
          </Route>
        </Routes>
      </StoreProvider>
    </StrictMode>,
  </BrowserRouter>
)
