import { Link } from "react-router"

export const WelcomeMessage = () => {
    return (
        <div className="absolute z-1  rounded-2xl w-4/6">
            <div className=" p-3 mx-2 my-4">

                <div className=" text-center text-sky-900 border-b-2 pb-4 mx-10">
                    <p className="text-2xl leading-6 text-sky-800/70">Welcome to</p> <br></br>
                    <span className="text-5xl tracking-widest font-bold leading-0">Naruchiha</span>
                </div>
                <div className="mt-9 text-center mx-10">
                    <p className="text-2xl mx-5 text-sky-900 mb-10">Here you can find evertything you need to know about <b>Naruto</b>'s characters, and <b>share</b> it with your <b>friends</b>.
                    </p>
                    <div className="w-full flex justify-center ">
                        <div className="bg-sky-800 pb-3 hover:bg-sky-600 px-5 rounded-full hover:cursor-pointer transform hover:scale-110 transition-tranform duration-300">
                            <Link to="/auth/login">
                                <p className=" text-4xl 0 text-sky-200 ">
                                    Join your ninja way
                                </p>
                            </Link>
                        </div>
                    </div>
                    <p className="mt-3 mb-2 text-sm text-center text-sky-900">To enjoy all of the Naruchiha's wiki benefits,<br /> please <a className="font-bold hover:cursor-pointer underline underline-offset-5">get</a> in your account, or <a className="font-bold hover:cursor-pointer underline underline-offset-5 ">create</a> it.</p>
                </div>
            </div>
        </div>
    )
}
