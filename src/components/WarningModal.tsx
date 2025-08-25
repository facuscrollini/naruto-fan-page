import { useAuth } from "../hooks/useContext/useAuth"
import { WarningModalContent } from "./warning-modal-components/WarningModalContent"

export const WarningModal = () => {

const {warningModal, setWarningModal} = useAuth()


  return (
    <div
     className={` ${warningModal ? "opacity-100" : "opacity-0"}`} >

    <div className="absolute z-300 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
       <WarningModalContent/>
    </div>
    
    <div onClick={()=> setWarningModal(false)} className="absolute inset-0 z-290 bg-gray-900/50 "></div>
    </div>
  )
}
