import { Link } from "react-router"

export const NavBar = () =>{
return (
    <>
    <nav >


    <Link to="/">
     <button type="button">Home</button>
    </Link>
    <Link to="/character">
     <button type="button">Character</button>
    </Link>
    <Link to="/clan">
     <button type="button">Clan</button>
    </Link>
    <Link to="/group">
     <button type="button">Group</button>
    </Link>
    <Link to="/village">
     <button type="button">Village</button>
    </Link>
    <Link to="/catalog">
     <button type="button">Catalog</button>
    </Link>
     </nav>
    </>
)    
}