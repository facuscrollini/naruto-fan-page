import { Link, NavLink } from "react-router"
import { useAuth } from "../../hooks/useContext/useAuth"

export type Props = {
  className:string,
  type:string,
  title: string
}

export const CategoriesButton = ({className, type, title}:Props) => {

    const {catalog, changeCatalog} = useAuth()
 

    const seeCategory = () =>{
        changeCatalog(type)
    
    }


  return (
    <NavLink to="/auth/catalog">
     <button onClick={seeCategory}className="bg-green-300 rounded m-3 px-2 py-1 hover:cursor-pointer" type="button">{title}</button>
    </NavLink>

  )
}
