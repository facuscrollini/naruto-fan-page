import { useNavigate } from "react-router"
import { useAuth } from "../../../../hooks/useContext/useAuth"
import type { NarutoStoreType } from "../../../../context/narutoContext"

interface Props {
  title?: string,
  description?: string,
  type?: keyof NarutoStoreType
}


export const PreviewText = ({ title, description, type }: Props) => {

const nav = useNavigate()
const {changeCatalog, setWarningModal, logged} = useAuth()

const halfHeight = (document.documentElement.scrollHeight - window.innerHeight) / 2





const handleClick = () =>{
 if(logged){
changeCatalog(type!)
nav("/auth/catalog")
 }
 else{

   window.scrollTo({
   top: halfHeight,
   left:0,
   behavior: "smooth"
   })

   
 setWarningModal(true)

 }
}

  return (
    <>
     
        <p onClick={handleClick} className="md:text-left text-center mb-2 max-sm:text-[3rem] sm:text-[5rem] lg:text-[10vh]" >{title}</p>
  
      <p className="max-md:text-center max-sm:text-[1rem]">{description}</p>
    </>
  )
}
