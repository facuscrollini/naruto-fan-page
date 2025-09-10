import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const AdminLayout = () => {
   return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


export default withAuthenticationRequired(AdminLayout)