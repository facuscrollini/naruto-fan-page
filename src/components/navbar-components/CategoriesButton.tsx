import { NavLink } from "react-router"
import { useAuth } from "../../hooks/useContext/useAuth"

export type Props = {
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
     <button onClick={seeCategory}className="w-full py-2 bg-orange-50 px-2 py-1 hover:cursor-pointer text-orange-900 hover:bg-orange-200" type="button">{title}</button>
    </NavLink>
   

  )
}
