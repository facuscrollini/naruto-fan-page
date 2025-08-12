import { Link } from "react-router"

export const NavBar = () =>{
return (
    <>
    <nav >


    <Link to="/">
     <button type="button">Home</button>
    </Link>
    <Link to="/auth/character">
     <button type="button">Character</button>
    </Link>
    <Link to="/auth/clan">
     <button type="button">Clan</button>
    </Link>
    <Link to="/auth/group">
     <button type="button">Group</button>
    </Link>
    <Link to="/auth/village">
     <button type="button">Village</button>
    </Link>
    <Link to="/auth/catalog">
     <button type="button">Catalog</button>
    </Link>
     </nav>
    </>
)    
}