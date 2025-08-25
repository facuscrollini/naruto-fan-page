import { useAuth } from "../../hooks/useContext/useAuth"

export const WarningModalContent = () => {

    const {setWarningModal} = useAuth()
    return (
        <div className="relative max-sm:w-[90vw] sm:w-[580px] lg:w-[550px] 2xl:w-[700px]
    max-sm:h-[50vh] sm:h-[500px] lg:h-[450px]
   bg-white lg:rounded-[3vh] sm:rounded-[2vh] rounded-[1vh]">
            <button onClick={()=>setWarningModal(false)}className="hover:cursor-pointer hover:text-gray-400 hover:scale-130 transition-all duration-500 absolute top-[1vh] right-[2vh]">
                <i className="fa-sharp fa-solid fa-xmark"></i>
            </button>
        </div>
    )
}
