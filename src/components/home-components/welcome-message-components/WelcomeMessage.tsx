import { WelcomeMessageButton } from "./WelcomeMessageButton"

export const WelcomeMessage = () => {
    return (
        <div className="absolute z-1 rounded-2xl w-250">
            <div className="absolute top-1/4 -left-1/6 -rotate-20 bg-amber-400 h-1/3 w-1/6 z-2 overflow-hidden rounded-xl border-3 border-black">

                <img className="w-full object-cover h-full" src="https://i.pinimg.com/736x/10/d2/ec/10d2ec02b67ab4bcde0e6c085210d001.jpg" />
            </div>
            <div className="absolute top-2/4 -left-1/10 rotate-20 bg-amber-400 h-1/3 w-1/6 z-2 overflow-hidden rounded-xl border-3 border-black">
                <img className="w-full object-cover h-full" src="https://preview.redd.it/if-chakra-was-equal-for-the-tailed-beasts-son-goku-would-be-v0-zlz68g4bxmpd1.jpeg?width=640&crop=smart&auto=webp&s=5c467afa0a4a061768e53e9919f279ddba88ff2c" />
            </div>
            <div className="absolute top-1/4 -right-1/6 rotate-20 bg-amber-400 h-1/3 w-1/6 z-2 overflow-hidden rounded-xl border-2 border-black">
                <img className="w-full object-cover h-full" src="https://i.redd.it/what-is-this-style-of-art-coloring-called-v0-c53wj827x1xb1.jpg?width=1200&format=pjpg&auto=webp&s=c4a7d8802e09e820f687558c509480f600664870" />
            </div>
            <div className="absolute top-2/4 -right-1/20 -rotate-20 bg-amber-400 h-1/3 w-1/6 z-2 overflow-hidden rounded-xl border-2 border-black">
                <img className="w-full object-cover h-full" src="https://media.tenor.com/eLCmXURX2wAAAAAM/madara-uchiha.gif" />
            </div>
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
