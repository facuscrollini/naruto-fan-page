import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'


export const AuthLayout = () => {
   return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
 
}
