import '../styles/index.css'
// import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'




function PublicLayout() {

  return (
    <div className="relative">
    {/* <NavBar/> */}
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default PublicLayout
