import PublicLayout from './layouts/PublicLayout.tsx'
import { Home } from './pages/Public/Home.page.tsx'
import { Catalog } from './pages/Auth/Catalog.page.tsx'
import { Group } from './pages/Auth/Group.page.tsx'
import { Clan } from './pages/Auth/Clan.page.tsx'
import { Character } from './pages/Auth/Character.page.tsx'
import { Village } from './pages/Auth/Village.page.tsx'
import { Route, Routes } from 'react-router'
import { AuthLayout } from './layouts/AuthLayout.page.tsx'
import { Login } from './pages/Auth/Login.page.tsx'
import { Register } from './pages/Auth/Register.page.tsx'
import { AdminLayout } from './layouts/AdminLayout.tsx'
import { Profile } from './pages/admin/Profile.page.tsx'
import { DashBoard } from './pages/admin/DashBoard.page.tsx'
import { useEffect } from 'react'
import { useSaveAll } from './hooks/useSaveAll.tsx'
import { useNaruto } from './hooks/useContext/useNaruto.tsx'
export const AppRoute = () => {

const {dispatch} = useNaruto()

  useEffect(()=>{
useSaveAll(dispatch)
  }, [])

  
  return (
    <Routes>
      {/* Public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Authorization */}
      <Route path="auth" element={<AuthLayout />}>
        {/* Formularios */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* Vistas restringidas */}
        <Route path="catalog" element={<Catalog type="characters" />} />
        <Route path="group" element={<Group />} />
        <Route path="clan" element={<Clan />} />
        <Route path="character" element={<Character />} />
        <Route path="village" element={<Village />} />
      </Route>

      {/*admin */}
      <Route path="admin" element={<AdminLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Route>


    </Routes>
  )
}
