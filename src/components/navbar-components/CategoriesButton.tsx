import { Link, NavLink } from "react-router"
import { useAuth } from "../../hooks/useContext/useAuth"

export type Props = {
  className:string,
  type:string,
  title: string
}

export const CategoriesButton = ({type, title}:Props) => {

    const { changeCatalog} = useAuth()
 

    const seeCategory = () =>{
        changeCatalog(type)
    
    }


  return (
    <NavLink to="/auth/catalog">
     <button onClick={seeCategory}className="w-full m-0 bg-emerald-200 m-3 px-2 py-1 hover:cursor-pointer" type="button">{title}</button>
    </NavLink>

  )
}
