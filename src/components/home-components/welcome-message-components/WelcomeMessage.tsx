import { Link } from "react-router"

export const WelcomeMessage = () => {
    return (
        <div className="absolute z-1 bg-orange-300 rounded-2xl w-4/6">
            <div className="border rounded-lg border-orange-900 p-3 mx-2 my-4">

                <div className=" text-center text-amber-100 bg-amber-700 rounded-2xl p-3">
                    <p className="text-2xl leading-6 text-amber-200">Welcome to</p> <br></br>
                    <span className="text-5xl leading-0">Naruchiha!</span>
                </div>
                <div className="mt-9">

                    <p className="text-2xl mx-5 text-amber-900">Here you can find evertything you need to know about <b>Naruto</b>'s characters, and <b>share</b> it with your <b>friends</b>.
                    </p>
                    <div className="w-full flex justify-end ">
                        <div className="bg-amber-950 pb-3 hover:bg-amber-900 px-5 rounded-full hover:cursor-pointer transform hover:scale-110 transition-tranform duration-300">
                            <Link to="/auth/login">
                                <p className="text-right text-5xl 0 text-amber-200 ">
                                    Let's go!
                                </p>
                            </Link>
                        </div>
                    </div>
                    <p className="mt-3 mb-2 text-sm text-center text-amber-900">To enjoy all of the Naruchiha's wiki benefits,<br /> please <a className="font-bold hover:cursor-pointer underline underline-offset-5">get</a> in your account, or <a className="font-bold hover:cursor-pointer underline underline-offset-5 ">create</a> it</p>
                </div>
            </div>
        </div>
    )
}
