import { useNavigate } from "react-router"
import { useAuth } from "../../../../hooks/useContext/useAuth"

interface Props {
  title?: string,
  description?: string,
  type?: string
}


export const PreviewText = ({ title, description, type }: Props) => {

const nav = useNavigate()
const {changeCatalog, user, setWarningModal} = useAuth()

const halfHeight = (document.documentElement.scrollHeight - window.innerHeight) / 2





const handleClick = () =>{
 if(user?.userName){
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
     
        <p onClick={handleClick} className="md:text-left text-center mb-2 max-sm text-[3vh] sm:text-[5vh] lg:text-[10vh]" >{title}</p>
  
      <p className="max-md:text-center max-sm:text-[1.4vh]">{description}</p>
    </>
  )
}
