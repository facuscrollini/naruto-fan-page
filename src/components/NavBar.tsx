import { CategoriesMenu } from "./navbar-components/CategoriesMenu"
import { Search } from "./navbar-components/Search"
import { HomeButton } from "./navbar-components/HomeButton"

export const NavBar = () =>{


return (
    <>
    <nav className="bg-amber-600 flex justify-around">
        <HomeButton/>
        <Search/>
        <CategoriesMenu/>
       
     </nav>
    </>
)    
}