import { CategoriesMenu } from "./navbar-components/CategoriesMenu"
import { Search } from "./navbar-components/Search"
import { HomeButton } from "./navbar-components/HomeButton"
import { useState } from "react"
import { NavBarBackground } from "./NavBarBackground"

export const NavBar = () =>{

    const [dropDown, setDropDown] = useState(false)

return (
    <>
    <nav className="bg-amber-600 flex justify-around relative py-2 border-b-3 border-amber-700">
        
        <NavBarBackground/>
        <HomeButton dropDown={dropDown} setDropDown={setDropDown}/>
        <div className="w-1/4">
        <Search/>
        </div>
        <CategoriesMenu dropDown={dropDown} setDropDown={setDropDown}/>
     </nav>
    </>
)    
}