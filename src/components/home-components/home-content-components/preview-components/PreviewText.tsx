import { useNavigate } from "react-router"
import { useAuth } from "../../../../hooks/useContext/useAuth"

interface Props {
  title?: string,
  description?: string,
  type?: string
}


export const PreviewText = ({ title, description, type }: Props) => {

const nav = useNavigate()
const {changeCatalog, user, setWarningModal, warningModal} = useAuth()


const handleClick = () =>{
  // user?.userName? console.log("Si hay usuario") : console.log("No hay usuario")
  setWarningModal(!warningModal)
// changeCatalog(type!)
// nav("/auth/catalog")
}

  return (
    <>
     
        <p onClick={handleClick} className="md:text-left text-center mb-2 max-sm text-[3vh] sm:text-[5vh] lg:text-[10vh]" >{title}</p>
  
      <p className="max-md:text-center max-sm:text-[1.4vh]">{description}</p>
    </>
  )
}
