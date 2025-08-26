import { Link } from "react-router"
import { useAuth } from "../../hooks/useContext/useAuth"

export const WarningModalContent = () => {

    const { setWarningModal } = useAuth()



    return (
        <div className="relative max-sm:w-[90vw] sm:w-[580px] lg:w-[550px] 2xl:w-[700px]
    max-sm:h-[50vh] sm:h-[500px] lg:h-[450px]
   bg-white lg:rounded-[3vh] sm:rounded-[2vh] rounded-[1vh]
   flex flex-col justify-center overflow-hidden">
            <button onClick={() => setWarningModal(false)} className=" z-12 text-3xl text-zinc-50  hover:cursor-pointer hover:text-gray-900 hover:scale-130 transition-all duration-500 absolute top-[2vh] right-[2vh]">
                <i className="fa-sharp fa-solid fa-xmark"></i>
            </button>
            {/* <img className="sm:h-1/2  h-3/8 mx-auto" src="/img/kyubichibi.png" /> */}
            <div className="absolute inset-0">

                <img className="h-full w-full object-cover opacity-70" src="/img/MadaraAndHashiramaMountain.jpg" />
            </div>
            <div className="absolute z-12 left-1/16">
            <Link to="/auth/login">
                <button  onClick={()=>setWarningModal(false)} type="button" className="rounded-md px-2 py-1 outline-2 hover:cursor-pointer hover:outline-offset-0 hover:scale-120 transition-all duration-500 border-2 border-zinc-50 outline-gray-950 outline-offset-4 bg-gray-950 text-zinc-50 text-[4vh]">Login</button>
            </Link>
            </div>
            <div className="absolute z-12 right-1/16">
            <Link to="/auth/signup">
                <button onClick={()=>setWarningModal(false)} type="button" className="rounded-md px-2 py-1 outline-2 hover:cursor-pointer hover:outline-offset-0 hover:scale-120 transition-all duration-500 border-2 border-gray-950 outline-zinc-50 outline-offset-4 bg-zinc-50 text-gray-950 text-[4vh]">Sign up</button>
            </Link>
            </div>

            <div className="absolute inset-[1.5vh] border-zinc-50  rounded-md border-2 z-11"></div>

            <div className="absolute top-3/4 bottom-0 bg-cyan-950 z-10 text-white w-full text-center pt-[2vh] md:px-0 px-[2vh] max-sm:pb-0">
                <span>To discover this contain you must have an account, if you don't have one you can create it.</span>
            </div>
        </div>
    )
}
