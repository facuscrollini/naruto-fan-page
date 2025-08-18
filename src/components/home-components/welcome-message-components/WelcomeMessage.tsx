import { WelcomeMessageButton } from "./WelcomeMessageButton"
import { WelcomeMessageImages } from "./WelcomeMessageImages"

export const WelcomeMessage = () => {
    return (
        <div className="absolute z-1 rounded-2xl w-250">
            <WelcomeMessageImages/>
            <div className=" p-3 mx-2 my-4">
                <div className=" text-center text-sky-900 border-b-2 pb-4 mx-10">
                    <p className="text-2xl leading-6 text-sky-800/70">Welcome to</p> <br></br>
                    <span className="text-5xl tracking-widest font-bold leading-0">Naruchiha</span>
                </div>
                <div className="mt-9 text-center mx-10">
                    <p className="text-2xl mx-5 text-sky-900 mb-10">Here you can find evertything you need to know about <b>Naruto</b>'s characters, and <b>share</b> it with your <b>friends</b>.
                    </p>
                    <WelcomeMessageButton />
                    <p className="mt-3 mb-2 text-sm text-center text-sky-900">To enjoy all of the Naruchiha's wiki benefits,<br /> please <a className="font-bold hover:cursor-pointer underline underline-offset-5">get</a> in your account, or <a className="font-bold hover:cursor-pointer underline underline-offset-5 ">create</a> it.</p>
                </div>
            </div>
        </div>
    )
}
