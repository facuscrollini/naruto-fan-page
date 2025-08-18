import { Link } from "react-router"


export const WelcomeMessageButton = () => {
    return (
         <div className="w-full flex justify-center ">
        <div className="bg-sky-800 pb-3 hover:bg-sky-600 px-5 rounded-2xl hover:cursor-pointer transform hover:scale-110 transition-tranform duration-300">
            <Link to="/auth/login">
                <p className=" text-4xl text-sky-100 ">
                    Join your ninja way
                </p>
            </Link>
        </div>
        </div>
    )
}
