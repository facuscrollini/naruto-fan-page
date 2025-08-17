
export const WelcomeMessage = () => {
    return (
        <div className="absolute z-1 top-30 left-30 bg-orange-300 rounded-2xl py-2 px-4">
            <div className="  bg-amber-700 rounded-2xl p-3">
                <p className="text-2xl text-amber-100">Welcome to Naruchiha's wiki!</p>
            </div>
            <p className="mt-3 mb-2 text-amber-900">To enjoy all of the Naruthiha's wiki benefits,<br/> please <a className="font-bold hover:cursor-pointer underline underline-offset-5">get</a> in your account, or <a className="font-bold hover:cursor-pointer underline underline-offset-5 ">create</a> it</p>
        </div>
    )
}
