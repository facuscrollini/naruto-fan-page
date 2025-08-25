import '../styles/index.css'
// import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'
import { WarningModal } from '../components/WarningModal'




function PublicLayout() {

  return (
    <div className="relative">
    {/* <NavBar/> */}
    <WarningModal/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default PublicLayout
