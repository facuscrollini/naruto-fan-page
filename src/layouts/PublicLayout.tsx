import '../styles/index.css'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'




function PublicLayout() {

  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default PublicLayout
