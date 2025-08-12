import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'

export const AdminLayout = () => {
   return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
