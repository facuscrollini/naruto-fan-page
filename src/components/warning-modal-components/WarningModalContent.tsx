import { useAuth } from "../../hooks/useContext/useAuth"

export const WarningModalContent = () => {

    const { setWarningModal } = useAuth()
    return (
        <div className="relative max-sm:w-[90vw] sm:w-[580px] lg:w-[550px] 2xl:w-[700px]
    max-sm:h-[50vh] sm:h-[500px] lg:h-[450px]
   bg-white lg:rounded-[3vh] sm:rounded-[2vh] rounded-[1vh]
   flex flex-col justify-center overflow-hidden">
            <button onClick={() => setWarningModal(false)} className="hover:cursor-pointer hover:text-gray-400 hover:scale-130 transition-all duration-500 absolute top-[1vh] right-[2vh]">
                <i className="fa-sharp fa-solid fa-xmark"></i>
            </button>
            <div className="h-full">
                <span className="flex justify-center items-end">
                    <p className="text-[10vh]">
                        Ready ?
                    </p>
                </span>
                <img className="sm:h-1/2  h-3/8 mx-auto" src="/public/img/kyubichibi.png" />
            <div className="bg-cyan-800 h-full text-white w-full text-center pt-[2vh] md:px-0 px-[2vh] max-sm:pb-0">
                <span><p>Enjoy our catalog once you <b className="hover:cursor-pointer">GET</b> in your account, or if you don't have one,<br/> <b className="hover:cursor-pointer">CREATING</b> it first.</p></span>
            </div>
            </div>
        </div>
    )
}
